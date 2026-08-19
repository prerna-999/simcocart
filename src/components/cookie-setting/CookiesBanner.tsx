import React from "react";

interface PrivacyBannerProps {
  eyebrow?: string;
  titleTop?: string;
  subtitle?: string;
  crumbs?: string[];
}

const CookiesBanner: React.FC<PrivacyBannerProps> = ({
  eyebrow = "Privacy & preferences",
  titleTop = "Cookie Settings",
  subtitle = "Choose how cookies and similar technologies are used on SIMCO CART. Essential cookies keep the store working, while optional cookies help us improve your shopping experience and show more relevant content.",
  crumbs = ["Home", "Cookie Settings"],
}) => {
  return (
    <section className="privacy-banner">
      <div className="privacy-banner__mesh" aria-hidden="true" />
      <div className="privacy-banner__grid" aria-hidden="true" />

      <div className="privacy-banner__inner">
        <div className="privacy-banner__crumb">
          {crumbs.map((c, i) => (
            <React.Fragment key={c}>
              {i > 0 && (
                <span className="privacy-banner__sep">/</span>
              )}

              <span
                className={
                  i === crumbs.length - 1 ? "is-active" : ""
                }
              >
                {c}
              </span>
            </React.Fragment>
          ))}
        </div>

        <p className="privacy-banner__eyebrow">{eyebrow}</p>

        <h1 className="privacy-banner__title">{titleTop}</h1>

        <p className="privacy-banner__subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default CookiesBanner;