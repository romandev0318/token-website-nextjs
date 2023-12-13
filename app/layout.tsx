'use client';
import './globals.css';
/* import type { Metadata } from 'next'; */
import { Suspense, useEffect } from 'react';
import PageLayout from '../components/pageLayout';
import { NavigationEvents } from '../utils/NavigationEvents';
import { setupTracking } from '../utils/TrackingUtils';
import StyledComponentsRegistry from './registry';

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
