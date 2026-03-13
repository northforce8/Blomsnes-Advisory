import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  try {
    const { downloadLocation } = await request.json();

    if (!downloadLocation || !downloadLocation.startsWith('https://api.unsplash.com')) {
      return NextResponse.json({ error: 'Invalid download location' }, { status: 400 });
    }

    await fetch(downloadLocation, {
      headers: { Authorization: `Client-ID ${accessKey}` },
    });

    return NextResponse.json({ success: true });
  } catch {
    // Non-critical endpoint — fail gracefully
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
