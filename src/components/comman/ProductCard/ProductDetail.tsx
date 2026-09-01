'use client';
import { notFound, useParams } from 'next/navigation';
import { Container } from 'react-bootstrap';
import { Star, ShoppingCart, Heart, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { getProductBySlug } from '@/data/allProducts';


export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const {
    title,
    category,
    price,
    rating,
    brand,
  } = product;

  const { imageUrl, mrp, reviewCount, sellerName, ram, storage, description } =
    product as typeof product & {
      imageUrl?: string;
      mrp?: number;
      reviewCount?: number;
      sellerName?: string;
      ram?: string;
      storage?: string;
      description?: string;
    };

  const discount =
    mrp && mrp > price ? Math.round(((mrp - price) / mrp) * 100) : undefined;

  return (
    <div className="product-detail-page">
      <Container>
        <div className="product-detail-breadcrumb">
          <span>Home</span> / <span>{category}</span> / <span className="active">{title}</span>
        </div>

        <div className="product-detail-layout">
          <div className="product-detail-image-wrap">
            <div className="product-detail-image-box">
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="product-detail-image" />
              ) : (
                <div className="product-detail-image-placeholder" />
              )}
            </div>
          </div>

          <div className="product-detail-info">
            <span className="product-detail-category">{category}</span>
            <h1 className="product-detail-title">{title}</h1>

            <div className="product-detail-rating-row">
              <span className="product-detail-rating-badge">
                {rating} <Star size={12} fill="#fff" strokeWidth={0} />
              </span>
              {reviewCount !== undefined && (
                <span className="product-detail-review-count">
                  {reviewCount} Ratings
                </span>
              )}
              {sellerName && (
                <span className="product-detail-seller">Sold By {sellerName}</span>
              )}
            </div>

            <div className="product-detail-price-block">
              <span className="product-detail-price">₹{price}</span>
              {mrp !== undefined && mrp > price && (
                <>
                  <span className="product-detail-mrp">₹{mrp}</span>
                  <span className="product-detail-discount">{discount}% off</span>
                </>
              )}
            </div>
            {/* <p className="product-detail-tax-note">inclusive of all taxes</p> */}

            {description && (
              <div className="product-detail-description">
                <h4>Description</h4>
                <p>{description}</p>
              </div>
            )}

            {(brand || ram || storage) && (
              <div className="product-detail-specs">
                <h4>Specifications</h4>
                <div className="product-detail-specs-grid">
                  {brand && (
                    <div className="product-detail-spec-item">
                      <span>Brand</span>
                      <strong>{brand}</strong>
                    </div>
                  )}
                  {ram && (
                    <div className="product-detail-spec-item">
                      <span>RAM</span>
                      <strong>{ram}</strong>
                    </div>
                  )}
                  {storage && (
                    <div className="product-detail-spec-item">
                      <span>Storage</span>
                      <strong>{storage}</strong>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="product-detail-actions">
              <button className="product-detail-btn product-detail-btn-primary">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button className="product-detail-btn product-detail-btn-outline">
                Buy Now
              </button>
              <button className="product-detail-btn product-detail-btn-icon" aria-label="Wishlist">
                <Heart size={18} />
              </button>
            </div>

            <div className="product-detail-trust-row">
              <div className="product-detail-trust-item">
                <Truck size={18} />
                <span>Free Delivery</span>
              </div>
              <div className="product-detail-trust-item">
                <RotateCcw size={18} />
                <span>7 Day Returns</span>
              </div>
              <div className="product-detail-trust-item">
                <ShieldCheck size={18} />
                <span>Genuine Product</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}