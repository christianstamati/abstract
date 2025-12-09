/* eslint-disable @typescript-eslint/no-unused-vars */

import { getSessionCookie } from "better-auth/cookies";
//import { createAuth } from "./convex/auth";
import { type NextRequest, NextResponse } from "next/server";

//type Session = ReturnType<typeof createAuth>["$Infer"]["Session"];
/*
const getSession = async (request: NextRequest) => {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") ?? "",
        origin: request.nextUrl.origin,
      },
    },
  );
  return session;
};
*/

const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/verify-2fa",
  "/reset-password",
];

const protectedRoutes = ["/dashboard"];

// Just check cookie, recommended approach
export default async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  // Uncomment to fetch the session (not recommended)
  // const session = await getSession(request);

  const pathname = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(pathname);
  const isProtectedRoute = protectedRoutes.includes(pathname);

  // Allow access to public routes
  if (isPublicRoute) {
    // Redirect authenticated users away from sign-in pages
    if (sessionCookie && pathname !== "/") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // Protect routes that require authentication
  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on all routes except static assets and api routes
  matcher: ["/((?!.*\\..*|_next|api/auth).*)", "/", "/trpc(.*)"],
};
