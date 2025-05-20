import { Request, Response } from "express";
import { OrderStatus, PaymentStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, items } = req.body;

    if (!customerId || !Array.isArray(items) || items.length === 0) {
      res.status(400).json({ message: "Missing required fields" });
      return;
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

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  const { orderId } = req.params;
  const user = req.user;
  const orderIdNum = parseInt(orderId);

  if (!user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  if (isNaN(orderIdNum)) {
    res.status(400).json({ message: "Invalid order ID" });
    return;
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderIdNum },
      include: {
        customer: true,
        restaurant: true,
        driver: true,
        payment: true,
        items: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    // Authorization check
    if (
      (user.role === "customer" && String(order.customerId) !== user.id) ||
      (user.role === "restaurant" && String(order.restaurantId) !== user.id) ||
      (user.role === "driver" && String(order.driverId) !== user.id)
    ) {
      res.status(403).json({ message: "Unauthorized access to this order" });
      return;
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving order:", error);
    res.status(500).json({ message: "Failed to retrieve order" });
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
    const user = req.user;
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const userRole = user.role;
    const userId = user.id;

    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
    });

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    // Role-based authorization logic
    if (userRole === "customer") {
      if (String(order.customerId) !== userId) {
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
      if (String(order.restaurantId) !== userId) {
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
      if (order.driverId && String(order.driverId) !== userId) {
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
