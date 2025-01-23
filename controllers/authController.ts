/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { createUser, findUserByEmail } from "@/models/userModel";
import prisma from "@/lib/prisma";

const registereSchema = z.object({
  email: z.string().min(1, { message: "email is required" }),
  password: z.string().min(1, { message: "password is required" }),
  name: z.string().min(1, { message: "name is required" }),
  phone: z.string().min(1, { message: "phone is required" }),
});

export const register = async (body: {
  email: string;
  password: string;
  name: string;
  phone: string;
}) => {
  const validationResult = registereSchema.safeParse(body);

  if (!validationResult.success) {
    return { status: 400, error: validationResult.error.errors };
  }

  const { email, password, name, phone } = validationResult.data;

  const existingUser = await prisma?.user?.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { status: "error", message: "Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser({
    email,
    password: hashedPassword,
    name,
    phone,
  });

  return { user };
};

const loginSchema = z.object({
  email: z.string().min(1, { message: "email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});

const getDeviceInfo = () => {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
  };
};

export const login = async (body: { email: string; password: string }) => {
  try {
    const validationResult = loginSchema.safeParse(body);

    if (!validationResult.success) {
      return { status: 400, error: validationResult.error.errors };
    }

    const device = getDeviceInfo();

    const { email, password } = validationResult.data;
    const user: any = await findUserByEmail(email);

    if (!user) {
      return { error: "User not found" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { error: "Invalid credentials" };
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "8h",
      }
    );

    delete user.password;

    return {
      message: "login successfully",
      token,
      user,
      userAgent: device.userAgent,
      platform: device.platform,
    };
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
