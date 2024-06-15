import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { cookies } from "next/headers";
import { encrypt, comparePassword } from "@/lib/functions/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Missing required fields",
    });
  }

  const existingUserWithEmail = await db.user.findUnique({
    where: { email },
  });

  if (!existingUserWithEmail) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "User not found",
    });
  }

  const passwordMatch = await comparePassword(
    password,
    existingUserWithEmail.password,
  );

  if (!passwordMatch) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Incorrect password",
    });
  }

  const session = await encrypt({
    user: {
      id: existingUserWithEmail.id,
      email: existingUserWithEmail.email,
      name: existingUserWithEmail.name,
      username: existingUserWithEmail.username,
    },
    sameSite: "strict",
  });

  cookies().set("session", session, { httpOnly: true });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: null,
    message: "Success. Redirecting...",
  });
}
