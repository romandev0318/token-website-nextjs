import { NextRequest, NextResponse } from 'next/server';
import { Auth0RevokeRoute } from '@shibaone/shib-auth-sdk';

export async function GET(req: NextRequest) {
  try {
    await Auth0RevokeRoute(req);
  }
  catch (error: unknown) {}
  return NextResponse.json({}, { status: 200 });
}