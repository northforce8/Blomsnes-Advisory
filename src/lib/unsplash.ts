import type { UnsplashPhoto, UnsplashSearchResponse, FallbackImage } from '@/types';

// ═══════════════════════════════════════
// UNSPLASH SERVER-SIDE API LAYER
// All Unsplash communication is server-only.
// The access key never reaches the client.
// ═══════════════════════════════════════

const UNSPLASH_API = 'https://api.unsplash.com';
const UTM_SOURCE = 'blomsnes_advisory';
const UTM_MEDIUM = 'referral';

function getAccessKey(): string | null {
  return process.env.UNSPLASH_ACCESS_KEY || null;
}

// ─── CURATED FALLBACK IMAGES ────────────
// Used when API fails, rate-limited, or unconfigured.
// These are stable Unsplash URLs that won't change.

export const fallbackImages: Record<string, FallbackImage> = {
  'digital-transformation': {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    alt: 'Abstract digital network visualization',
    photographer: 'NASA',
    photographerUrl: 'https://unsplash.com/@nasa',
  },
  'leadership': {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    alt: 'Modern minimalist office interior with natural light',
    photographer: 'Alex Kotliarskyi',
    photographerUrl: 'https://unsplash.com/@frfrikes',
  },
  'strategy': {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    alt: 'Architectural lines of modern glass building',
    photographer: 'Sean Pollock',
    photographerUrl: 'https://unsplash.com/@seanpollock',
  },
  'data': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    alt: 'Clean data dashboard visualization',
    photographer: 'Luke Chesser',
    photographerUrl: 'https://unsplash.com/@lukechesser',
  },
  'architecture': {
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80',
    alt: 'Minimal Scandinavian architectural facade',
    photographer: 'Simone Hutsch',
    photographerUrl: 'https://unsplash.com/@simone_hutsch',
  },
  'workspace': {
    url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&q=80',
    alt: 'Modern workspace with clean lines',
    photographer: 'Nastuh Abootalebi',
    photographerUrl: 'https://unsplash.com/@nasa',
  },
  'abstract': {
    url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80',
    alt: 'Subtle gradient abstract texture',
    photographer: 'Gradienta',
    photographerUrl: 'https://unsplash.com/@gradienta',
  },
  'default': {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    alt: 'Modern architectural detail',
    photographer: 'Sean Pollock',
    photographerUrl: 'https://unsplash.com/@seanpollock',
  },
};

// ─── SEARCH ─────────────────────────────

export async function searchPhotos(
  query: string,
  options: { perPage?: number; page?: number; orientation?: string } = {}
): Promise<UnsplashPhoto[]> {
  const { perPage = 5, page = 1, orientation = 'landscape' } = options;

  try {
    const accessKey = getAccessKey();
    if (!accessKey) return [];

    const params = new URLSearchParams({
      query: sanitizeQuery(query),
      per_page: String(perPage),
      page: String(page),
      orientation,
      content_filter: 'high',
    });

    const response = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
      headers: { Authorization: `Client-ID ${accessKey}` },
      next: { revalidate: 3600, tags: ['unsplash'] },
    });

    if (!response.ok) return [];

    const data: UnsplashSearchResponse = await response.json();
    return data.results;
  } catch {
    return [];
  }
}

// ─── SINGLE PHOTO ───────────────────────

export async function getPhoto(id: string): Promise<UnsplashPhoto | null> {
  try {
    const accessKey = getAccessKey();
    if (!accessKey) return null;

    const response = await fetch(`${UNSPLASH_API}/photos/${id}`, {
      headers: { Authorization: `Client-ID ${accessKey}` },
      next: { revalidate: 86400, tags: ['unsplash'] },
    });

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

// ─── DOWNLOAD TRIGGER (Unsplash API compliance) ──

export async function triggerDownload(downloadLocation: string): Promise<void> {
  try {
    const accessKey = getAccessKey();
    if (!accessKey) return;

    await fetch(downloadLocation, {
      headers: { Authorization: `Client-ID ${accessKey}` },
    });
  } catch {
    // Non-critical — silently fail
  }
}

// ─── URL HELPERS ────────────────────────

export function buildImageUrl(
  photo: UnsplashPhoto,
  options: { width?: number; height?: number; quality?: number; fit?: string } = {}
): string {
  const { width = 1600, quality = 80, fit = 'crop' } = options;
  const base = photo.urls.raw;
  const params = [`w=${width}`, `q=${quality}`, `fit=${fit}`, 'auto=format'];
  if (options.height) params.push(`h=${options.height}`);
  return `${base}&${params.join('&')}`;
}

export function buildAttributionUrl(photo: UnsplashPhoto): string {
  return `${photo.user.links.html}?utm_source=${UTM_SOURCE}&utm_medium=${UTM_MEDIUM}`;
}

export function buildPhotoPageUrl(photo: UnsplashPhoto): string {
  return `${photo.links.html}?utm_source=${UTM_SOURCE}&utm_medium=${UTM_MEDIUM}`;
}

// ─── FALLBACK RESOLVER ──────────────────

export function getFallbackImage(query?: string): FallbackImage {
  if (!query) return fallbackImages['default'];
  const normalized = query.toLowerCase();
  for (const [key, image] of Object.entries(fallbackImages)) {
    if (normalized.includes(key)) return image;
  }
  return fallbackImages['default'];
}

// ─── CATEGORY → QUERY MAP ───────────────
// Maps blog categories to curated Unsplash search terms
// that produce Scandinavian-enterprise-appropriate imagery.

export const categoryQueryMap: Record<string, string> = {
  'strategi': 'minimal modern architecture scandinavian',
  'ledarskap': 'modern boardroom natural light minimal',
  'digital-transformation': 'abstract data visualization clean',
  'coaching': 'calm workspace natural light minimal',
  'förändringsledning': 'architectural lines modern building',
  'tillväxt': 'modern glass architecture upward perspective',
  'innovation': 'clean technology abstract minimal',
  'organisation': 'structured modern interior workspace',
  'default': 'scandinavian architecture minimal modern',
};

export function getCategoryQuery(category?: string): string {
  if (!category) return categoryQueryMap['default'];
  const normalized = category.toLowerCase().replace(/\s+/g, '-');
  return categoryQueryMap[normalized] || categoryQueryMap['default'];
}

// ─── PAGE-LEVEL IMAGE QUERIES ───────────
// Maps route keys to curated Unsplash search terms.
// Each page gets a distinct visual identity while
// staying within the Scandinavian enterprise aesthetic.

export const pageImageQueries: Record<string, { hero: string; section?: string; fallbackKey: string }> = {
  home: {
    hero: 'scandinavian modern architecture glass facade daylight',
    section: 'abstract light gradient minimal texture',
    fallbackKey: 'architecture',
  },
  om: {
    hero: 'modern scandinavian office interior team workspace',
    section: 'minimal concrete architecture nordic',
    fallbackKey: 'workspace',
  },
  tjanster: {
    hero: 'structured geometric architecture minimal light',
    section: 'clean dashboard data visualization modern',
    fallbackKey: 'strategy',
  },
  'strategi-till-resultat': {
    hero: 'architectural blueprint structured planning modern',
    section: 'modern glass staircase upward perspective',
    fallbackKey: 'strategy',
  },
  coaching: {
    hero: 'calm modern workspace natural light minimal nordic',
    section: 'quiet meeting room natural daylight',
    fallbackKey: 'workspace',
  },
  utbildningar: {
    hero: 'modern lecture hall university architecture scandinavian',
    section: 'clean whiteboard workshop minimal',
    fallbackKey: 'workspace',
  },
  case: {
    hero: 'modern corporate architecture glass building nordic',
    section: 'abstract data lines clean minimal',
    fallbackKey: 'architecture',
  },
  kontakt: {
    hero: 'minimal reception desk modern interior nordic',
    fallbackKey: 'workspace',
  },
  boka: {
    hero: 'modern calendar schedule clean workspace',
    fallbackKey: 'workspace',
  },
};

export async function getPageHeroPhoto(pageKey: string): Promise<UnsplashPhoto | null> {
  const config = pageImageQueries[pageKey];
  if (!config) return null;
  const results = await searchPhotos(config.hero, { perPage: 1, orientation: 'landscape' });
  return results[0] || null;
}

export async function getPageSectionPhoto(pageKey: string): Promise<UnsplashPhoto | null> {
  const config = pageImageQueries[pageKey];
  if (!config?.section) return null;
  const results = await searchPhotos(config.section, { perPage: 1, orientation: 'landscape' });
  return results[0] || null;
}

export function getPageFallback(pageKey: string): FallbackImage {
  const config = pageImageQueries[pageKey];
  const key = config?.fallbackKey || 'default';
  return fallbackImages[key] || fallbackImages['default'];
}

// ─── SANITIZE ───────────────────────────

function sanitizeQuery(query: string): string {
  return query
    .replace(/[<>{}[\]\\\/]/g, '')
    .trim()
    .slice(0, 200);
}
