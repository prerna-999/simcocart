"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState("");
  return (
    <section className="cs-hero">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="cs-eyebrow">#CustomerService</div>
            <h1>How can we help you today?</h1>
            <p>
              Search our help center or browse topics below — we&apos;re here round the clock to
              sort things out.
            </p>
            <form className="cs-help-search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Search orders, returns, payments..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;