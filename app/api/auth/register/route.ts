import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { hashPassword } from "@/lib/functions/auth";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Missing required fields",
    });
  }

  const existingUserWithUsername = await db.user.findUnique({
    where: { username },
  });

  if (existingUserWithUsername) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Username already exists",
    });
  }

  const existingUserWithEmail = await db.user.findUnique({
    where: { email },
  });

  if (existingUserWithEmail) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Email already exists",
    });
  }

  const hashedPassword = await hashPassword(password);

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: null,
    message: "Registered successfully. Please login.",
  });
}
