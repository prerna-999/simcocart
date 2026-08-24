import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiPackage, FiCheck, FiArrowRight } from "react-icons/fi";

interface HeroStat {
  id: number;
  value: string;
  label: string;
}

const heroStats: HeroStat[] = [
  { id: 1, value: "10K+", label: "Buyers shopping daily" },
  { id: 2, value: "500+", label: "Verified sellers" },
  { id: 3, value: "0%", label: "Commission, first 90 days" },
];

interface CalcRow {
  id: number;
  label: string;
  value: string;
  variant?: "negative" | "positive";
}

const calcRows: CalcRow[] = [
  { id: 1, label: "Sale price", value: "₹1,000" },
  { id: 2, label: "Simcocart fee (launch offer)", value: "₹0", variant: "negative" },
  { id: 3, label: "Payment processing", value: "−₹18" },
  { id: 4, label: "Paid to your account", value: "₹982", variant: "positive" },
];

const SellSimcoCartBanner: React.FC = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="hero-row align-items-center">
          <Col lg={7} md={12} className="hero-copy-col">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" /> Now onboarding sellers in 50+ cities
            </div>
            <h1 className="hero-title">
              Turn your products into <em>orders</em>, every single day.
            </h1>
            <p className="hero-lead">
              List your catalogue in front of 10,000+ active shoppers on Simcocart. No
              warehouse, no showroom, no minimum stock — just your products and our customers.
            </p>
            <div className="hero-ctas">
              <button className="sell-btn">
                Start Selling — It&apos;s Free <FiArrowRight />
              </button>
              <button className="btn-ghost">Watch how it works</button>
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
                  <FiPackage />
                </span>
                Order placed
              </div>

              <div className="calc-card">
                <h4>Payout preview</h4>
                <div className="calc-title">What you&apos;d earn on ₹1,000</div>
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
                  <span>Settled to bank in</span>
                  <span>48 hrs</span>
                </div>
              </div>

              <div className="calc-float calc-float-2">
                <span className="calc-float-ic calc-float-ic-2">
                  <FiCheck />
                </span>
                Payment settled
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SellSimcoCartBanner;