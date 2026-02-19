import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { locales, defaultLocale, type Locale } from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLocale = cookieStore.get('locale')?.value as Locale | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return {
      locale: cookieLocale,
      messages: (await import(`./locales/${cookieLocale}.json`)).default,
    };
  }

  const acceptLanguage = headerStore.get('accept-language') || '';
  const detected = locales.find((l) => acceptLanguage.includes(l));
  const locale = detected || defaultLocale;

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
