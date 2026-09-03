"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeartbeat, FaHome, FaBookOpen, FaShoppingBag } from "react-icons/fa";


export interface PerkItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface PerksProps {
  heading?: string;
  description?: string;
  perks?: PerkItem[];
}

const defaultPerks: PerkItem[] = [
  {
    icon: <FaHeartbeat />,
    title: "Health cover",
    description:
      "Full medical insurance for you and your immediate family, from day one.",
    color: "var(--color-1)",
  },
  {
    icon: <FaHome />,
    title: "Flexible & remote",
    description:
      "Hybrid by default. Work from a hub, a warehouse city, or home.",
    color: "var(--color-4)",
  },
  {
    icon: <FaBookOpen />,
    title: "Learning budget",
    description:
      "An annual stipend for courses, books and conferences you choose.",
    color: "var(--color-3)",
  },
  {
    icon: <FaShoppingBag />,
    title: "Employee discounts",
    description:
      "Preferred pricing across every category on SimcoCart, always.",
    color: "var(--color-2)",
  },
];

const Perks: React.FC<PerksProps> = ({
  heading = "Why work here",
  description = "The everyday support that lets the team focus on the work.",
  perks = defaultPerks,
}) => {
  return (
    <section className="perks">
      <Container>
        <Row>
          <Col xs={12} md={8} className="perks-head">
            <h2>{heading}</h2>
            <p>{description}</p>
          </Col>
        </Row>

        <Row className="gy-4">
          {perks.map((perk) => (
            <Col xs={12} sm={6} lg={3} key={perk.title}>
              <div className="perk-card">
                <div
                  className="perk-top"
                  style={{ background: perk.color }}
                >
                  <div className="perk-icon">{perk.icon}</div>
                  <h4>{perk.title}</h4>
                </div>
                <div className="perk-bottom">{perk.description}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Perks;