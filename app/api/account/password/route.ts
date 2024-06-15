import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";
import { hashPassword, comparePassword } from "@/lib/functions/auth";

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

  const { oldPassword, newPassword } = await req.json();

  if (!oldPassword || !newPassword) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Missing required fields",
    });
  }

  const existingUser = await db.user.findUnique({
    where: { id: currentUser.id },
  });

  if (!existingUser) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "User not found",
    });
  }

  const passwordMatch = await comparePassword(
    oldPassword,
    existingUser.password,
  );

  if (!passwordMatch) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Old password is incorrect",
    });
  }

  const hashedPassword = await hashPassword(newPassword);

  await db.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: null,
    message: "Password changed successfully",
  });
}
