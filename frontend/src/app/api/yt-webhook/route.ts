import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  // Process the YouTube webhook data
  return NextResponse.json({ received: true });
}
