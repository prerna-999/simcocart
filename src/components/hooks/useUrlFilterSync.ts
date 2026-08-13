'use client';
import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ActiveFilters } from '@/components/hooks/useProductFilters';


export function useUrlFilterSync(
  activeFilters: ActiveFilters,
  setActiveFilters: (filters: ActiveFilters) => void
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasHydrated = useRef(false);

  useEffect(() => {
    if (hasHydrated.current) return;
    hasHydrated.current = true;

    const fromUrl: ActiveFilters = {};
    searchParams.forEach((value, key) => {
      fromUrl[key] = value.split(',');
    });

    if (Object.keys(fromUrl).length > 0) {
      setActiveFilters(fromUrl);
    }
  }, []);

  useEffect(() => {
    if (!hasHydrated.current) return;

    const params = new URLSearchParams();
    Object.entries(activeFilters).forEach(([key, values]) => {
      if (values && values.length > 0) {
        params.set(key, values.join(','));
      }
    });

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [activeFilters]);
}