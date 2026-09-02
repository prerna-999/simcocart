
"use client";


import React from "react";
import { Container } from "react-bootstrap";
import {
  FaBoxOpen,
  FaUndoAlt,
  FaCreditCard,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface TopicItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const TOPICS: TopicItem[] = [
  {
    id: "track-order",
    icon: FaBoxOpen,
    title: "Track My Order",
    description: "Check live status & delivery updates",
    color: "var(--color-4)",
  },
  {
    id: "returns-refunds",
    icon: FaUndoAlt,
    title: "Returns & Refunds",
    description: "Start a return or check refund status",
    color: "var(--color-3)",
  },
  {
    id: "payments-billing",
    icon: FaCreditCard,
    title: "Payments & Billing",
    description: "Cards, wallets & invoice queries",
    color: "var(--color-2)",
  },
  {
    id: "shipping-info",
    icon: FaTruck,
    title: "Shipping Info",
    description: "Delivery timelines & charges",
    color: "var(--color-1)",
  },
  {
    id: "account-security",
    icon: FaShieldAlt,
    title: "Account & Security",
    description: "Login issues & profile settings",
    color: "var(--color-5)",
  },
];

const TopicCard: React.FC<TopicItem> = ({ icon: Icon, title, description, color }) => (
  <div className="topic-card-col">
    <div className="topic-card">
      <div className="topic-icon" style={{ backgroundColor: color }}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const TopicsSection: React.FC = () => (
  <section className="cs-section cs-topics-section">
    <Container>
      <div className="cs-topics-row">
        {TOPICS.map((topic) => (
          <TopicCard key={topic.id} {...topic} />
        ))}
      </div>
    </Container>
  </section>
);

export default TopicsSection;