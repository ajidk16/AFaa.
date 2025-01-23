/* eslint-disable prettier/prettier */
import { NextApiRequest } from "next";
import { z } from "zod";

import { createProduct, getProductByUser } from "@/models/productModel";

const productSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  description: z.string().min(1, { message: "description is required" }),
  img: z.string().optional(),
  price: z.number().min(1, { message: "price is required" }),
  stock: z.number().min(1, { message: "stock is required" }),
});

export const create = async (
  body: {
    name: string;
    description: string;
    img: string;
    price: number;
    stock: number;
  },
  userId: number
) => {
  const validationResult = productSchema.safeParse(body);

  if (!validationResult.success) {
    return { status: false, error: validationResult.error.errors };
  }

  const { name, price, stock, img, description } = validationResult.data;

  const product = await createProduct({
    name,
    price,
    userId,
    img,
    stock,
    description,
  });

  return { status: true, product };
};

export const listByUser = async (req: NextApiRequest) => {
  const userId = (req as any)?.userId;

  const products = await getProductByUser(userId);

  return { status: true, products };
};
