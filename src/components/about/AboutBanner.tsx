import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaTruck, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";

const aboutBadgeText = "#AboutSimcoCart";

const aboutHeadingSegments: { text: string; accent?: "green" | "lime" }[] = [
  { text: "Committed to " },
  { text: "Fresher Choices,", accent: "green" },
  { text: " Better " },
  { text: "Living Everyday", accent: "lime" },
];

const aboutParagraphs: { text: string; bold?: boolean }[][] = [
  [
    { text: "We are " },
    { text: "Simcocart, one of India\u2019s fastest-growing grocery marketplaces", bold: true },
    {
      text: ", connecting everyday shoppers with trusted local sellers for fresh produce, daily essentials, fashion, and more.",
    },
  ],
  [
    {
      text: "From free shipping to unbeatable prices and premium quality you can trust, our mission is simple: deliver what matters, every single day.",
    },
  ],
];

const aboutStats: { icon: React.ReactNode; value: string; label: string }[] = [
  { icon: <FaTruck />, value: "10K+", label: "Happy Customers" },
  { icon: <FaHandshake />, value: "500+", label: "Verified Sellers" },
  { icon: <FaMapMarkerAlt />, value: "50+", label: "Cities Served" },
];

const aboutHeroImage = "/assets/img/all-images/home/combo1.webp";

const AboutBanner: React.FC = () => {
  return (
    <section className="about-banner-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            <span className="about-banner-badge">{aboutBadgeText}</span>

            <h1 className="about-banner-heading">
              {aboutHeadingSegments.map((segment, index) => (
                <span
                  key={index}
                  className={
                    segment.accent === "green"
                      ? "accent-green"
                      : segment.accent === "lime"
                      ? "accent-lime"
                      : undefined
                  }
                >
                  {segment.text}
                </span>
              ))}
            </h1>

            {aboutParagraphs.map((paragraph, pIndex) => (
              <p className="about-banner-paragraph" key={pIndex}>
                {paragraph.map((segment, sIndex) =>
                  segment.bold ? (
                    <strong key={sIndex}>{segment.text}</strong>
                  ) : (
                    <React.Fragment key={sIndex}>{segment.text}</React.Fragment>
                  )
                )}
              </p>
            ))}

            <Row className="about-banner-stats g-3">
              {aboutStats.map((stat, index) => (
                <Col xs={4} key={index} className="about-banner-stat">
                  <span className="about-banner-stat-icon" aria-hidden="true">
                    {stat.icon}
                  </span>
                  <span className="about-banner-stat-value">{stat.value}</span>
                  <span className="about-banner-stat-label">{stat.label}</span>
                </Col>
              ))}
            </Row>

            <a href="#our-story" className="cta-button">
              Explore Our Story
            </a>
          </Col>

          <Col xs={12} lg={6}>
            <div className="about-banner-image-wrap">
              <Image
                src={aboutHeroImage}
                alt="Fresh groceries delivered by Simcocart"
                width={520}
                height={480}
                className="about-banner-image"
                unoptimized
              />
              <div className="about-banner-stat-badge">
                <span className="about-banner-stat-badge-value">5+</span>
                <span className="about-banner-stat-badge-label">
                  Years of
                  <br />
                  Trust
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutBanner;