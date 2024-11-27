import {locales} from '@/constants';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales,
  defaultLocale: 'ru',
  localeDetection: false,
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)'
  ]
};