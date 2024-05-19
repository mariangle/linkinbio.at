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

  const {
    shadowSolid,
    shadowSpreadRadius,
    shadowColor,
    fontColor,
    fontShadow,
    textHidden,
    borderColor,
    borderRadius,
    borderWidth,
    backgroundColor,
    backgroundOpacity,
    backgroundBlur,
    backgroundSocialColor,
  } = await req.json();

  let buttons;

  // Check if the user already has buttons
  const existingButtons = await db.buttons.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingButtons) {
    // If buttons exist, update them
    buttons = await db.buttons.update({
      where: {
        userId: session.user.id,
      },
      data: {
        shadowSolid: shadowSolid ?? null,
        shadowSpreadRadius: shadowSpreadRadius ?? null,
        shadowColor: shadowColor ?? null,
        fontColor: fontColor ?? null,
        fontShadow: fontShadow ?? null,
        textHidden: textHidden ?? null,
        borderColor: borderColor ?? null,
        borderRadius: borderRadius ?? null,
        borderWidth: borderWidth ?? null,
        backgroundColor: backgroundColor ?? null,
        backgroundOpacity: backgroundOpacity ?? null,
        backgroundBlur: backgroundBlur ?? null,
        backgroundSocialColor: backgroundSocialColor ?? null,
      },
    });
  } else {
    // If buttons don't exist, create them
    buttons = await db.buttons.create({
      data: {
        userId: session.user.id,
        shadowSolid: shadowSolid ?? null,
        shadowSpreadRadius: shadowSpreadRadius ?? null,
        shadowColor: shadowColor ?? null,
        fontColor: fontColor ?? null,
        fontShadow: fontShadow ?? null,
        textHidden: textHidden ?? null,
        borderColor: borderColor ?? null,
        borderRadius: borderRadius ?? null,
        borderWidth: borderWidth ?? null,
        backgroundColor: backgroundColor ?? null,
        backgroundOpacity: backgroundOpacity ?? null,
        backgroundBlur: backgroundBlur ?? null,
        backgroundSocialColor: backgroundSocialColor ?? null,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: buttons,
    message: "Buttons updated successfully",
  });
}
