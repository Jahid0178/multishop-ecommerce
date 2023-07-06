import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  request.headers.append("origin", request.nextUrl.pathname);
  const origin = request.headers.get("origin");
  if (request.nextUrl.pathname.startsWith("/api/products")) {
  }
  return response;
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
