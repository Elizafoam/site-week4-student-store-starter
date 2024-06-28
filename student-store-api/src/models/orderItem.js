const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllOrderItems = async () => {
  return prisma.order_items.findMany();
};

const getOrderItemsById = async (order_item_id) => {
  return prisma.order_items.findUnique({ where: { order_item_id: parseInt(order_item_id) } });
};

const createOrderItem = async (orderData) => {
  return prisma.order_items.create({ data: orderData });
};

const updateOrderItem = async (order_item_id, orderData) => {
  return prisma.order_items.update({
    where: { order_item_id: parseInt(order_item_id) },
    data: orderData,
  });
};

const deleteOrderItem = async (order_item_id) => {
  return prisma.order_items.delete({ where: { order_item_id: parseInt(order_item_id) } });
};

module.exports = {
  getAllOrderItems,
  getOrderItemsById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};