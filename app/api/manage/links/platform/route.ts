import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { auth } from "@/server/auth";

import { getPlatformByProvider } from "@/lib/utils/getters";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { provider, username, archived, order } = await req.json();

  if (!provider || !username) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "A provider and username is required",
    });
  }

  const validPlatform = getPlatformByProvider(provider);

  if (!validPlatform) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Invalid provider",
    });
  }

  const link = await db.platformLink.create({
    data: {
      username: username,
      provider: validPlatform.name,
      user: {
        connect: {
          id: session.user.id,
        },
      },
      order: 0,
      archived: false,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: link,
    message: "Link created successfully",
  });
}
