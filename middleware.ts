import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const startsWith = (path: string) => url.pathname.startsWith(path);
  const checkDocs = (path: string)=> {
    return url.pathname === path || url.pathname === `/docs/${path}`;
  }
  
  const redirectUser = (changePath?: boolean) => {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = "/docs" + url.pathname;
    if (changePath) {
      return NextResponse.redirect(newUrl);
    }
    return NextResponse.rewrite(newUrl);
  };
  if (checkDocs("/getting-started")) {
     url.pathname = "/getting-started/installation";
  }
  if (checkDocs("/components")) {
     url.pathname = "/components/cursor-glow";
  }
  if (checkDocs("/hooks")) {
     url.pathname = "/hooks/usecursortheme";
  }
  if (
    startsWith("/components") ||
    startsWith("/hooks") ||
    startsWith("/getting-started")
  ) {
    return redirectUser();
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
