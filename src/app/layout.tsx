import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

export async function generateMetadata() {
  const t = await getTranslations('meta');
  const locale = await getLocale();
  const ogLocale = locale === 'en' ? 'en_US' : locale === 'no' ? 'nb_NO' : 'sv_SE';
  return {
    title: { default: t('homeTitle'), template: `%s — NorthForce Advisory` },
    description: t('homeDesc'),
    metadataBase: new URL('https://northforceadvisory.se'),
    alternates: { canonical: '/' },
    openGraph: { type: 'website', locale: ogLocale, siteName: 'NorthForce Advisory' },
    twitter: { card: 'summary_large_image', site: '@northforceadvisory' },
    authors: [{ name: 'NorthForce Advisory', url: 'https://northforceadvisory.se/om' }],
    creator: 'NorthForce Advisory',
    publisher: 'NorthForce Advisory',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <JsonLd locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
