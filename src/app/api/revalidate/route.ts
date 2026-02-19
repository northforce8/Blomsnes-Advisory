import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { tag, secret } = await request.json();

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    if (!tag) {
      return NextResponse.json({ error: 'Missing tag' }, { status: 400 });
    }

    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, tag });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
