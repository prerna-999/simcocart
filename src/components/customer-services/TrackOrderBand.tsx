"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TrackOrderBand: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  return (
    <section className="cs-section cs-track-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="track-band">
              <div>
                <h2>Track your order in seconds</h2>
                <p>Pop in your order ID and we&apos;ll show you exactly where it is.</p>
              </div>
              <form className="track-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Enter Order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
                <button type="submit">Track Order</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrackOrderBand;