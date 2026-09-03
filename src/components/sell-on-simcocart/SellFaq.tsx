
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";


interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "Is there a fee to register as a seller?",
    answer:
      "Registration is completely free. You only pay commission once an order is delivered, and that's waived for your first 90 days.",
  },
  {
    id: 2,
    question: "What documents do I need?",
    answer:
      "A valid GSTIN, PAN, a cancelled cheque or bank statement, and address proof of your business location.",
  },
  {
    id: 3,
    question: "How and when do I get paid?",
    answer:
      "Payouts are settled directly to your linked bank account within 48 hours of order delivery. You can track every payout in the Seller Hub.",
  },
  {
    id: 4,
    question: "Can I sell if I don't have a GST number?",
    answer:
      "GST-exempt categories such as certain unbranded food items and books can be listed without a GSTIN. Everything else requires one, as per Indian tax law.",
  },
];

const SellFaq: React.FC = () => {
  const [openId, setOpenId] = useState<number>(1);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <section className="sf-faq sf-faq-bg-2">
      <Container>
        <div className="sf-faq-sec-head">
          <div className="sf-faq-eyebrow">Questions</div>
          <h2>Before you sign up</h2>
        </div>
        <div className="sf-faq-list">
          {faqItems.map((item) => (
            <div
              className={`sf-faq-item ${
                openId === item.id ? "sf-faq-item-open" : ""
              }`}
              key={item.id}
              role="button"
              tabIndex={0}
              aria-expanded={openId === item.id}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
            >
              <div className="sf-faq-q">
                {item.question}
                <span className="sf-faq-plus">
                  <FiPlus />
                </span>
              </div>
              <div className="sf-faq-a">{item.answer}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SellFaq;