

"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: HeroStat[];
  imageUrl?: string;
  ratingValue?: string;
  ratingLabel?: string;
  citiesValue?: string;
  citiesLabel?: string;
}

const defaultStats: HeroStat[] = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Team Members" },
  { value: "50+", label: "Cities Served" },
  { value: "18", label: "Open Positions" },
];

const HeroBanner: React.FC<HeroProps> = ({
  eyebrow = "We're hiring across 6 teams",
  heading = "Help us deliver what matters, every single day.",
  description = "SimcoCart connects local sellers with everyday shoppers across India. Join the team building the marketplace behind it — from the warehouse floor to the checkout screen.",
  primaryCtaLabel = "View Open Roles",
  primaryCtaHref = "#roles",
  secondaryCtaLabel = "Life at SimcoCart",
  secondaryCtaHref = "#life",
  stats = defaultStats,
  imageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
  ratingValue = "4.6 / 5",
  ratingLabel = "Employee rating",
  citiesValue = "50+ Cities",
  citiesLabel = "Warehouses & hubs",
}) => {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center gy-5">
          <Col xs={12} md={7}>
            <div className="hero-eyebrow">
              <span className="hero-dot" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="hero-heading">{heading}</h1>
            <p className="hero-desc">{description}</p>

            <div className="hero-button-row">
              <a href={primaryCtaHref} className="pill-button pill-primary">
                {primaryCtaLabel}
              </a>
              <a href={secondaryCtaHref} className="pill-button pill-outline">
                {secondaryCtaLabel}
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={12} md={5}>
            <div className="hero-visual">
              <div className="hero-frame">
                <div className="hero-frame-inner">
                  <img src={imageUrl} alt="SimcoCart team at work" />
                </div>
              </div>

              <div className="card-float card-float-1">
                <div>
                  <div className="card-float-title">{ratingValue}</div>
                  <div className="card-float-subtitle">{ratingLabel}</div>
                </div>
              </div>

              <div className="card-float card-float-2">
                <div>
                  <div className="card-float-title">{citiesValue}</div>
                  <div className="card-float-subtitle">{citiesLabel}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroBanner;