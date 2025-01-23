import { NextRequest } from "next/server";

import { register } from "@/controllers/authController";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const response = await register(body);

  return Response.json(response);
}
