/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const authenticate = async (req: NextRequest, callback: Function) => {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    (req as any).userId = (decoded as { userId: number }).userId;

    return await callback(req);
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
};
