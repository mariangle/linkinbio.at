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
    shadowSolid,
    shadowSpreadRadius,
    shadowColor,
    fontColor,
    fontFamily,
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
      userId: currentUser.id,
    },
  });

  if (existingButtons) {
    // If buttons exist, update them
    buttons = await db.buttons.update({
      where: {
        userId: currentUser.id,
      },
      data: {
        shadowSolid: shadowSolid ?? null,
        shadowSpreadRadius: shadowSpreadRadius ?? null,
        shadowColor: shadowColor ?? null,
        fontColor: fontColor ?? null,
        fontShadow: fontShadow ?? null,
        fontFamily: fontFamily ?? null,
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
        userId: currentUser.id,
        shadowSolid: shadowSolid ?? null,
        shadowSpreadRadius: shadowSpreadRadius ?? null,
        shadowColor: shadowColor ?? null,
        fontColor: fontColor ?? null,
        fontShadow: fontShadow ?? null,
        fontFamily: fontFamily ?? null,
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
