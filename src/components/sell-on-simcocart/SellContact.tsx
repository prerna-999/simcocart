import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

const SellContact: React.FC = () => {
  return (
    <section className="final-cta-section">
      <Container>
        <div className="final-cta">
          <Row className="align-items-center w-100">
            <Col lg={8} md={12} className="final-cta-text-col">
              <h2>Ready to put your products in front of 10,000+ buyers?</h2>
              <p>Registration takes about 15 minutes. Most sellers go live within a week.</p>
            </Col>
            <Col lg={4} md={12} className="final-cta-btn-col">
              <button className="sell-register">
                Register as a Seller <FiArrowRight />
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SellContact;