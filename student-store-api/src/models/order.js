const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllOrders = async () => {
  return prisma.orders.findMany({
    include: {
      orderItems: true
    }
  });
};

const getOrderById = async (order_id) => {
  const price = await getTotal(order_id);
  console.log(price);
  const t = await prisma.orders.update({
    where: { order_id: parseInt(order_id) },
    data: {
      total_price: price,
    }
  });

  return prisma.orders.findUnique({ 
    where: { order_id: parseInt(order_id) },
    include: {
      orderItems: true
    }
  });
};

const createOrder = async (orderData) => {
  const {orderItems: orderItems, ...rest} = orderData
  return await prisma.orders.create({ data: orderData });
};

const updateOrder = async (order_id, orderData) => {
  return prisma.orders.update({
    where: { order_id: parseInt(order_id) },
    data: orderData,
  });
};

const deleteOrder = async (order_id) => {
  return prisma.orders.delete({ where: { order_id: parseInt(order_id) } });
};

const createItem = async (order_id, itemData) => {
  const order = await prisma.orders.findUnique({
    where: { order_id: parseInt(order_id) },
  });

  if (!order){
    throw new Error("Order not found");
  }

  const orderData = {
    orders_id: parseInt(order_id),
    ...itemData
  }

  return prisma.order_items.create({ data: orderData });
};


const getTotal = async (order_id) => {
  const order = await prisma.orders.findUnique({
    where: { order_id: parseInt(order_id) },
    include: {
      orderItems: true
    }
  });
  console.log(order);

  if (!order){
    throw new Error("Order not found");
  }

  const price = order.orderItems.reduce((total, item) => {
    console.log(item, total);
    return total + (item.quantity * item.price);
  }, 0);

  const p = {
    total_price: price
  }

  const updatedPrice = await prisma.orders.update({
    where: { order_id: parseInt(order_id) },
    data: p,
  });
  
  return price;
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  createItem,
  getTotal,
};