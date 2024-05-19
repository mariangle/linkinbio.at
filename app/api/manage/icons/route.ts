import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { convertToPrismaIconStyle } from "@/lib/utils/enum-mappings";

export async function PATCH(req: Request) {
  const session = await auth();

  if (!session?.user || !session.user.id) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { shadow, style, color } = await req.json();

  const prismaStyle = convertToPrismaIconStyle(style);

  let icons;

  // Check if the user already has icons
  const existingIcons = await db.icons.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingIcons) {
    // If icons exist, update them
    icons = await db.icons.update({
      where: {
        userId: session.user.id,
      },
      data: {
        shadow: shadow ?? null,
        style: prismaStyle,
        color: color ?? null,
      },
    });
  } else {
    // If icons don't exist, create them
    icons = await db.icons.create({
      data: {
        userId: session.user.id,
        shadow: shadow ?? null,
        style: prismaStyle,
        color: color ?? null,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: icons,
    message: "Icons updated successfully",
  });
}
