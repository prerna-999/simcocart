import React, { JSX } from "react";


type Category = {
  id: string;
  label: string;
  accent: "c1" | "c2" | "c3" | "c4" | "c5";
  count: number;
  icon: JSX.Element;
};

const CATEGORIES: Category[] = [
  {
    id: "orders",
    label: "Orders & Tracking",
    accent: "c4",
    count: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 7l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 11v10" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "payments",
    label: "Payments & Refunds",
    accent: "c1",
    count: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="5.5" width="19" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "returns",
    label: "Returns & Exchanges",
    accent: "c3",
    count: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 1 1 2.6 5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 12V7M4 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "shipping",
    label: "Shipping & Delivery",
    accent: "c2",
    count: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M2.5 7.5h11v9h-11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M13.5 10.5H17l3.5 3v3h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="6.2" cy="17.7" r="1.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="17.7" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "account",
    label: "Account & Security",
    accent: "c5",
    count: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8.2" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 20c1.4-3.7 4.4-5.6 7.5-5.6s6.1 1.9 7.5 5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "seller",
    label: "Become a Seller",
    accent: "c4",
    count: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5 5 4h14l2 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 9.5h18v9.5H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 13.2a3 3 0 0 0 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

type Props = {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
};

const HelpCenter2: React.FC<Props> = ({ activeCategory, onCategoryClick }) => {
  return (
    <section className="help-section">
      <div className="help-section__head">
        <h2>Browse by topic</h2>
        <p>Jump straight to the questions that match what you need.</p>
      </div>

      <div className="help-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`help-category help-category--${cat.accent} ${
              activeCategory === cat.id ? "is-active" : ""
            }`}
            onClick={() => onCategoryClick(cat.id)}
          >
            <span className="help-category__icon">{cat.icon}</span>
            <span className="help-category__label">{cat.label}</span>
            <span className="help-category__count">{cat.count} articles</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HelpCenter2;