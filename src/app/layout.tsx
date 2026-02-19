import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-serif', display: 'swap' });
const sans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-advisory.vercel.app'),
  title: { default: 'Blomsnes Advisory | Strategisk Rådgivning', template: '%s | Blomsnes Advisory' },
  description: 'Strategisk rådgivning, executive coaching och transformationsledning för nordiska företag.',
  openGraph: { type: 'website', locale: 'sv_SE', siteName: 'Blomsnes Advisory' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
