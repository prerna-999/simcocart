import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

const SocialResponsibility4: React.FC = () => {
  return (
    <>

      <section className="final-cta-section">
        <Container>
          <div className="final-cta">
            <Row className="align-items-center w-100">
              <Col lg={8} md={12} className="final-cta-text-col">
                <h2>Want to partner with us?</h2>
                <p>
                  NGOs, self-help groups and sustainability partners can
                  reach our responsibility team directly — most requests get
                  a reply within 2 working days.
                </p>
              </Col>
              <Col lg={4} md={12} className="final-cta-btn-col">
                <Link href="/customer-services" className="sell-register">
                  Get in touch <FiArrowRight />
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SocialResponsibility4;