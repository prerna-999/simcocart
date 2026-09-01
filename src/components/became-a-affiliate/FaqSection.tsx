import { Container, Accordion } from "react-bootstrap";


const faqs = [
  {
    q: "Do I need a certain number of followers to join?",
    a: "No minimum follower count. We review where you plan to share links — a blog, channel, or social profile — rather than audience size.",
  },
  {
    q: "When and how do I get paid?",
    a: "Commissions are calculated monthly and paid directly to your linked bank account within the first 7 business days of the following month.",
  },
  {
    q: "What happens if a customer returns the product?",
    a: "If an order is returned or cancelled within the return window, the associated commission is deducted from your next payout cycle.",
  },
  {
    q: "Can I promote SimcoCart on paid ads?",
    a: "Yes, with some restrictions — you can't bid on our brand name in search ads. Full paid-traffic guidelines are shared after approval.",
  },
  {
    q: "Is there a cost to join the affiliate program?",
    a: "It's completely free to apply and stay enrolled. There are no listing fees, subscription costs, or minimum sales requirements.",
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section">
      <Container>
        <div className="section-head text-center mx-auto">
          <span className="eyebrow">Good to know</span>
          <h2 className="section-title">Frequently asked questions</h2>
        </div>

        <Accordion defaultActiveKey="0" className="faq-accordion mx-auto">
          {faqs.map((faq, i) => (
            <Accordion.Item eventKey={String(i)} key={faq.q}>
              <Accordion.Header>{faq.q}</Accordion.Header>
              <Accordion.Body>{faq.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}