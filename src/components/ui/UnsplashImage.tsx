'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import type { UnsplashPhoto, UnsplashImageVariant, FallbackImage } from '@/types';

// ═══════════════════════════════════════
// UNSPLASH IMAGE COMPONENT
// Variants: hero | thumbnail | background
// Server-fetched data, client rendering.
// ═══════════════════════════════════════

interface UnsplashImageProps {
  photo?: UnsplashPhoto | null;
  fallback?: FallbackImage;
  variant: UnsplashImageVariant;
  alt?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  priority?: boolean;
  parallax?: boolean;
}

const variantConfig: Record<
  UnsplashImageVariant,
  { sizes: string; quality: number; width: number; height: number }
> = {
  hero: {
    sizes: '100vw',
    quality: 85,
    width: 1920,
    height: 1080,
  },
  thumbnail: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality: 75,
    width: 800,
    height: 500,
  },
  background: {
    sizes: '100vw',
    quality: 70,
    width: 1600,
    height: 900,
  },
};

function buildSrc(photo: UnsplashPhoto, config: (typeof variantConfig)['hero']): string {
  return `${photo.urls.raw}&w=${config.width}&q=${config.quality}&fit=crop&auto=format`;
}

function Attribution({
  photo,
  fallback,
}: {
  photo?: UnsplashPhoto | null;
  fallback?: FallbackImage;
}) {
  const name = photo?.user.name || fallback?.photographer || '';
  const url = photo
    ? `${photo.user.links.html}?utm_source=blomsnes_advisory&utm_medium=referral`
    : fallback?.photographerUrl || '';

  if (!name) return null;

  return (
    <p className="absolute bottom-3 right-4 z-20 text-[10px] text-white/40 transition-opacity hover:text-white/70">
      Photo by{' '}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-white/20 underline-offset-2 hover:decoration-white/50"
      >
        {name}
      </a>{' '}
      on{' '}
      <a
        href="https://unsplash.com?utm_source=blomsnes_advisory&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-white/20 underline-offset-2 hover:decoration-white/50"
      >
        Unsplash
      </a>
    </p>
  );
}

export default function UnsplashImage({
  photo,
  fallback,
  variant,
  alt,
  className,
  overlay = false,
  overlayOpacity = 0.5,
  priority = false,
  parallax = false,
}: UnsplashImageProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const config = variantConfig[variant];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Trigger Unsplash download endpoint for compliance
  useEffect(() => {
    if (photo?.links.download_location) {
      fetch('/api/unsplash/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          downloadLocation: photo.links.download_location,
        }),
      }).catch(() => {});
    }
  }, [photo]);

  const src = photo
    ? buildSrc(photo, config)
    : fallback?.url || '';
  const altText =
    alt || photo?.alt_description || photo?.description || fallback?.alt || '';
  const blurColor = photo?.color || '#1a1a1a';

  if (!src) return null;

  // ─── HERO VARIANT ─────────────────────

  if (variant === 'hero') {
    return (
      <div
        ref={containerRef}
        className={clsx('relative w-full overflow-hidden', className)}
      >
        <motion.div
          className="absolute inset-0"
          style={parallax ? { y } : undefined}
        >
          <Image
            src={src}
            alt={altText}
            fill
            sizes={config.sizes}
            quality={config.quality}
            priority={priority}
            className={clsx(
              'object-cover transition-opacity duration-1000',
              loaded ? 'opacity-100' : 'opacity-0'
            )}
            style={{ backgroundColor: blurColor }}
            onLoad={() => setLoaded(true)}
          />
        </motion.div>

        {overlay && (
          <div
            className="absolute inset-0 z-10"
            style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
          />
        )}

        <Attribution photo={photo} fallback={fallback} />
      </div>
    );
  }

  // ─── THUMBNAIL VARIANT ────────────────

  if (variant === 'thumbnail') {
    return (
      <div
        className={clsx(
          'group relative overflow-hidden bg-warm',
          className
        )}
      >
        <Image
          src={src}
          alt={altText}
          width={config.width}
          height={config.height}
          sizes={config.sizes}
          quality={config.quality}
          priority={priority}
          className={clsx(
            'h-full w-full object-cover transition-all duration-700',
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
            'group-hover:scale-[1.03]'
          )}
          style={{ backgroundColor: blurColor }}
          onLoad={() => setLoaded(true)}
        />

        {overlay && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(10,10,10,${overlayOpacity}) 0%, transparent 60%)`,
            }}
          />
        )}
      </div>
    );
  }

  // ─── BACKGROUND VARIANT ───────────────

  return (
    <div
      ref={containerRef}
      className={clsx('relative overflow-hidden', className)}
    >
      <motion.div
        className="absolute inset-0"
        style={parallax ? { y } : undefined}
      >
        <Image
          src={src}
          alt={altText}
          fill
          sizes={config.sizes}
          quality={config.quality}
          className={clsx(
            'object-cover transition-opacity duration-1000',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ backgroundColor: blurColor }}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>

      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
        />
      )}

      <Attribution photo={photo} fallback={fallback} />
    </div>
  );
}
