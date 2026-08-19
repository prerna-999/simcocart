import React from "react";

interface TermsBannerProps {
  eyebrow?: string;
  titleTop?: string;
  subtitle?: string;
  crumbs?: string[];
}

const TermsBanner: React.FC<TermsBannerProps> = ({
  eyebrow = "Terms & Conditions",
  titleTop = "Your data, on your terms",
  subtitle = "A plain-language breakdown of what we collect, why we collect it, and the controls you have over every piece of it.",
  crumbs = ["Home", "Terms & Conditions"],
}) => {
  return (
    <section className="privacy-banner">
      <div className="privacy-banner__mesh" aria-hidden="true" />
      <div className="privacy-banner__grid" aria-hidden="true" />

      <div className="privacy-banner__inner">
        <div className="privacy-banner__crumb">
          {crumbs.map((c, i) => (
            <React.Fragment key={c}>
              {i > 0 && <span className="privacy-banner__sep">/</span>}
              <span className={i === crumbs.length - 1 ? "is-active" : ""}>{c}</span>
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

export default TermsBanner;
