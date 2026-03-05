import createMiddleware from "next-intl/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { CookiesStorageKeys } from "./constants/keys";
import { ROUTERS } from "./constants/routers";
import { routing } from "./libs/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const protectedRoutes: string[] = [ROUTERS.HOME, ROUTERS.DASHBOARD.INDEX];

export async function middleware(req: NextRequest) {
  try {
    const privatePathnameRegex = RegExp(
      `^(/(${routing.locales.join("|")}))?(${protectedRoutes
        .map((p) => (p === "/" ? "" : `${p}(?:/.*)?`))
        .join("|")})/?$`,
      "i",
    );
    const isProtectedRoute = privatePathnameRegex.test(req.nextUrl.pathname);

    if (!isProtectedRoute) {
      return handleI18nRouting(req);
    }

    const cookieStore = await cookies();
    const accessToken = cookieStore.get(CookiesStorageKeys.ACCESS_TOKEN)?.value;

    if (!accessToken && isProtectedRoute) {
      const localeMatch = req.nextUrl.pathname.match(/^\/(en|vi)/);
      const locale = localeMatch ? localeMatch[1] : routing.defaultLocale;
      const loginUrl = new URL(`/${locale}/${ROUTERS.AUTH.LOGIN}`, req.url);
      return NextResponse.redirect(loginUrl);
    }

    return handleI18nRouting(req);
  } catch (error) {
    console.error("Middleware error:", error);
    // On error, redirect protected routes to login rather than allowing through
    const localeMatch = req.nextUrl.pathname.match(/^\/(en|vi)/);
    const locale = localeMatch ? localeMatch[1] : routing.defaultLocale;
    const loginUrl = new URL(`/${locale}/${ROUTERS.AUTH.LOGIN}`, req.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
