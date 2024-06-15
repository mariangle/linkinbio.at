import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";
import { isValidURL } from "@/lib/utils/media-validation";

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

  const { title, url, archived, order, imageUrl, iconName, featured } =
    await req.json();

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

  const link = await db.websiteLink.update({
    where: {
      id: params.id,
      userId: currentUser.id,
    },
    data: {
      title,
      url,
      archived,
      featured,
      imageUrl: imageUrl || null,
      iconName: iconName || null,
      order: 0, // ! Setting order to 0 for now, will be updated later
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: link,
    message: "Website link updated successfully",
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

  const deletedLink = await db.websiteLink.delete({
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
      message: "Website link not found",
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: deletedLink,
    message: "Website link deleted successfully",
  });
}
