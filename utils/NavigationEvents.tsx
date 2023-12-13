'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { setupTracking } from './TrackingUtils';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`;
    const lastTrackedPathname = sessionStorage.getItem('lastTrackedPathname');

    if (url !== lastTrackedPathname) {
      const analytics = setupTracking();
      analytics.trackPageView();

      sessionStorage.setItem('lastTrackedPathname', url);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
