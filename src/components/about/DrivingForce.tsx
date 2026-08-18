import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPatchCheck, BsPiggyBank, BsHeadset } from "react-icons/bs";
import { IconType } from "react-icons";


interface ForceCard {
  icon: IconType;
  title: string;
  text: string;
  active?: boolean;
}

const cards: ForceCard[] = [
  {
    icon: BsPatchCheck,
    title: "Uncompromising Quality",
    text: "We vet every product and partner to ensure you only receive the best.",
  },
  {
    icon: BsPiggyBank,
    title: "Everyday Affordability",
    text: "Optimizing our operations to pass significant savings directly to you.",
  },
  {
    icon: BsHeadset,
    title: "Customer Delight",
    text: "Round-the-clock support and hassle-free returns for absolute peace of mind.",
    active: true,
  },
];

const DrivingForce: React.FC = () => {
  return (
    <section className="driving-force-section">
      <Container>
        <div className="eyebrow-wrap">
          <h2 className="title">Our Driving Force</h2>
          <p className="subtitle">
            The principles that guide every decision we make.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {cards.map((card) => (
            <Col key={card.title} xs={12} md={6} lg={4}>
              <div className={`force-card ${card.active ? "active" : ""}`}>
                <div className="icon-wrap">
                  <card.icon className="icon" />
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DrivingForce;