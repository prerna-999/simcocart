import { Product } from '@/components/hooks/useProductFilters';
import { HomeProducts } from '@/data/HomeProduct';
import { mobiledata } from '@/data/MobileData';

export const allProducts: Product[] = [
  ...HomeProducts,
  ...mobiledata,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(
    (p) => p.slug.toString().trim().toLowerCase() === slug.toString().trim().toLowerCase()
  );
}