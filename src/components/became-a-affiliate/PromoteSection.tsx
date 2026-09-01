import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const categories = [
  { rate: "10%", name: "Fashion" },
  { rate: "8%", name: "Electronics" },
  { rate: "12%", name: "Beauty" },
  { rate: "6%", name: "Home & Kitchen" },
  { rate: "9%", name: "Footwear" },
  { rate: "4%", name: "Groceries" },
];

const points = [
  "No approval needed per-product — one link generator covers the whole catalog.",
  "Commission applies to the entire cart, not just the item you linked.",
  "Rates are fixed by category, so you always know your payout upfront.",
];

export default function PromoteSection() {
  return (
    <section className="promote-section">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={6}>
            <span className="eyebrow">What you can share</span>
            <h2 className="section-title text-start">
              Every category on SimcoCart
              <br />
              is fair game.
            </h2>
            <p className="section-sub mb-4">
              From ₹99 phone cases to ₹80,000 laptops — link to any of our
              10,000+ live listings and earn every time your audience checks
              out.
            </p>
            <ul className="promote-list">
              {points.map((point) => (
                <li key={point}>
                  <span className="tick">
                    <FaCheck size={12} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={6}>
            <Row className="g-3">
              {categories.map((cat) => (
                <Col xs={6} md={4} key={cat.name}>
                  <div className="category-chip">
                    <span className="rate">{cat.rate}</span>
                    <span className="name">{cat.name}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}