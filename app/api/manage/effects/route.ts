import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";

export async function PATCH(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { title: titleEffect, weather: backgroundEffect } = await req.json();

  let effects;

  // Check if the user already has effects
  const existingEffects = await db.effect.findUnique({
    where: {
      userId: currentUser.id,
    },
  });

  if (existingEffects) {
    effects = await db.effect.update({
      where: {
        userId: currentUser.id,
      },
      data: {
        titleEffect: titleEffect ?? null,
        backgroundEffect: backgroundEffect,
      },
    });
  } else {
    effects = await db.effect.create({
      data: {
        userId: currentUser.id,
        titleEffect: titleEffect ?? null,
        backgroundEffect: backgroundEffect,
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
