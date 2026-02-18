import { NextRequest, NextResponse } from 'next/server';

const UNSPLASH_API = 'https://api.unsplash.com';

export async function GET(request: NextRequest) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { error: 'Unsplash API is not configured' },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const perPage = searchParams.get('per_page') || '5';
  const page = searchParams.get('page') || '1';
  const orientation = searchParams.get('orientation') || 'landscape';

  if (!query || query.trim().length === 0) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  // Sanitize
  const sanitized = query.replace(/[<>{}[\]\\\/]/g, '').trim().slice(0, 200);

  try {
    const params = new URLSearchParams({
      query: sanitized,
      per_page: perPage,
      page,
      orientation,
      content_filter: 'high',
    });

    const response = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        'Accept-Version': 'v1',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const rateLimitRemaining = response.headers.get('X-Ratelimit-Remaining');
      if (rateLimitRemaining === '0') {
        return NextResponse.json(
          { error: 'Rate limit exceeded', fallback: true },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: `Unsplash API returned ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Unsplash proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error', fallback: true },
      { status: 500 }
    );
  }
}
