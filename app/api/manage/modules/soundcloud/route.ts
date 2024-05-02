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

  const { trackId, enabled } = await req.json();

  if (!trackId || enabled === undefined) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "All fields are required",
    });
  }

  const soundcloud = await db.soundcloud.update({
    where: {
      userId: session.user.id,
    },
    data: {
      trackId,
      enabled,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: soundcloud,
    message: "Soundcloud updated successfully",
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

  const { trackId, enabled } = await req.json();

  if (!trackId || enabled === undefined) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "All fields are required",
    });
  }

  const soundcloud = await db.soundcloud.create({
    data: {
      userId: session.user.id,
      trackId,
      enabled,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: soundcloud,
    message: "Soundcloud updated successfully",
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

  const soundcloud = await db.soundcloud.delete({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: soundcloud,
    message: "Soundcloud deleted successfully",
  });
}
