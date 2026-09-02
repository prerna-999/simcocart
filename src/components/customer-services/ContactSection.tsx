"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaComments, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";

interface ContactItem {
  id: string;
  icon: IconType;
  status: string;
  title: string;
  description: string;
  ctaLabel: string;
  color: string;
}

const CONTACT_OPTIONS: ContactItem[] = [
  {
    id: "live-chat",
    icon: FaComments,
    status: "Online now",
    title: "Live Chat",
    description: "Get an answer in minutes, no hold music.",
    ctaLabel: "Start chat",
    color: "var(--color-4)",
  },
  {
    id: "call-us",
    icon: FaPhoneAlt,
    status: "24x7 available",
    title: "Call Us",
    description: "1 800 300-353 — toll free across the country.",
    ctaLabel: "Call now",
    color: "var(--color-3)",
  },
  {
    id: "email-support",
    icon: FaEnvelope,
    status: "Reply within 24h",
    title: "Email Support",
    description: "info@example.com for detailed queries.",
    ctaLabel: "Send email",
    color: "var(--color-2)",
  },
];

const ContactCard: React.FC<ContactItem> = ({
  icon: Icon,
  status,
  title,
  description,
  ctaLabel,
  color,
}) => (
  <Col lg={4} md={6} xs={12} >
    <div className="contact-card">
      <div className="contact-icon" style={{ backgroundColor: color }}>
        <Icon />
      </div>
      <div>
        <span className="status">
          <span className="dot" />
          {status}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="cta">{ctaLabel} →</span>
      </div>
    </div>
  </Col>
);

const ContactSection: React.FC = () => (
  <section className="contact-section">
    <Container>
      <Row>
        <Col lg={12} className="contact-section-head">
          <h2>Talk to us directly</h2>
          <p>Pick whichever way works best for you — real people, ready to help.</p>
        </Col>
      </Row>
      <Row className="g-4">
        {CONTACT_OPTIONS.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </Row>
    </Container>
  </section>
);

export default ContactSection;