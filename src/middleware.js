import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  //   protected profile
  if (pathname.startsWith("/profile")) {
    const { user } = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }
  //   protected auth

  if (pathname.startsWith("/auth")) {
    const { user, roleUpdate } = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL(`/${roleUpdate}`, url));
  }
  //   protected admin

  if (pathname.startsWith("/admin")) {
    const { user } = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
    if (user && user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", url));
    }
  }
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/auth"],
};
