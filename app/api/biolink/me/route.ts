import { NextResponse } from "next/server";
import { constructBiolink } from "@/lib/utils/construct-biolink";
import { db } from "@/lib/db";
import { ExtendedUser } from "@/lib/utils/construct-biolink";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      background: true,
      button: true,
      config: true,
      links: true,
      userTitle: true,
      topIcon: true,
      embed: true,
      effect: true,
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
