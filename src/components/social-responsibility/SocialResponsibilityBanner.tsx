import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiHeart, FiCheck, FiArrowRight } from "react-icons/fi";

interface HeroStat {
  id: number;
  value: string;
  label: string;
}

const heroStats: HeroStat[] = [
  { id: 1, value: "12,400+", label: "Trees planted with partners" },
  { id: 2, value: "38", label: "Community programs supported" },
  { id: 3, value: "40%", label: "Sellers onboarded are women-led" },
];

interface CalcRow {
  id: number;
  label: string;
  value: string;
  variant?: "negative" | "positive";
}

const calcRows: CalcRow[] = [
  { id: 1, label: "Orders delivered this month", value: "42,000+" },
  { id: 2, label: "Single-use plastic avoided", value: "1.2 tonnes", variant: "positive" },
  { id: 3, label: "Native saplings funded", value: "2,100", variant: "positive" },
  { id: 4, label: "Paid into community fund", value: "₹18.4L", variant: "positive" },
];

const SocialResponsibilityBanner: React.FC = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="hero-row align-items-center">
          <Col lg={7} md={12} className="hero-copy-col">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" /> Investing back into 50+ cities
            </div>
            <h1 className="hero-title">
              Business that gives back, not just <em>sells</em>.
            </h1>
            <p className="hero-lead">
              From the sellers we work with to the packages we ship, here&apos;s
              how Simcocart is investing in people, communities and the
              planet — with real numbers behind every claim.
            </p>
            <div className="hero-ctas">
              <button className="sell-btn">
                See our impact <FiArrowRight />
              </button>
              <button className="btn-ghost">Partner with us</button>
            </div>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div className="hero-stat" key={stat.id}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={5} md={12} className="hero-visual-col">
            <div className="hero-visual">
              <div className="calc-float calc-float-1">
                <span className="calc-float-ic calc-float-ic-1">
                  <FiHeart />
                </span>
                Tree planted
              </div>

              <div className="calc-card">
                <h4>Impact snapshot</h4>
                <div className="calc-title">Where this month&apos;s activity went</div>
                {calcRows.map((row) => (
                  <div className="calc-row" key={row.id}>
                    <span>{row.label}</span>
                    <span
                      className={
                        row.variant === "negative"
                          ? "calc-val calc-val-negative"
                          : row.variant === "positive"
                          ? "calc-val calc-val-positive"
                          : "calc-val"
                      }
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
                <div className="calc-total">
                  <span>Reviewed by</span>
                  <span>Independent audit</span>
                </div>
              </div>

              <div className="calc-float calc-float-2">
                <span className="calc-float-ic calc-float-ic-2">
                  <FiCheck />
                </span>
                Fund disbursed
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialResponsibilityBanner;