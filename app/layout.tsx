'use client';
import './globals.css';
/* import type { Metadata } from 'next'; */
import { Suspense, useEffect } from 'react';
import PageLayout from '../components/pageLayout';
import { NavigationEvents } from '../utils/NavigationEvents';
import { setupTracking } from '../utils/TrackingUtils';
import StyledComponentsRegistry from './registry';
import Head from 'next/head';

/* export const metadata: Metadata = {
  title: 'The Shib - Stay Ahead with the latest updates from Shibarium Chain!',
  description: 'Stay Ahead with the latest updates from Shibarium Chain!',
};
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupTracking();
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Shibtoken</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <body>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <StyledComponentsRegistry>
          <PageLayout> {children} </PageLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
