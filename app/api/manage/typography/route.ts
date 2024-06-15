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

  const { titleColor, titleFont, textColor, textFont, hideUsername } =
    await req.json();

  let profile;

  // Check if the user already has a profile
  const existingProfile = await db.profile.findUnique({
    where: {
      userId: currentUser.id,
    },
  });

  if (existingProfile) {
    // If profile exists, update it
    profile = await db.profile.update({
      where: {
        userId: currentUser.id,
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
        userId: currentUser.id,
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
