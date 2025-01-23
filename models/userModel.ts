import prisma from "@/lib/prisma";

export const createUser = async (data: {
  email: string;
  password: string;
  name: string;
  phone: string;
}) => await prisma.user.create({ data });

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};
