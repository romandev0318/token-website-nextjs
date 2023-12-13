import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { GetUserInfo } from '@shibaone/shib-auth-sdk';

export async function GET() {
  const headers_instance = headers();
  const access_token = headers_instance.get('Authorization');

  try {
    if (!access_token) throw new Error('Access token not setted');
    let response = await GetUserInfo(access_token);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({}, { status: 500 });
  }
}
