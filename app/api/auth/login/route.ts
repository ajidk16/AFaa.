import { NextRequest } from "next/server";

import { login } from "@/controllers/authController";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const response = await login(body);

  return Response.json(response);
}
