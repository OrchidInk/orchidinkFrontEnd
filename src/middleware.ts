import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['mn', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'mn'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(mn|en)/:path*']
};