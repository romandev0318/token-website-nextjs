import { NextRequest, NextResponse } from 'next/server';
import { Auth0PasswordlessStartRoute } from '@shibaone/shib-auth-sdk';

export async function POST(req: NextRequest) {
  try {
    const response = await Auth0PasswordlessStartRoute(req);
    return NextResponse.json(response, {status: 200});
  }
  catch (error: unknown) {
    return NextResponse.json({}, {status: 500});
  }
}