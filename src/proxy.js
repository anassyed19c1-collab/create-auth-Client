import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedRoutes = ["/dashboard", "/admin"];

  // Auth routes
  const authRoutes = ["/login", "/register"];

  // Check token from cookies OR custom header
  const token = request.cookies.get("accessToken")?.value || 
                request.headers.get("x-access-token");

  if (protectedRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/admin", "/login", "/register"],
};