// ═══════════════════════════════════════
// CONTENT TYPES
// ═══════════════════════════════════════

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  image?: SanityImage;
  body: unknown[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  testimonial?: Testimonial;
  image?: SanityImage;
  tags: string[];
  publishedAt: string;
}

export interface Author {
  name: string;
  role: string;
  image?: SanityImage;
  bio?: string;
  linkedin?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface SanityImage {
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export type Locale = 'sv' | 'no' | 'en';

// ═══════════════════════════════════════
// UNSPLASH TYPES
// ═══════════════════════════════════════

export interface UnsplashPhoto {
  id: string;
  slug: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string | null;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    name: string;
    username: string;
    portfolio_url: string | null;
    links: {
      self: string;
      html: string;
    };
  };
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export type UnsplashImageVariant = 'hero' | 'thumbnail' | 'background';

export interface UnsplashImageProps {
  query: string;
  variant: UnsplashImageVariant;
  alt?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  priority?: boolean;
  parallax?: boolean;
}

export interface FallbackImage {
  url: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}
