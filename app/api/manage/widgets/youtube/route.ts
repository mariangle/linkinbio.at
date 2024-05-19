import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

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

  const { videoId, enabled } = await req.json();

  if (!videoId || enabled === undefined) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "All fields are required",
    });
  }

  let youtube;

  // Check if the user already has YouTube data
  const existingYoutube = await db.youtube.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingYoutube) {
    // If YouTube data exists, update it
    youtube = await db.youtube.update({
      where: {
        userId: session.user.id,
      },
      data: {
        videoId,
        enabled,
      },
    });
  } else {
    // If YouTube data doesn't exist, create it
    youtube = await db.youtube.create({
      data: {
        userId: session.user.id,
        videoId,
        enabled,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: youtube,
    message: "Youtube updated successfully",
  });
}

export async function DELETE(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const youtube = await db.youtube.delete({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: youtube,
    message: "Youtube deleted successfully",
  });
}
