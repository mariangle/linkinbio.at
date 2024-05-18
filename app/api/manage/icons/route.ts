import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { convertToPrismaTopIconStyle } from "@/lib/utils/enum-mappings";

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

  const { shadow, style, color } = await req.json();

  const prismaStyle = convertToPrismaTopIconStyle(style);

  const topIcon = await db.topIcon.update({
    where: {
      userId: session.user.id,
    },
    data: {
      shadow,
      style: prismaStyle,
      color,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: topIcon,
    message: "Icons updated successfully",
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

  const { shadow, style, color } = await req.json();

  const prismaStyle = convertToPrismaTopIconStyle(style);

  const topIcon = await db.topIcon.create({
    data: {
      userId: session.user.id,
      shadow,
      style: prismaStyle,
      color,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: topIcon,
    message: "Icons updated successfully",
  });
}
