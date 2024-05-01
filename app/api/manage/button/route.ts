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

  const {
    shadowSolid,
    shadowSpreadRadius,
    shadowColor,
    textColor,
    textHidden,
    borderColor,
    borderRadius,
    borderWidth,
    backgroundColor,
    backgroundOpacity,
    backgroundBlur,
    backgroundSocialColor,
    iconHidden,
    iconShadow,
    iconSocialColor,
  } = await req.json();

  const button = await db.button.update({
    where: {
      userId: session.user.id,
    },
    data: {
      shadowSolid: shadowSolid ?? false,
      shadowSpreadRadius: shadowSpreadRadius ?? 0,
      shadowColor: shadowColor ?? "#000000",
      textColor: textColor ?? "#ffffff",
      textHidden: textHidden ?? false,
      borderColor: borderColor ?? "#000000",
      borderRadius: borderRadius ?? 0,
      borderWidth: borderWidth ?? 0,
      backgroundColor: backgroundColor ?? null,
      backgroundOpacity: backgroundOpacity ?? 1,
      backgroundBlur: backgroundBlur ?? 0,
      backgroundSocialColor: backgroundSocialColor ?? false,
      iconHidden: iconHidden ?? false,
      iconShadow: iconShadow ?? false,
      iconSocialColor: iconSocialColor ?? false,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: button,
    message: "Button updated successfully",
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

  const {
    shadowSolid,
    shadowSpreadRadius,
    shadowColor,
    textColor,
    textHidden,
    borderColor,
    borderRadius,
    borderWidth,
    backgroundColor,
    backgroundOpacity,
    backgroundBlur,
    backgroundSocialColor,
    iconHidden,
    iconShadow,
    iconSocialColor,
  } = await req.json();

  const button = await db.button.create({
    data: {
      userId: session.user.id,
      shadowSolid: shadowSolid ?? false,
      shadowSpreadRadius: shadowSpreadRadius ?? 0,
      shadowColor: shadowColor ?? "#000000",
      textColor: textColor ?? "#ffffff",
      textHidden: textHidden ?? false,
      borderColor: borderColor ?? "#000000",
      borderRadius: borderRadius ?? 0,
      borderWidth: borderWidth ?? 0,
      backgroundColor: backgroundColor ?? null,
      backgroundOpacity: backgroundOpacity ?? 1,
      backgroundBlur: backgroundBlur ?? 0,
      backgroundSocialColor: backgroundSocialColor ?? false,
      iconHidden: iconHidden ?? false,
      iconShadow: iconShadow ?? false,
      iconSocialColor: iconSocialColor ?? false,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: button,
    message: "Button updated successfully",
  });
}
