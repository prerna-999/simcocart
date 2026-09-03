"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export interface StepItem {
  number: number;
  title: string;
  description: string;
  color: string;
}

export interface StepsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: StepItem[];
}

const defaultSteps: StepItem[] = [
  {
    number: 1,
    title: "Application review",
    description: "A team member reads every application within 5 working days.",
    color: "var(--color-2)",
  },
  {
    number: 2,
    title: "Intro call",
    description: "A 30-minute conversation about your background and the role.",
    color: "var(--primary-color)",
  },
  {
    number: 3,
    title: "Team interview",
    description: "Meet the people you'd work with, and walk through real problems.",
    color: "var(--color-1)",
  },
  {
    number: 4,
    title: "Offer",
    description: "We move fast once there's a match, with a clear, upfront offer.",
    color: "var(--color-5)",
  },
];

const Steps: React.FC<StepsProps> = ({
  eyebrow = "How to join",
  heading = "Hired at SimcoCart in four steps",
  description = "Most candidates hear back within 5 working days of applying.",
  steps = defaultSteps,
}) => {
  return (
    <section className="steps">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="steps-eyebrow">{eyebrow}</div>
            <div className="steps-head">
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>
          </Col>
        </Row>

        <Row className="steps-track gy-5">
          {steps.map((step) => (
            <Col lg={3} md={6} sm={6} xs={12} key={step.number} className="step-item">
              <div
                className="step-badge"
                style={{ borderColor: step.color, color: step.color }}
              >
                {step.number}
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Steps;


