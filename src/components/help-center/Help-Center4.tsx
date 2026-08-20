import React from "react";

const HelpCenter4: React.FC = () => {
  return (
    <section className="help-section">
      <div className="help-section__head">
        <h2>Still stuck? Talk to a human</h2>
        <p>Our support team is available every day, 7am – midnight.</p>
      </div>

      <div className="help-contact-grid">
        <div className="help-contact-card help-contact-card--c4">
          <span className="help-contact-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 5.5c0 8 6.5 14.5 14.5 14.5l2-4-5-2-1.5 2.2A11.3 11.3 0 0 1 7.8 9.2L10 7.7l-2-5-4 1.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
          <h3>Call us</h3>
          <p>Speak with our support desk directly.</p>
          <a href="tel:18003000353" className="help-contact-card__link">
            1 800 300-353
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="help-contact-card help-contact-card--c1">
          <span className="help-contact-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3>Email us</h3>
          <p>Get a reply within one business day.</p>
          <a href="mailto:info@example.com" className="help-contact-card__link">
            info@example.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="help-contact-card help-contact-card--highlight">
          <div className="help-contact-card__glow" aria-hidden="true" />
          <span className="help-contact-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 5h16v10.5H8.5L4 19.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M8 9.2h8M8 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <h3>Live chat</h3>
          <p>Chat with our team for the fastest answer.</p>
          <button type="button" className="help-contact-card__cta">
            Start chat
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter4;