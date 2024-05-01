import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

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

  const { title, url, iconId, isTopIcon } = await req.json();

  if (!title || !url) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Title and URL are required",
    });
  }

  const link = await db.link.create({
    data: {
      title,
      url,
      iconId: iconId ?? undefined,
      isTopIcon,
      user: {
        connect: {
          id: session.user.id,
        },
      },
      order: 0, // ! Setting order to 0 for now, will be updated later
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
