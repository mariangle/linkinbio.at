import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";
import { getPlatformByProvider } from "@/lib/utils/getters";

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

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { provider, username, archived } = await req.json();

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

  const link = await db.platformLink.update({
    where: {
      id: params.id,
      userId: currentUser.id,
    },
    data: {
      username: username,
      provider: validPlatform.name,
      order: 0, // ! Setting order to 0 for now, will be updated later
      archived: archived,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: link,
    message: "Link updated successfully",
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

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const deletedLink = await db.platformLink.delete({
    where: {
      id: params.id,
      userId: currentUser.id,
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
