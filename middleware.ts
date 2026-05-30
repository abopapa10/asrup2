import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-config";

const CANONICAL_HOST = new URL(CANONICAL_SITE_ORIGIN).hostname;

/**
 * www isteklerini 301 ile non-www canonical origin'e yönlendirir.
 * next.config redirects ile birlikte çalışır; edge'de ek güvence sağlar.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host.startsWith("www.")) {
    const target = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_SITE_ORIGIN);
    return NextResponse.redirect(target, 301);
  }

  if (host === CANONICAL_HOST && request.nextUrl.protocol === "http:") {
    const target = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_SITE_ORIGIN);
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
