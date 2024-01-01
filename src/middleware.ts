import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/modules/i18n/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(req: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  req.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );



  if (pathnameIsMissingLocale) {
  
    const locale = getLocale(req);

    if(locale === i18n.defaultLocale){
      return NextResponse.rewrite(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          req.url
        )
      );
    }

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|images|_next/static|_next/image|favicon.ico).*)"],
};
