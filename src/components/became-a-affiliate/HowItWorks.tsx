import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Step {
  id: number;
  num: number;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { 
    id: 1, 
    num: 1, 
    title: "Apply", 
    desc: "Tell us where you plan to share products—whether it's a blog, YouTube channel, or social media." 
  },
  { 
    id: 2, 
    num: 2, 
    title: "Get approved", 
    desc: "Most applications are reviewed and approved within 24 to 48 hours with instant dashboard access." 
  },
  { 
    id: 3, 
    num: 3, 
    title: "Share & earn", 
    desc: "Grab custom tracking links for any product and earn commissions on every completed sale." 
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works bg-2">
      <Container>
        <div className="sec-head text-center mb-5">
          <div className="sec-eyebrow">Getting Started</div>
          <h2>Live on Simcocart in Three steps</h2>
          <p>Most affiliates are approved and sharing links within a single day.</p>
        </div>
        <Row className="steps-row justify-content-center">
          {steps.map((step) => (
            <Col lg={4} md={4} sm={12} className="steps-col" key={step.id}>
              <div className={`step step-${step.num}`}>
                <div className="step-num">
                  <span>{step.num}</span>
                </div>
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