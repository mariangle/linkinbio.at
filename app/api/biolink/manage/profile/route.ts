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

  const { title, bio, image, occupation, location } = await req.json();

  if (!title && !bio && !image && !occupation && !location) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "At least one field is required",
    });
  }

  // TODO: Get user and update user in two separate queries

  const user = await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      title: title ?? undefined,
      bio: bio ?? undefined,
      image: image ?? undefined,
      occupation: occupation ?? undefined,
      location: location ?? undefined,
    },
  });

  if (!user) {
    return NextResponse.json({
      status: 404,
      ok: false,
      data: null,
      message: "User not found",
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: null,
    message: "Profile updated successfully",
  });
}
