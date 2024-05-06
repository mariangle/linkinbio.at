import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

import { isValidURL } from "@/lib/utils/media-validation";

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

  const { title, url, archived, iconId } = await req.json();

  if (!title || !url) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "A title and url is required",
    });
  }

  if (!isValidURL(url)) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Invalid URL",
    });
  }

  const link = await db.websiteLink.create({
    data: {
      title,
      url,
      archived,
      iconId,
      user: {
        connect: {
          id: session.user.id,
        },
      },
      order: 0, // ! Setting order to 0 for now, will be updated later
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: link,
    message: "Website link created successfully",
  });
}
