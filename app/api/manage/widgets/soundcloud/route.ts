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

  const { trackId, enabled } = await req.json();

  if (!trackId || enabled === undefined) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "All fields are required",
    });
  }

  let soundcloud;

  // Check if the user already has SoundCloud data
  const existingSoundcloud = await db.soundcloud.findUnique({
    where: {
      userId: currentUser.id,
    },
  });

  if (existingSoundcloud) {
    // If SoundCloud data exists, update it
    soundcloud = await db.soundcloud.update({
      where: {
        userId: currentUser.id,
      },
      data: {
        trackId,
        enabled,
      },
    });
  } else {
    // If SoundCloud data doesn't exist, create it
    soundcloud = await db.soundcloud.create({
      data: {
        userId: currentUser.id,
        trackId,
        enabled,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: soundcloud,
    message: "Soundcloud updated successfully",
  });
}

export async function DELETE(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const soundcloud = await db.soundcloud.delete({
    where: {
      userId: currentUser.id,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: soundcloud,
    message: "Soundcloud deleted successfully",
  });
}
