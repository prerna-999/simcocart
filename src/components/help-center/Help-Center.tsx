import React from "react";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

const POPULAR_TAGS = ["Track order", "Return item", "Refund status", "Become a seller"];

const HelpCenter: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <section className="help-hero">
      <div className="help-hero__decor" aria-hidden="true" />
      <p className="help-hero__eyebrow">#SimcocartSupport</p>
      <h1 className="help-hero__title">
        Hi there, how can we <span>help you</span> today?
      </h1>
      <p className="help-hero__subtitle">
        Search our help articles or browse a topic below — most answers are just one click away.
      </p>

      <form className="help-search" role="search" onSubmit={(e) => e.preventDefault()}>
        <svg className="help-search__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M20 20l-3.4-3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for 'refund status', 'delivery time'..."
          aria-label="Search help articles"
        />
        <button type="submit">Search</button>
      </form>

      <div className="help-hero__tags">
        <span>Popular:</span>
        {POPULAR_TAGS.map((tag) => (
          <button key={tag} type="button" onClick={() => setQuery(tag)}>
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HelpCenter;