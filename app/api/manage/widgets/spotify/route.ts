import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { convertToPrismaContentType } from "@/lib/utils/enum-mappings";

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

  const { contentId, type, enabled, darkBackground, compactLayout } =
    await req.json();

  if (
    !contentId ||
    !type ||
    enabled === undefined ||
    darkBackground === undefined ||
    compactLayout === undefined
  ) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "All fields are required",
    });
  }

  const prismaContentType = convertToPrismaContentType(type);

  if (!prismaContentType) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Invalid content type",
    });
  }

  let spotify;

  // Check if the user already has Spotify data
  const existingSpotify = await db.spotify.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingSpotify) {
    // If Spotify data exists, update it
    spotify = await db.spotify.update({
      where: {
        userId: session.user.id,
      },
      data: {
        contentId,
        type: prismaContentType,
        darkBackground,
        compactLayout,
        enabled,
      },
    });
  } else {
    // If Spotify data doesn't exist, create it
    spotify = await db.spotify.create({
      data: {
        userId: session.user.id,
        contentId,
        type: prismaContentType,
        darkBackground,
        compactLayout,
        enabled,
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: spotify,
    message: "Spotify updated successfully",
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

  const spotify = await db.spotify.delete({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: spotify,
    message: "Spotify deleted successfully",
  });
}
