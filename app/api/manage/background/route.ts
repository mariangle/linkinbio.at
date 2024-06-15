import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";

export async function PATCH(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const {
    color,
    url,
    gradientStartColor,
    gradientEndColor,
    gradientAngle,
    gradientEnabled,
  } = await req.json();

  let background;

  // Check if the user already has a background
  const existingBackground = await db.background.findUnique({
    where: {
      userId: currentUser.id,
    },
  });

  if (existingBackground) {
    // If background exists, update it
    background = await db.background.update({
      where: {
        userId: currentUser.id,
      },
      data: {
        color,
        url,
        gradientStartColor,
        gradientEndColor,
        gradientAngle,
        gradientEnabled,
      },
    });
  } else {
    // If background doesn't exist, create it
    background = await db.background.create({
      data: {
        userId: currentUser.id,
        color,
        url,
        gradientStartColor,
        gradientEndColor,
        gradientAngle,
        gradientEnabled,
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
