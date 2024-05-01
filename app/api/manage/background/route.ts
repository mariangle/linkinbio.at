import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function PATCH(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { color, url } = await req.json();

  const background = await db.background.update({
    where: {
      userId: session.user.id,
    },
    data: {
      color,
      url,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: background,
    message: "Background updated successfully",
  });
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { color, url } = await req.json();

  const background = await db.background.create({
    data: {
      userId: session.user.id,
      color,
      url,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: background,
    message: "Background updated successfully",
  });
}
