'use client';
import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useProductFilters, Product } from '@/components/hooks/useProductFilters';
import { useUrlFilterSync } from '@/components/hooks/useUrlFilterSync';
import FilterPanel, { productFilters } from '@/components/comman/FilterPanel/FilterPanel';
import ProductGrid from '@/components/comman/ProductCard/ProductGrid';
import { Container } from 'react-bootstrap';

interface ProductListingLayoutProps {
  title: string;
  products: Product[];
}

type SortOption = 'relevance' | 'price-low' | 'price-high' | 'rating';

export default function ProductListingLayout({
  title,
  products,
}: ProductListingLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');

  const {
    activeFilters,
    setActiveFilters,
    onFilterChange,
    clearAll,
    filteredProducts,
    activeFilterCount,
  } = useProductFilters(products);

  useUrlFilterSync(activeFilters, setActiveFilters);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];

    switch (sortBy) {
      case 'price-low':
        return list.sort((a, b) => a.price - b.price);
      case 'price-high':
        return list.sort((a, b) => b.price - a.price);
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      case 'relevance':
      default:
        return list; // original order = relevance
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="product-listing-layout">
      <div className="product-listing-header">
        <h1 className="product-listing-title">{title}</h1>

        <div className="product-listing-header-actions">
          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFilterCount > 0 && (
              <span className="filter-toggle-count">{activeFilterCount}</span>
            )}
          </button>

          <select
            className="product-listing-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {isFilterOpen && (
        <div
          className="filter-panel-backdrop"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* <Container> */}
        <div className="product-listing-body">
          <FilterPanel
            filters={productFilters}
            activeFilters={activeFilters}
            onFilterChange={onFilterChange}
            onClearAll={activeFilterCount > 0 ? clearAll : undefined}
            className={isFilterOpen ? 'filter-panel-open' : ''}
            onClose={isFilterOpen ? () => setIsFilterOpen(false) : undefined}
          />

          <ProductGrid products={sortedProducts} />
        </div>
      {/* </Container> */}
    </div>
  );
}