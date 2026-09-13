import { NextResponse, type NextRequest } from "next/server";

const SNAPFLEX_HOSTS = new Set([
  "snapflex.blymo.co.uk",
  "www.snapflex.blymo.co.uk",
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (!host || !SNAPFLEX_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (url.pathname === "/") {
    url.pathname = "/snapflex";
  } else if (!url.pathname.startsWith("/snapflex")) {
    url.pathname = `/snapflex${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
