'use client';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/components/hooks/useProductFilters';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const {
    title,
    category,
    price,
    rating,
    reviewCount,
    imageUrl,
    sellerName,
    mrp,
  } = product as Product & {
    reviewCount?: number;
    imageUrl?: string;
    sellerName?: string;
    mrp?: number;
  };

  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="product-card-image" />
        )}
      </div>

      <div className="product-card-body">
        <span className="product-card-category">{category}</span>
        <h3 className="product-card-title">{title}</h3>

        <div className="product-card-rating">
          <span className="product-card-stars">
            {'★'.repeat(Math.round(rating))}
            {'☆'.repeat(5 - Math.round(rating))}
          </span>
          {reviewCount !== undefined && (
            <span className="product-card-review-count">({reviewCount})</span>
          )}
        </div>

        {sellerName && (
          <span className="product-card-seller">Sold By {sellerName}</span>
        )}

        <div className="product-card-footer">
          <div className="product-card-price-block">
            <span className="product-card-price">₹{price}</span>
            {mrp !== undefined && mrp > price && (
              <span className="product-card-mrp">₹{mrp}</span>
            )}
          </div>

          <button
            className="product-card-add-btn"
            onClick={() => onAddToCart?.(product)}
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}