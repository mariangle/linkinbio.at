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

  const { titleColor, titleFont, invertTextColor, hideUsername } =
    await req.json();

  if (
    titleColor === undefined ||
    titleFont === undefined ||
    invertTextColor === undefined ||
    hideUsername === undefined
  ) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "No empty fields allowed",
    });
  }

  const profile = await db.profile.update({
    where: {
      userId: session.user.id,
    },
    data: {
      titleColor,
      titleFont,
      invertTextColor,
      hideUsername,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: profile,
    message: "Profile updated successfully",
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

  const { titleColor, titleFont, invertTextColor, hideUsername } =
    await req.json();

  if (
    titleColor === undefined ||
    titleFont === undefined ||
    invertTextColor === undefined ||
    hideUsername === undefined
  ) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "No empty fields allowed",
    });
  }

  const profile = await db.profile.create({
    data: {
      userId: session.user.id,
      titleColor,
      titleFont,
      invertTextColor,
      hideUsername,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: profile,
    message: "Profile updated successfully",
  });
}
