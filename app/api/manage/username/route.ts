import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { auth } from "@/server/auth";
import { dummyBiolinks } from "@/lib/constants/dummy";

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

  const dummyBiolinkUsernames = dummyBiolinks.map(
    (biolink) => biolink.user.username,
  );

  if (dummyBiolinkUsernames.includes(lowercaseUsername)) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Username is not available",
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
      id: session.user.id,
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
