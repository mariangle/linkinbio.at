import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

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

  const { color, url, gradientStartColor, gradientEndColor, gradientAngle } =
    await req.json();

  let background;

  // Check if the user already has a background
  const existingBackground = await db.background.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingBackground) {
    // If background exists, update it
    background = await db.background.update({
      where: {
        userId: session.user.id,
      },
      data: {
        color,
        url,
        gradientStartColor,
        gradientEndColor,
        gradientAngle,
      },
    });
  } else {
    // If background doesn't exist, create it
    background = await db.background.create({
      data: {
        userId: session.user.id,
        color,
        url,
        gradientStartColor,
        gradientEndColor,
        gradientAngle,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: background,
    message: "Background updated successfully",
  });
}
