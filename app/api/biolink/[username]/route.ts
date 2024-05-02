import { NextResponse } from "next/server";
import { constructBiolink } from "@/lib/utils/construct-biolink";
import { db } from "@/lib/db";
import { ExtendedUser } from "@/lib/utils/construct-biolink";

export async function GET(
  req: Request,
  { params }: { params: { username: string } },
) {
  if (!params.username) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Username is required",
    });
  }

  const user = await db.user.findUnique({
    where: {
      username: params.username,
    },
    include: {
      background: true,
      button: true,
      links: true,
      profile: true,
      topIcon: true,
      effect: true,
      spotify: true,
      youtube: true,
      soundcloud: true,
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

  const biolink = constructBiolink({
    user: user as ExtendedUser,
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: biolink,
    message: "Biolink fetched successfully",
  });
}
