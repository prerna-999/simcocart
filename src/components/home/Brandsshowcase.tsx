import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

interface Brand {
  id: number;
  name: string;
  logo: string; 
  rating: number; 
  reviewCount: number;
}

const BRANDS: Brand[] = [
  {
    id: 1,
    name: "Hewlett-Packard",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/HP_logo_2012.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 2,
    name: "NIKE",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_NIKE.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 3,
    name: "Reebok",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Reebok_International_logo.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 4,
    name: "Van Heusen",
    logo: "",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 5,
    name: "Apple",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_logo_black.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 6,
    name: "Hennes & Mauritz",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/H%26M-Logo.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 7,
    name: "Hewlett-Packard",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/HP_logo_2012.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 8,
    name: "NIKE",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_NIKE.svg",
    rating: 0,
    reviewCount: 10,
  },
  {
    id: 9,
    name: "Reebok",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Reebok_International_logo.svg",
    rating: 0,
    reviewCount: 10,
  },
];

const CARDS_PER_VIEW = {
  desktop: 6,
  tablet: 3,
  mobile: 2,
};

function useVisibleCards() {
  const [visible, setVisible] = useState(CARDS_PER_VIEW.desktop);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width < 640) setVisible(CARDS_PER_VIEW.mobile);
      else if (width < 1024) setVisible(CARDS_PER_VIEW.tablet);
      else setVisible(CARDS_PER_VIEW.desktop);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  return visible;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="brand-card__stars" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((star) => (
        <svg
          key={star}
          className={`brand-star ${star <= rating ? "brand-star--filled" : ""}`}
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 6.02 6.6.73-4.86 4.5 1.28 6.55L12 16.9l-5.92 3.4 1.28-6.55L2.5 9.25l6.6-.73L12 2.5z" />
        </svg>
      ))}
    </div>
  );
};

const BrandLogo: React.FC<{ name: string; logo: string }> = ({ name, logo }) => {
  const [failed, setFailed] = useState(false);
  const showImage = logo && !failed;

  if (!showImage) {
    return (
      <span className="brand-card__logo brand-card__logo--text" aria-hidden="true">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className="brand-card__logo"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const BrandsShowcase: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const visibleCards = useVisibleCards();

  const maxIndex = Math.max(BRANDS.length - visibleCards, 0);

  const goPrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const totalCards = BRANDS.length;
  const trackStyle: React.CSSProperties = {
    width: `${(totalCards / visibleCards) * 100}%`,
    transform: `translateX(-${(index / totalCards) * 100}%)`,
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  return (
    <section className="brands-showcase" aria-label="Brands showcase">

      <Container>
          <div className="brands-showcase__header">
        <div className="brands-showcase__heading">
          <h2 className="brands-showcase__title">Brands Showcase</h2>
          <p className="brands-showcase__subtitle">
            Explore our top-rated products loved by customers just like you.
            Find your new favorites today!
          </p>
        </div>

        <div className="brands-showcase__controls">
          <button
            type="button"
            className="brands-showcase__nav-btn"
            onClick={goPrev}
            disabled={isPrevDisabled}
            aria-label="Previous brands"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="brands-showcase__nav-btn"
            onClick={goNext}
            disabled={isNextDisabled}
            aria-label="Next brands"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="brands-showcase__panel">
        <div className="brands-showcase__viewport">
          <div className="brands-showcase__track" ref={trackRef} style={trackStyle}>
            {BRANDS.map((brand) => (
              <div
                className="brand-card"
                style={{ flex: `0 0 ${100 / totalCards}%` }}
                key={brand.id}
              >
                <div className="brand-card__inner">
                  <div className="brand-card__logo-wrap">
                    <BrandLogo name={brand.name} logo={brand.logo} />
                  </div>
                  <p className="brand-card__name">{brand.name}</p>
                  <div className="brand-card__rating">
                    <StarRating rating={brand.rating} />
                    <span className="brand-card__count">({brand.reviewCount})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Container>
    
    </section>
  );
};

export default BrandsShowcase;