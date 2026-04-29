import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/password" || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const auth = request.cookies.get("site_auth");
  if (auth?.value === "pickle") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/password";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|videos|icons).*)"],
};
