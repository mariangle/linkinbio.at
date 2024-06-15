import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";
import { convertToPrismaLayout } from "@/lib/utils/enum-mappings";

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

  const { layout } = await req.json();

  if (!layout) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Layout is required",
    });
  }

  const prismaLayout = convertToPrismaLayout(layout);

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
        layout: prismaLayout,
      },
    });
  } else {
    // If profile doesn't exist, create it
    profile = await db.profile.create({
      data: {
        userId: currentUser.id,
        layout: prismaLayout,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: profile,
    message: "Layout updated successfully",
  });
}
