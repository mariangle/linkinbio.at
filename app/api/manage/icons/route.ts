import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { auth } from "@/server/auth";

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

  const { shadow, style, color, position, size } = await req.json();

  if (position !== "top" && position !== "bottom") {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Position must be either 'top' or 'bottom'",
    });
  }

  if (size !== "small" && size !== "medium" && size !== "large") {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Size must be either 'small', 'medium', or 'large'",
    });
  }

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
        style: style ?? null,
        color: color ?? null,
        position: position ?? null,
      },
    });
  } else {
    // If icons don't exist, create them
    icons = await db.icons.create({
      data: {
        userId: session.user.id,
        shadow: shadow ?? null,
        style: style ?? null,
        color: color ?? null,
        position: position ?? null,
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
