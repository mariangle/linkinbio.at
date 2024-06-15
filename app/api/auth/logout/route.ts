import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  cookies().set("session", "", { expires: new Date(0) });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: null,
    message: "Logged out successfully",
  });
}
