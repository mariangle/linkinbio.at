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

  const { username } = await req.json();

  const lowercaseUsername = username.toLowerCase();

  if (!username) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Username is required",
    });
  }

  const existingUserWithUsername = await db.user.findFirst({
    where: {
      username: lowercaseUsername,
    },
  });

  if (existingUserWithUsername) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Username already exists",
    });
  }

  // TODO: Check if username has been changed in the last 14 days

  const user = await db.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      username: lowercaseUsername,
      lastUpdatedUsername: new Date(),
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
    message: "Username updated successfully",
  });
}
