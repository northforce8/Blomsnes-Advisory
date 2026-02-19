import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Passthrough middleware – next-intl locale detection happens
// in src/i18n/request.ts via cookies/accept-language headers.
// Routing is handled by Next.js App Router directly without
// locale path prefixes.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|images|fonts|favicon.ico|sitemap|robots).*)'],
};
