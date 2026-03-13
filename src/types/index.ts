export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  description: string;
  results: string[];
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  preferredDate: string;
  message?: string;
}

// ═══════════════════════════════════════
// SANITY TYPES
// ═══════════════════════════════════════

export interface Author {
  name: string;
  role: string;
  image?: SanityImage;
  bio?: string;
  linkedin?: string;
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

export interface FallbackImage {
  url: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}
