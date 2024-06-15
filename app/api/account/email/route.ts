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

  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Email is required",
    });
  }

  const lowercaseEmail = email.toLowerCase();

  if (!lowercaseEmail) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Email is required",
    });
  }

  const existingUserWithEmail = await db.user.findFirst({
    where: {
      email: lowercaseEmail,
    },
  });

  if (existingUserWithEmail) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Email already exists",
    });
  }

  const user = await db.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      email: lowercaseEmail,
    },
  });

  if (!user) {
    return NextResponse.json({
      status: 404,
      ok: false,
      data: null,
      message: "User not found",
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: null,
    message: "Email updated successfully",
  });
}
