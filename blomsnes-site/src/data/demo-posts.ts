import type { BlogPost } from '@/types';

// ═══════════════════════════════════════
// DEMO BLOG CONTENT
// Used when Sanity CMS is not yet connected.
// Replace with CMS content in production.
// ═══════════════════════════════════════

export const demoPosts: BlogPost[] = [
  {
    slug: 'strategi-i-en-foranderlig-varld',
    title: 'Strategi i en föränderlig värld: Varför traditionella modeller inte räcker',
    excerpt:
      'I en era av accelererande förändring behöver nordiska företag omvärdera sina strategiska ramverk. Vi undersöker varför anpassningsbarhet har blivit den viktigaste strategiska förmågan.',
    author: { name: 'Anna Nordström', role: 'Managing Partner' },
    category: 'Strategi',
    tags: ['strategi', 'förändringsledning', 'ledarskap'],
    publishedAt: '2025-01-28',
    readTime: 8,
    body: [],
  },
  {
    slug: 'digital-mognad-nordiska-foretag',
    title: 'Digital mognad hos nordiska företag: En nulägesanalys 2025',
    excerpt:
      'Vår senaste undersökning av 200 nordiska företag avslöjar kritiska gap mellan digital ambition och faktisk kapabilitet. Här är de viktigaste insikterna.',
    author: { name: 'Erik Lindberg', role: 'Senior Advisor' },
    category: 'Digital transformation',
    tags: ['digital-transformation', 'innovation', 'data'],
    publishedAt: '2025-01-15',
    readTime: 12,
    body: [],
  },
  {
    slug: 'ledarskap-under-osäkerhet',
    title: 'Ledarskap under osäkerhet: Fem principer från frontlinjen',
    excerpt:
      'Baserat på vårt arbete med 50+ ledningsgrupper delar vi de principer som skiljer effektiva ledare från övriga i tider av osäkerhet.',
    author: { name: 'Anna Nordström', role: 'Managing Partner' },
    category: 'Ledarskap',
    tags: ['ledarskap', 'coaching', 'organisation'],
    publishedAt: '2025-01-03',
    readTime: 6,
    body: [],
  },
  {
    slug: 'fran-silos-till-synergi',
    title: 'Från silos till synergi: Så bygger du en integrerad organisation',
    excerpt:
      'Organisatoriska silos är den vanligaste hämmaren av strategisk exekvering. Vi beskriver vår beprövade metod för att bryta ned dem.',
    author: { name: 'Erik Lindberg', role: 'Senior Advisor' },
    category: 'Organisation',
    tags: ['organisation', 'förändringsledning', 'strategi'],
    publishedAt: '2024-12-18',
    readTime: 10,
    body: [],
  },
  {
    slug: 'ai-strategi-for-styrelserum',
    title: 'AI-strategi för styrelserummet: Bortom hypen',
    excerpt:
      'AI är inte längre en teknisk fråga — det är en strategisk affärsfråga. Vi ger styrelseledamöter och C-suite ett ramverk för att navigera AI-landskapet.',
    author: { name: 'Anna Nordström', role: 'Managing Partner' },
    category: 'Innovation',
    tags: ['innovation', 'digital-transformation', 'strategi'],
    publishedAt: '2024-12-05',
    readTime: 9,
    body: [],
  },
  {
    slug: 'hallbar-tillvaxt-nordisk-modell',
    title: 'Hållbar tillväxt: Den nordiska modellens renässans',
    excerpt:
      'Den nordiska affärsmodellen — med sitt fokus på tillit, hållbarhet och långsiktighet — visar sig vara oväntat resilient i en global kontext.',
    author: { name: 'Erik Lindberg', role: 'Senior Advisor' },
    category: 'Tillväxt',
    tags: ['tillväxt', 'strategi', 'ledarskap'],
    publishedAt: '2024-11-20',
    readTime: 7,
    body: [],
  },
];

export function getDemoPost(slug: string): BlogPost | undefined {
  return demoPosts.find((p) => p.slug === slug);
}

export function getDemoPostsByCategory(category: string): BlogPost[] {
  return demoPosts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = demoPosts.find((p) => p.slug === slug);
  if (!current) return demoPosts.slice(0, limit);
  return demoPosts
    .filter(
      (p) =>
        p.slug !== slug && p.tags.some((t) => current.tags.includes(t))
    )
    .slice(0, limit);
}
