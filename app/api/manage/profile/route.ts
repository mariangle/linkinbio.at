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

  const { titleColor, titleFont, textColor, textFont, hideUsername } =
    await req.json();

  let profile;

  // Check if the user already has a profile
  const existingProfile = await db.profile.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingProfile) {
    // If profile exists, update it
    profile = await db.profile.update({
      where: {
        userId: session.user.id,
      },
      data: {
        titleColor: titleColor ?? null,
        titleFont: titleFont ?? null,
        textColor: textColor ?? null,
        textFont: textFont ?? null,
        hideUsername: hideUsername ?? null,
      },
    });
  } else {
    // If profile doesn't exist, create it
    profile = await db.profile.create({
      data: {
        userId: session.user.id,
        titleColor: titleColor ?? null,
        titleFont: titleFont ?? null,
        textColor: textColor ?? null,
        textFont: textFont ?? null,
        hideUsername: hideUsername ?? null,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: profile,
    message: "Profile updated successfully",
  });
}
