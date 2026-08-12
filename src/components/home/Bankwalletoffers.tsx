import React, { useRef, useState, useEffect } from "react";

interface Offer {
  id: number;
  discount: string; 
  condition: string; 
  validity: string;
  code: string; 
  gradient: "warm" | "blue" | "red" | "sky"; 
}

const OFFERS: Offer[] = [
  {
    id: 1,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "warm",
  },
  {
    id: 2,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "blue",
  },
  {
    id: 3,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "red",
  },
  {
    id: 4,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "sky",
  },
   {
    id: 5,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "warm",
  },
  {
    id: 6,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "blue",
  },
  {
    id: 7,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "red",
  },
  {
    id: 8,
    discount: "GET 10% OFF",
    condition: "When you spend $20",
    validity: "Valid for 30 days",
    code: "FASTFESITVE",
    gradient: "sky",
  },
];

const CARDS_PER_VIEW = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
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

const GiftIllustration: React.FC = () => (
  <div className="offer-card__illustration" aria-hidden="true">
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <circle cx="60" cy="60" r="52" fill="var(--bg-2)" opacity="0.6" />
      <g transform="translate(24 30)">
        <rect x="4" y="26" width="60" height="40" rx="4" fill="var(--color-4)" />
        <rect x="4" y="26" width="60" height="14" fill="var(--primary-color)" />
        <rect x="30" y="26" width="8" height="40" fill="var(--color-white)" opacity="0.85" />
        <path
          d="M34 26c-10-2-16-10-10-16 5-4 12 2 14 10 2-8 9-14 14-10 6 6 0 14-10 16"
          fill="none"
          stroke="var(--color-3)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </div>
);

const CopyCodeButton: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button type="button" className="offer-card__copy-btn" onClick={handleCopy}>
      {copied ? "copied!" : "copy_code"}
    </button>
  );
};

const BankWalletOffers: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const visibleCards = useVisibleCards();

  const maxIndex = Math.max(OFFERS.length - visibleCards, 0);

  const goPrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const totalCards = OFFERS.length;

  const trackStyle: React.CSSProperties = {
    width: `${(totalCards / visibleCards) * 100}%`,
    transform: `translateX(-${(index / totalCards) * 100}%)`,
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  return (
    <section className="offers-showcase" aria-label="Bank and wallet offers">
      <div className="offers-showcase__header">
        <h2 className="offers-showcase__title">Bank &amp; Wallet Offers</h2>

        <div className="offers-showcase__controls">
          <button
            type="button"
            className="offers-showcase__nav-btn"
            onClick={goPrev}
            disabled={isPrevDisabled}
            aria-label="Previous offers"
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
            className="offers-showcase__nav-btn"
            onClick={goNext}
            disabled={isNextDisabled}
            aria-label="Next offers"
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

      <div className="offers-showcase__viewport">
        <div className="offers-showcase__track" ref={trackRef} style={trackStyle}>
          {OFFERS.map((offer) => (
            <div
              className="offer-card-wrap"
              style={{ flex: `0 0 ${100 / totalCards}%` }}
              key={offer.id}
            >
              <div className="offer-card">
                <div className="offer-card__top">
                  <p className="offer-card__discount">{offer.discount}</p>
                  <p className="offer-card__condition">{offer.condition}</p>
                  <p className="offer-card__validity">{offer.validity}</p>
                  <GiftIllustration />
                </div>
                <div className={`offer-card__footer offer-card__footer--${offer.gradient}`}>
                  <span className="offer-card__code">
                    Code : <strong>{offer.code}</strong>
                  </span>
                  <CopyCodeButton code={offer.code} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankWalletOffers;