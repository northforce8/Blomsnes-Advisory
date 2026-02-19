import Link from 'next/link';
import { useTranslations } from 'next-intl';

function SiteHeader() {
  const t = useTranslations('nav');
  const routes = [
    { href: '/om', label: t('om') },
    { href: '/tjanster', label: t('tjanster') },
    { href: '/case', label: t('case') },
    { href: '/blogg', label: t('blogg') },
    { href: '/kontakt', label: t('kontakt') },
  ] as const;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-border bg-paper/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-full max-w-content items-center justify-between px-6 lg:px-12">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">Nordström &amp; Partners</Link>
        <ul className="hidden items-center gap-1 md:flex">
          {routes.map((r) => (<li key={r.href}><Link href={r.href} className="px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink">{r.label}</Link></li>))}
          <li className="ml-4"><Link href="/boka" className="bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent">{t('boka')}</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function SiteFooter() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-ink text-paper/70">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 lg:grid-cols-4 lg:px-12">
        <div><p className="font-serif text-lg font-semibold text-paper">Nordström &amp; Partners</p><p className="mt-3 text-sm leading-relaxed">Strategisk rådgivning för nordiska företag.</p></div>
        <div><p className="mb-4 text-xs font-medium uppercase tracking-widest text-paper/40">Tjänster</p><nav className="flex flex-col gap-2.5 text-sm"><Link href="/strategi-till-resultat" className="hover:text-paper">Strategi till Resultat</Link><Link href="/coaching" className="hover:text-paper">Executive Coaching</Link><Link href="/utbildningar" className="hover:text-paper">Utbildningar</Link></nav></div>
        <div><p className="mb-4 text-xs font-medium uppercase tracking-widest text-paper/40">Företaget</p><nav className="flex flex-col gap-2.5 text-sm"><Link href="/om" className="hover:text-paper">Om oss</Link><Link href="/case" className="hover:text-paper">Case</Link><Link href="/blogg" className="hover:text-paper">Blogg</Link></nav></div>
        <div><p className="mb-4 text-xs font-medium uppercase tracking-widest text-paper/40">Kontakt</p><nav className="flex flex-col gap-2.5 text-sm"><Link href="/kontakt" className="hover:text-paper">Kontakta oss</Link><Link href="/boka" className="hover:text-paper">Boka konsultation</Link><Link href="/integritetspolicy" className="hover:text-paper">Integritetspolicy</Link></nav></div>
      </div>
      <div className="mx-auto max-w-content border-t border-paper/10 px-6 py-6 lg:px-12"><p className="text-xs text-paper/30">© {y} Nordström &amp; Partners. Alla rättigheter förbehållna.</p></div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (<><SiteHeader /><main className="pt-[72px]">{children}</main><SiteFooter /></>);
}
