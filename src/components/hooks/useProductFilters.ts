// 'use client';
// import { useMemo, useState, useCallback } from 'react';

// export interface Product {
//   id: string;
//   title: string;
//   category: string;
//   gender?: string;
//   color?: string;
//   fabric?: string;
//   dialShape?: string;
//   size?: string;
//   price: number;
//   rating: number;
//   kurtaFabric?: string;
//   dupattaColor?: string;
//   combo?: string;
//   discountPercent?: number;
//   reversible?: 'yes' | 'no';
//   usedFor?: string;
//   smartcoins?: 'yes' | 'no';
//   bodyMaterial?: string;
//   fitShape?: string;
//   bottomLength?: string;
//   brand?: string;
//   waistRise?: string;
//   bottomStyle?: string;
//   border?: string;
//   [key: string]: unknown;
// }

// export type ActiveFilters = Record<string, string[]>;

// function parseRange(values: string[] | undefined) {
//   if (!values) return { min: undefined, max: undefined };
//   const min = values.find((v) => v.startsWith('min:'))?.replace('min:', '');
//   const max = values.find((v) => v.startsWith('max:'))?.replace('max:', '');
//   return {
//     min: min ? Number(min) : undefined,
//     max: max ? Number(max) : undefined,
//   };
// }

// const RANGE_KEYS = new Set(['price']);

// export function useProductFilters(products: Product[]) {
//   const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});

//   const onFilterChange = useCallback(
//     (key: string, value: string, checked: boolean) => {
//       setActiveFilters((prev) => {
//         const current = prev[key] ?? [];

//         if (RANGE_KEYS.has(key)) {
//           const prefix = value.split(':')[0]; 
//           const withoutPrefix = current.filter((v) => !v.startsWith(`${prefix}:`));
//           const nextValue = value.endsWith(':') ? [] : [value]; // empty input clears that bound
//           return { ...prev, [key]: [...withoutPrefix, ...nextValue] };
//         }

//         const isRadio = key === 'gender'; 
//         if (isRadio) {
//           return { ...prev, [key]: [value] };
//         }

//         const next = checked
//           ? [...current, value]
//           : current.filter((v) => v !== value);
//         return { ...prev, [key]: next };
//       });
//     },
//     []
//   );

//   const clearFilter = useCallback((key: string) => {
//     setActiveFilters((prev) => {
//       const next = { ...prev };
//       delete next[key];
//       return next;
//     });
//   }, []);

//   const clearAll = useCallback(() => setActiveFilters({}), []);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       return Object.entries(activeFilters).every(([key, values]) => {
//         if (!values || values.length === 0) return true;

//         if (RANGE_KEYS.has(key)) {
//           const { min, max } = parseRange(values);
//           const productValue = product[key as keyof Product] as number;
//           if (min !== undefined && productValue < min) return false;
//           if (max !== undefined && productValue > max) return false;
//           return true;
//         }

//         if (key === 'rating') {
//           const minRating = Math.min(...values.map(Number));
//           return product.rating >= minRating;
//         }

//         if (key === 'discount') {
//           const minDiscount = Math.min(...values.map(Number));
//           return (product.discountPercent ?? 0) >= minDiscount;
//         }

//         const productValue = product[key as keyof Product];
//         return values.includes(String(productValue));
//       });
//     });
//   }, [products, activeFilters]);

//   const activeFilterCount = useMemo(
//     () => Object.values(activeFilters).reduce((sum, v) => sum + v.length, 0),
//     [activeFilters]
//   );

//   return {
//     activeFilters,
//     setActiveFilters,
//     onFilterChange,
//     clearFilter,
//     clearAll,
//     filteredProducts,
//     activeFilterCount,
//   };
// }

'use client';
import { useMemo, useState, useCallback } from 'react';

export interface Product {
  id: string;
  title: string;
  category: string;
  gender?: string;
  color?: string;
  fabric?: string;
  dialShape?: string;
  size?: string;
  price: number;
  rating: number;
  kurtaFabric?: string;
  dupattaColor?: string;
  combo?: string;
  discountPercent?: number;
  reversible?: 'yes' | 'no';
  usedFor?: string;
  smartcoins?: 'yes' | 'no';
  bodyMaterial?: string;
  fitShape?: string;
  bottomLength?: string;
  brand?: string;
  waistRise?: string;
  bottomStyle?: string;
  border?: string;
  [key: string]: unknown;
}

export type ActiveFilters = Record<string, string[]>;

function parseRange(values: string[] | undefined) {
  if (!values) return { min: undefined, max: undefined };
  const min = values.find((v) => v.startsWith('min:'))?.replace('min:', '');
  const max = values.find((v) => v.startsWith('max:'))?.replace('max:', '');
  return {
    min: min ? Number(min) : undefined,
    max: max ? Number(max) : undefined,
  };
}

const RANGE_KEYS = new Set(['price']);

export function useProductFilters(products: Product[]) {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});

  // Toggle a filter value on/off with a single click.
  // - Range filters (min:/max:) still just set/replace the bound.
  // - "gender" behaves like a single-select: clicking the active value clears it,
  //   clicking a different value switches to it.
  // - Everything else is a plain multi-select toggle: click adds it if absent,
  //   click again removes it if present.
  const onFilterChange = useCallback((key: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[key] ?? [];

      if (RANGE_KEYS.has(key)) {
        const prefix = value.split(':')[0];
        const withoutPrefix = current.filter((v) => !v.startsWith(`${prefix}:`));
        const nextValue = value.endsWith(':') ? [] : [value]; // empty input clears that bound
        return { ...prev, [key]: [...withoutPrefix, ...nextValue] };
      }

      const isRadio = key === 'gender';
      if (isRadio) {
        const isSameValue = current[0] === value;
        return { ...prev, [key]: isSameValue ? [] : [value] };
      }

      const isActive = current.includes(value);
      const next = isActive
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  }, []);

  const clearFilter = useCallback((key: string) => {
    setActiveFilters((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const clearAll = useCallback(() => setActiveFilters({}), []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return Object.entries(activeFilters).every(([key, values]) => {
        if (!values || values.length === 0) return true;

        if (RANGE_KEYS.has(key)) {
          const { min, max } = parseRange(values);
          const productValue = product[key as keyof Product] as number;
          if (min !== undefined && productValue < min) return false;
          if (max !== undefined && productValue > max) return false;
          return true;
        }

        if (key === 'rating') {
          const minRating = Math.min(...values.map(Number));
          return product.rating >= minRating;
        }

        if (key === 'discount') {
          const minDiscount = Math.min(...values.map(Number));
          return (product.discountPercent ?? 0) >= minDiscount;
        }

        const productValue = product[key as keyof Product];
        return values.includes(String(productValue));
      });
    });
  }, [products, activeFilters]);

  const activeFilterCount = useMemo(
    () => Object.values(activeFilters).reduce((sum, v) => sum + v.length, 0),
    [activeFilters]
  );

  return {
    activeFilters,
    setActiveFilters,
    onFilterChange,
    clearFilter,
    clearAll,
    filteredProducts,
    activeFilterCount,
  };
}