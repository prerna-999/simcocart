import { Product } from '@/components/hooks/useProductFilters';
import { HomeProducts } from './HomeProduct';
import { mobiledata } from './MobileData';
import { ElectronicsProducts } from './ElectronicsProducts';

export const allProducts: Product[] = [
  ...HomeProducts,
  ...mobiledata,
  ...ElectronicsProducts,
  
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(
    (p) => p.slug.toString().trim().toLowerCase() === slug.toString().trim().toLowerCase()
  );
}