import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { NotificationType, OrderStatus, PaymentStatus } from "@prisma/client";

export const createOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, items } = req.body;

    // Check input
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

    // Use one transaction for payment + orders + orderItems + notification record
    const result = await prisma.$transaction(async (tx) => {
      // Create payment
      const payment = await tx.payment.create({
        data: {
          customerId,
          amount: totalAmount,
          status: PaymentStatus.Paid,
          provider: "Stripe", // Replace after test
          methodToken: "test-token", // Replace after test
        },
      });

      // Create orders & order items for each restaurant
      const orders = [];
      for (const [restaurantId, restaurantItems] of groupedItems.entries()) {
        const orderTotal = restaurantItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        // Create order
        const order = await tx.order.create({
          data: {
            customerId,
            restaurantId,
            status: OrderStatus.Pending,
            totalPrice: orderTotal,
            paymentId: payment.id,
          },
        });

        // Create order items
        const orderItemsData = restaurantItems.map((item) => ({
          orderId: order.id,
          menuItemId: item.id,
          quantity: item.quantity,
          price: item.price,
        }));
        await tx.orderItem.createMany({ data: orderItemsData });

        orders.push(order);
      }

      // Create Notification record
      await tx.notification.create({
        data: {
          type: NotificationType.SubscribeApp,
          message:
            `Hi, dear orderfood subscribers.\n\n` +
            `Thank you for your order and payment!\n\n` +
            `As part of our promotional event, you'll receive 10% cashback from this payment as a credit toward your next purchase.\n\n` +
            `The cashback will be applied to your account within 7 days after the payment is completed.`,
        },
      });

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

export const getAvailableOrdersForDriver = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Get all orders without driverId assgined and status is not cancalled
    const orders = await prisma.order.findMany({
      where: {
        driverId: null, // only orders without a driver assigned
        status: {
          not: OrderStatus.Cancelled, // exclude cancelled orders
        },
      },
      include: {
        items: {
          include: {
            menuItem: true,
          },
        },
        customer: true,
        restaurant: true,
        driver: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(orders);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching orders: ${error.message}` });
  }
};

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId } = req.params;
    const user = req.user as any;

    // Get order with orderId
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
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

    // Only allow user to access their own order
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
    const user = req.user as any;
    const cognitoId = user.id;
    const userType = user.role;

    let orders = [] as any;

    // Get orders by user type
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
        include: {
          items: {
            include: {
              menuItem: true,
            },
          },
          restaurant: true,
          driver: true,
        },
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
        include: {
          items: {
            include: {
              menuItem: true,
            },
          },
          customer: true,
          driver: true,
        },
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
        include: {
          items: {
            include: {
              menuItem: true,
            },
          },
          customer: true,
          restaurant: true,
        },
        orderBy: { createdAt: "desc" },
      });
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
    const { userId, status, driverId } = req.body;
    const user = req.user as any;
    const userRole = user.role;

    // Get order info to check user's auth for update
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
      include: {
        customer: {
          include: {
            notificationSetting: true,
          },
        },
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

    // Check user's auth for update based on userRole
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
      if (driverId !== "") {
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
      if (driverId !== "") {
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
      // Add "" to list to allow driver only update driverId
      const allowedStatuses = [OrderStatus.PickedUp, OrderStatus.Delivered, ""];
      if (!allowedStatuses.includes(status)) {
        res.status(400).json({ message: "Invalid status for driver" });
        return;
      }
    }

    const shouldNotify =
      (status === OrderStatus.PickedUp || status === OrderStatus.Delivered) &&
      order.customer.notificationSetting?.foodDelivered;

    // Do write actions in one transaction
    const updatedOrder = await prisma.$transaction(async (tx) => {
      // Update order
      const updatedOrder = await tx.order.update({
        where: { id: Number(orderId) },
        data: {
          status: status || order.status,
          driverId:
            userRole === "driver" ? driverId ?? order.driverId : order.driverId,
        },
        include: {
          items: true,
          driver: true,
        },
      });

      // Create Notification record for customer
      if (shouldNotify) {
        await tx.notification.create({
          data: {
            customerId: order.customerId,
            type: NotificationType.FoodDelivered,
            // TODO: add order link.
            message: `Your order has been ${status.toLowerCase()} by driver.`,
          },
        });
      }

      return updatedOrder;
    });

    res.json(updatedOrder);
  } catch (error: any) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: `Error updating order: ${error.message}` });
  }
};
