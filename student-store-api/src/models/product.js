const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllProducts = async (filter = {}, orderBy = {}) => {
  return prisma.products.findMany({
    where: filter,
    orderBy: orderBy,
  });
};

const getProductById = async (id) => {
  return prisma.products.findUnique({ where: { id: parseInt(id) } });
};

const createProduct = async (productData) => {
  return prisma.products.create({ data: productData });
};

const updateProduct = async (id, productData) => {
  return prisma.products.update({
    where: { id: parseInt(id) },
    data: productData,
  });
};

const deleteProduct = async (id) => {
  return prisma.products.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};