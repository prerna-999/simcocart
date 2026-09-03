"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export interface LifeItem {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface LifeProps {
  heading?: string;
  description?: string;
  items?: LifeItem[];
}

const defaultItems: LifeItem[] = [
  {
    title: "Small teams, real ownership",
    description:
      "Every squad owns a piece of the marketplace end to end — from a warehouse routing problem to a checkout redesign. You'll see your work reach millions of shoppers within weeks, not quarters.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    imageAlt: "Team collaborating",
    reverse: false,
  },
  {
    title: "Built on the ground, not just online",
    description:
      "We run 50+ warehouses and hubs alongside our engineering floors. Teams regularly spend time where orders are packed and delivered, so decisions stay grounded in how the marketplace actually works.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    imageAlt: "Warehouse operations",
    reverse: true,
  },
  {
    title: "Room to grow, on your terms",
    description:
      "Career paths here aren't fixed ladders. Move between teams, take on a new problem, or go deep on one — with managers who plan around what you want to build next.",
    imageUrl:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=80",
    imageAlt: "Learning and growth",
    reverse: false,
  },
];

const Life: React.FC<LifeProps> = ({
  heading = "Life at SimcoCart",
  description = "What it's actually like to build here, day to day.",
  items = defaultItems,
}) => {
  return (
    <section className="life" id="life">
      <Container>
        <Row>
          <Col xs={12} md={8} className="life-head">
            <h2>{heading}</h2>
            <p>{description}</p>
          </Col>
        </Row>

        {items.map((item) => (
          <Row
            key={item.title}
            className={`life-row ${
              item.reverse ? "flex-md-row-reverse" : ""
            }`}
          >
            <Col xs={12} md={6}>
              <div className="life-media">
                <img src={item.imageUrl} alt={item.imageAlt} />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="life-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Life;