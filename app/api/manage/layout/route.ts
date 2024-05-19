import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { convertToPrismaLayout } from "@/lib/utils/enum-mappings";

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
        layout: prismaLayout,
      },
    });
  } else {
    // If profile doesn't exist, create it
    profile = await db.profile.create({
      data: {
        userId: session.user.id,
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
