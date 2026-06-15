import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Some dev tooling sends requests to /auth/postback/tunnel?tunnel=1
  // Provide a benign 200 response to avoid noisy 404s in dev.
  return NextResponse.json({ ok: true, message: 'tunnel acknowledged' });
}
