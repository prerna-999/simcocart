import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRupeeSign, FaLink, FaClock, FaChartLine } from 'react-icons/fa';

interface WhyCardItem {
  id: number;
  title: string;
  description: string;
  colorClass: string; 
}

interface WhyJoinProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards?: WhyCardItem[];
}

const defaultCards: WhyCardItem[] = [
  {
    id: 1,
    title: 'Real commissions',
    description: 'Earn 4–12% on every completed sale, depending on category. No caps on how much you can make.',
    colorClass: 'c1',
  },
  {
    id: 2,
    title: 'Simple link tools',
    description: 'Generate trackable links and banners for any product in seconds — from your dashboard or browser extension.',
    colorClass: 'c2',
  },
  {
    id: 3,
    title: '24-hour cookie window',
    description: 'You still get credit if someone buys within 24 hours of clicking your link, even if they add more items later.',
    colorClass: 'c3',
  },
  {
    id: 4,
    title: 'Live performance data',
    description: 'Track clicks, conversions, and earnings in real time from a dashboard built for creators, not spreadsheets.',
    colorClass: 'c4',
  },
];

 const WhyJoin: React.FC<WhyJoinProps> = ({
  eyebrow = 'Why Join',
  title = 'Everything you need to start earning',
  subtitle = 'The affiliate side of Simcocart, built the same way we built the store — simple, transparent, and focused on getting you paid.',
  cards = defaultCards,
}) => {
  return (
    <section className="why-join-section py-5">
      <Container className="wrap">
        <div className="text-center mb-5">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub mx-auto">{subtitle}</p>
        </div>

        <Row className="g-4">
          {cards.map((card, index) => (
            <Col key={card.id} lg={3} md={6} sm={12}>
              <div className="why-card h-100">
                <div className={`icon-box ${card.colorClass}`}>
                  {index === 0 && <FaRupeeSign />}
                  {index === 1 && <FaLink />}
                  {index === 2 && <FaClock />}
                  {index === 3 && <FaChartLine />}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default WhyJoin;