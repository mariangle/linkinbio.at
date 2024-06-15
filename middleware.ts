import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (session) {
      const sessionData = await decrypt(session);
      if (sessionData) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(
          `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASE_URL}/sign-in`,
        );
      }
    } else {
      return NextResponse.redirect(
        `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASE_URL}/sign-in`,
      );
    }
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
