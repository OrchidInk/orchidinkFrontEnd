import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['mn', 'en'],
  defaultLocale: 'mn',
});

function adminMiddleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token && !req.nextUrl.pathname.includes('/admin/auth/login')) {
    return NextResponse.redirect(new URL('/admin/auth/login', req.url));
  }

  return NextResponse.next();
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    return adminMiddleware(req);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/(mn|en)/:path*',
    '/',
    '/admin/:path*',
  ],
};
