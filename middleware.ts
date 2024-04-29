import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return null;
}

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
