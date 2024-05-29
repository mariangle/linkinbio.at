import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { auth } from "@/server/auth";
import { convertToPrismaWeatherEffect } from "@/lib/utils/enum-mappings";

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

  const { title: titleEffect, weather: weatherEffect } = await req.json();

  let effects;

  // Check if the user already has effects
  const existingEffects = await db.effect.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (existingEffects) {
    // If effects exist, update them
    effects = await db.effect.update({
      where: {
        userId: session.user.id,
      },
      data: {
        titleEffect: titleEffect ?? null,
        weatherEffect: convertToPrismaWeatherEffect(weatherEffect),
      },
    });
  } else {
    // If effects don't exist, create them
    effects = await db.effect.create({
      data: {
        userId: session.user.id,
        titleEffect: titleEffect ?? null,
        weatherEffect: convertToPrismaWeatherEffect(weatherEffect),
      },
    });
  }

  return NextResponse.json({
    status: 200,
    ok: true,
    data: effects,
    message: "Effects updated successfully",
  });
}
