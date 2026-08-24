import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiCheck } from "react-icons/fi";

interface Plan {
  id: number;
  name: string;
  price: string;
  priceSuffix?: string;
  note: string;
  features: string[];
  btnLabel: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Starter",
    price: "₹0",
    priceSuffix: "/month",
    note: "Best for testing the waters",
    features: [
      "Up to 50 product listings",
      "Standard search placement",
      "5% commission per sale",
      "Email support",
    ],
    btnLabel: "Choose Starter",
  },
  {
    id: 2,
    name: "Growth",
    price: "₹999",
    priceSuffix: "/month",
    note: "For sellers ready to scale up",
    features: [
      "Unlimited product listings",
      "Priority search placement",
      "3% commission per sale",
      "Dedicated success manager",
      "Access to bank offers & coupons",
    ],
    btnLabel: "Choose Growth",
    featured: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    note: "For established brands & suppliers",
    features: [
      "Everything in Growth",
      "Negotiated commission rates",
      "Featured brand showcase",
      "API & bulk catalogue tools",
    ],
    btnLabel: "Talk to us",
  },
];

const Plans: React.FC = () => {
  return (
    <section className="plans bg-2">
      <Container>
        <div className="sec-head">
          <div className="sec-eyebrow">Simple Pricing</div>
          <h2>Pick a plan that fits your catalogue</h2>
          <p>No setup fees on any plan. Switch or cancel anytime from your Seller Hub.</p>
        </div>
        <Row>
          {plans.map((plan) => (
            <Col lg={4} md={6} sm={12} className="mt-30" key={plan.id}>
              <div className={`plan-card ${plan.featured ? "plan-card-featured" : ""}`}>
                {plan.featured && <span className="plan-tag">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  {plan.price}
                  {plan.priceSuffix && <span>{plan.priceSuffix}</span>}
                </div>
                <div className="plan-price-note">{plan.note}</div>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="plan-tick">
                        <FiCheck />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="plan-btn">
                  {plan.btnLabel}
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Plans;