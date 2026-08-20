import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { FiTrendingUp, FiZap, FiPhoneCall } from "react-icons/fi";

interface WhyCard {
  id: number;
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  desc: string;
}

const whyCards: WhyCard[] = [
  {
    id: 1,
    icon: <FaRupeeSign />,
    iconClass: "ic-1",
    title: "Keep more of every sale",
    desc: "Zero commission for your first 90 days, then category-flat fees with no hidden deductions.",
  },
  {
    id: 2,
    icon: <FiTrendingUp />,
    iconClass: "ic-2",
    title: "Reach beyond your city",
    desc: "Your listings go live to shoppers across 50+ cities from day one, not just your local pincode.",
  },
  {
    id: 3,
    icon: <FiZap />,
    iconClass: "ic-3",
    title: "Get paid in 48 hours",
    desc: "No 15-day holding periods. Delivered orders settle to your bank account within two business days.",
  },
  {
    id: 4,
    icon: <FiPhoneCall />,
    iconClass: "ic-4",
    title: "A seller support that answers",
    desc: "A dedicated seller success manager for onboarding, plus 24×7 support once you're live.",
  },
];

const WhySell: React.FC = () => {
  return (
    <section className="why-sell">
      <Container>
        <div className="sec-head">
          <div className="sec-eyebrow">Why Simcocart</div>
          <h2>Everything you need, nothing you don&apos;t</h2>
          <p>
            We built the seller side the same way we built the store — simple, fast, and
            focused on getting your products bought.
          </p>
        </div>
        <Row className="why-grid-row">
          {whyCards.map((card) => (
            <Col lg={3} md={6} sm={6} xs={12} className="why-grid-col" key={card.id}>
              <div className="why-card">
                <div className={`why-ic ${card.iconClass}`}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhySell;