import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Step {
  id: number;
  num: number;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { id: 1, num: 1, title: "Register", desc: "Share your GSTIN, bank details and business address." },
  { id: 2, num: 2, title: "List products", desc: "Upload your catalogue with photos, price and stock." },
  { id: 3, num: 3, title: "Get orders", desc: "Shoppers discover and buy your products on the site." },
  { id: 4, num: 4, title: "Get paid", desc: "Pack, hand over for delivery, and receive payouts." },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works bg-2">
      <Container>
        <div className="sec-head">
          <div className="sec-eyebrow">Getting Started</div>
          <h2>Live on Simcocart in four steps</h2>
          <p>Most sellers finish registration in under 15 minutes and go live the same week.</p>
        </div>
        <Row className="steps-row">
          {steps.map((step) => (
            <Col lg={3} md={6} sm={6} xs={12} className="steps-col" key={step.id}>
              <div className={`step step-${step.num}`}>
                <div className="step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;