import { NextRequest, NextResponse } from "next/server";

import { create, listByUser } from "@/controllers/productController";
import { authenticate } from "@/middleware/authMiddleware";

export async function GET(req: NextRequest) {
  return authenticate(req, async () => {
    const response = await listByUser(req as any);

    return NextResponse.json(response);
  });
}

export async function POST(req: NextRequest) {
  return authenticate(req, async () => {
    const body = await req.json();

    const response = await create(body, (req as any).userId);

    return NextResponse.json(response);
  });
}
