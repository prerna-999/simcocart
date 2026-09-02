import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/comman/ProductCard/ProductCard';
import { Product } from '@/components/hooks/useProductFilters';

interface YouMayAlsoLikeProps {
  currentProduct: Product;
  allProducts: Product[];
  maxItems?: number;
}

const normalize = (val?: string) => (val ?? '').toString().trim().toLowerCase();

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({
  currentProduct,
  allProducts,
  maxItems = 8,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const sameCategory = allProducts.filter(
    (p) =>
      p.slug !== currentProduct.slug &&
      normalize(p.category) === normalize(currentProduct.category)
  );

  const fallback = allProducts.filter((p) => p.slug !== currentProduct.slug);

  const related = (sameCategory.length > 0 ? sameCategory : fallback).slice(
    0,
    maxItems
  );

  if (related.length === 0) return null;

  const scrollBy = (dir: 'left' | 'right') => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="you-may-also-like">
      <div className="you-may-also-like-head">
        <h2 className="you-may-also-like-title">You May Also Like</h2>
        <div className="you-may-also-like-nav">
          <button
            type="button"
            className="you-may-also-like-arrow"
            aria-label="Scroll left"
            onClick={() => scrollBy('left')}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="you-may-also-like-arrow"
            aria-label="Scroll right"
            onClick={() => scrollBy('right')}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="you-may-also-like-track" ref={scrollerRef}>
        {related.map((product) => (
          <div className="you-may-also-like-item" key={product.slug}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouMayAlsoLike;