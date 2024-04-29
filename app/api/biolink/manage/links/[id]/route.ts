import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "ID is required",
    });
  }

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

  const link = await db.link.update({
    where: {
      id: params.id,
      userId: session.user.id,
    },
    data: {
      title,
      url,
      iconId: iconId ?? undefined,
      isTopIcon,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: link,
    message: "Username updated successfully",
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "ID is required",
    });
  }

  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const deletedLink = await db.link.delete({
    where: {
      id: params.id,
      userId: session.user.id,
    },
  });

  if (!deletedLink) {
    return NextResponse.json({
      status: 404,
      ok: false,
      data: null,
      message: "Link not found",
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: deletedLink,
    message: "Link deleted successfully",
  });
}
