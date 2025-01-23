import prisma from "@/lib/prisma";

export const createProduct = async (data: {
  name: string;
  description?: string;
  img?: string;
  price: number;
  stock: number;
  userId: number;
}) => {
  return await prisma.product.create({ data });
};

export const getProductByUser = async (userId: number) => {
  return await prisma.product.findMany({ where: { userId } });
};
