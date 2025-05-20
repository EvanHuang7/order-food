import { Request, Response } from "express";
import { OrderStatus, PaymentStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrders = async (req: Request, res: Response) => {
  try {
    const { customerId, items } = req.body;

    if (!customerId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Group items by restaurant
    const groupedItems = new Map<number, typeof items>();
    for (const item of items) {
      if (!groupedItems.has(item.restaurantId)) {
        groupedItems.set(item.restaurantId, []);
      }
      groupedItems.get(item.restaurantId)!.push(item);
    }

    // Calculate total payment amount
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Use one transaction for payment + orders + orderItems
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create payment
      const payment = await tx.payment.create({
        data: {
          customerId,
          amount: totalAmount,
          status: PaymentStatus.Pending,
          paymentDate: new Date(),
          provider: "placeholder", // Replace if needed
          methodToken: "placeholder", // Replace if needed
        },
      });

      // 2. Create orders & order items
      const orders = [];
      for (const [restaurantId, restaurantItems] of groupedItems.entries()) {
        const orderTotal = restaurantItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        const order = await tx.order.create({
          data: {
            customerId,
            restaurantId,
            status: OrderStatus.Pending,
            totalPrice: orderTotal,
            paymentId: payment.id,
          },
        });

        const orderItemsData = restaurantItems.map((item) => ({
          orderId: order.id,
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          price: item.price,
        }));

        await tx.orderItem.createMany({ data: orderItemsData });

        orders.push(order);
      }

      return { payment, orders };
    });

    res.status(201).json(result);
  } catch (error: any) {
    console.error("Error creating orders:", error);
    res.status(500).json({
      message: "Failed to create orders",
      error: error.message,
    });
  }
};

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user } = req as any;
    const cognitoId = user.id;
    const userType = user.role;

    let orders = [];

    if (userType === "customer") {
      const customer = await prisma.customer.findUnique({
        where: { cognitoId },
      });
      if (!customer) {
        res.status(404).json({ message: "Customer not found" });
        return;
      }

      orders = await prisma.order.findMany({
        where: { customerId: customer.id },
        include: { items: true, restaurant: true, driver: true },
        orderBy: { createdAt: "desc" },
      });
    } else if (userType === "restaurant") {
      const restaurant = await prisma.restaurant.findUnique({
        where: { cognitoId },
      });
      if (!restaurant) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }

      orders = await prisma.order.findMany({
        where: { restaurantId: restaurant.id },
        include: { items: true, customer: true, driver: true },
        orderBy: { createdAt: "desc" },
      });
    } else if (userType === "driver") {
      const driver = await prisma.driver.findUnique({ where: { cognitoId } });
      if (!driver) {
        res.status(404).json({ message: "Driver not found" });
        return;
      }

      orders = await prisma.order.findMany({
        where: { driverId: driver.id },
        include: { items: true, customer: true, restaurant: true },
        orderBy: { createdAt: "desc" },
      });
    } else {
      // Unknown role, deny by default
      res.status(403).json({ message: "Unauthorized role" });
      return;
    }

    res.json(orders);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching orders: ${error.message}` });
  }
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { orderId } = req.params;
    const { status, driverId } = req.body;

    const userRole = req.user.role;
    const userId = req.user.id;

    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
    });

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    // Role-based authorization logic
    if (userRole === "customer") {
      if (order.customerId !== userId) {
        res.status(403).json({ message: "Unauthorized: not your order" });
        return;
      }
      if (status !== OrderStatus.Cancelled) {
        res.status(400).json({ message: "Customers can only cancel orders" });
        return;
      }
      // Customers cannot update driverId
      if (driverId !== undefined) {
        res
          .status(403)
          .json({ message: "Customers cannot update driver assignment" });
        return;
      }
    } else if (userRole === "restaurant") {
      if (order.restaurantId !== userId) {
        res
          .status(403)
          .json({ message: "Unauthorized: not your restaurant's order" });
        return;
      }
      const allowedStatuses = [OrderStatus.Accepted, OrderStatus.Preparing];
      if (!allowedStatuses.includes(status)) {
        res.status(400).json({ message: "Invalid status for restaurant" });
        return;
      }
      // Restaurants cannot update driverId
      if (driverId !== undefined) {
        res
          .status(403)
          .json({ message: "Restaurants cannot update driver assignment" });
        return;
      }
    } else if (userRole === "driver") {
      // Driver can update driverId only if unassigned or assigned to self
      if (order.driverId && order.driverId !== userId) {
        res
          .status(403)
          .json({ message: "Unauthorized: not your assigned order" });
        return;
      }
      const allowedStatuses = [OrderStatus.PickedUp, OrderStatus.Delivered];
      if (!allowedStatuses.includes(status)) {
        res.status(400).json({ message: "Invalid status for driver" });
        return;
      }
    } else {
      // Unknown role, deny by default
      res.status(403).json({ message: "Unauthorized role" });
      return;
    }

    const updatedOrder = await prisma.order.update({
      where: { id: Number(orderId) },
      data: {
        status,
        // Only set driverId if user is driver, else undefined to prevent update
        driverId:
          userRole === "driver" ? driverId ?? order.driverId : order.driverId,
      },
      include: {
        items: true,
        driver: true,
      },
    });

    res.json(updatedOrder);
  } catch (error: any) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: `Error updating order: ${error.message}` });
  }
};
