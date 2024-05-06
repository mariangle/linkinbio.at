import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { convertToPrismaWeatherEffect } from "@/lib/utils/enum-mappings";

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

  const { titleSparkles, titleTypewriter, bioTypewriter, weatherEffect } =
    await req.json();

  const effects = await db.effect.update({
    where: {
      userId: session.user.id,
    },
    data: {
      weatherEffect: convertToPrismaWeatherEffect(weatherEffect), // TODO: Update this
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: effects,
    message: "Effects updated successfully",
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

  const { titleSparkles, titleTypewriter, bioTypewriter, weatherEffect } =
    await req.json();

  const effects = await db.effect.create({
    data: {
      userId: session.user.id,
      weatherEffect: convertToPrismaWeatherEffect(weatherEffect), // TODO: Update this
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: effects,
    message: "Effects updated successfully",
  });
}
