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

  const { shadow, style, color, position, size, backgroundRadius } =
    await req.json();

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

  if (
    backgroundRadius !== "sm" &&
    backgroundRadius !== "md" &&
    backgroundRadius !== "lg" &&
    backgroundRadius !== "none" &&
    backgroundRadius !== "full"
  ) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Border size must be either 'sm', 'md', 'lg', 'none', or 'full'",
    });
  }

  let icons;

  // Check if the user already has icons
  const existingIcons = await db.icons.findUnique({
    where: {
      userId: currentUser.id,
    },
  });

  if (existingIcons) {
    // If icons exist, update them
    icons = await db.icons.update({
      where: {
        userId: currentUser.id,
      },
      data: {
        shadow: shadow ?? null,
        style: style ?? null,
        color: color ?? null,
        position: position ?? null,
        size: size ?? null,
        borderRadius: backgroundRadius ?? null,
      },
    });
  } else {
    // If icons don't exist, create them
    icons = await db.icons.create({
      data: {
        userId: currentUser.id,
        shadow: shadow ?? null,
        style: style ?? null,
        color: color ?? null,
        position: position ?? null,
        size: size ?? null,
        borderRadius: backgroundRadius ?? null,
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
