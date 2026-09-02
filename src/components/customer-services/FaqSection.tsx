"use client";


import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSearch, FaTimes, FaPlus } from "react-icons/fa";

interface FaqItem {
  id: string;
  category: "orders" | "returns" | "payments" | "delivery" | "account";
  question: string;
  answer: string;
}

interface FaqTab {
  key: FaqItem["category"] | "all";
  label: string;
}

const FAQ_TABS: FaqTab[] = [
  { key: "all", label: "All" },
  { key: "orders", label: "Orders" },
  { key: "returns", label: "Returns" },
  { key: "payments", label: "Payments" },
  { key: "delivery", label: "Delivery" },
  { key: "account", label: "Account" },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "orders",
    question: "How do I check my order status?",
    answer:
      'Head to "Your Orders" from your account menu, or use the Track Order box above with your order ID to see real-time status.',
  },
  {
    id: "faq-2",
    category: "orders",
    question: "Can I cancel an order after placing it?",
    answer:
      'Yes, as long as it hasn\'t shipped yet. Go to Your Orders, select the order, and choose "Cancel order." Once shipped, you\'ll need to use returns instead.',
  },
  {
    id: "faq-3",
    category: "orders",
    question: "Can I change my delivery address after placing an order?",
    answer:
      'Yes, as long as the order hasn\'t shipped. Go to Your Orders, select the order, and choose "Edit delivery address."',
  },
  {
    id: "faq-4",
    category: "returns",
    question: "What is your return window?",
    answer:
      "Most items can be returned within 7–14 days of delivery. Check the product page for category-specific windows.",
  },
  {
    id: "faq-5",
    category: "returns",
    question: "How long does a refund take to process?",
    answer:
      "Refunds are issued within 5–7 business days of us receiving the returned item, back to your original payment method.",
  },
  {
    id: "faq-6",
    category: "returns",
    question: "Do I need the original packaging to return an item?",
    answer:
      "We recommend it, but it's not always required. Items should be unused and in resellable condition — check the specific return policy on the product page.",
  },
  {
    id: "faq-7",
    category: "payments",
    question: "Which payment methods do you accept?",
    answer:
      "We accept UPI, credit/debit cards, net banking, wallets like PhonePe and MobiKwik, and Cash on Delivery.",
  },
  {
    id: "faq-8",
    category: "payments",
    question: "Why was my payment declined?",
    answer:
      "This is usually due to bank-side limits or incorrect card details. Try another method, or contact your bank if the issue persists.",
  },
  {
    id: "faq-9",
    category: "payments",
    question: "Can I get an invoice for my order?",
    answer:
      'Yes — every order includes a downloadable invoice available from Your Orders under "Order details."',
  },
  {
    id: "faq-10",
    category: "delivery",
    question: "How long does delivery usually take?",
    answer:
      "Most orders arrive within 2–5 business days, depending on your location and the seller's dispatch time.",
  },
  {
    id: "faq-11",
    category: "delivery",
    question: "Do you deliver to my area?",
    answer:
      'We currently serve 50+ cities. Enter your pincode at checkout or in "Update location" to confirm serviceability.',
  },
  {
    id: "faq-12",
    category: "account",
    question: "How do I reset my account password?",
    answer:
      'Go to Login, select "Forgot password," and follow the link sent to your registered email or phone.',
  },
  {
    id: "faq-13",
    category: "account",
    question: "How do I delete my account?",
    answer:
      "Go to Account Settings → Privacy → Delete account. This is permanent and removes your order history and saved details.",
  },
];

function highlightText(text: string, term: string): React.ReactNode {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "ig");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i}>{part}</mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  searchTerm: string;
  onToggle: (id: string) => void;
}

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  item,
  isOpen,
  searchTerm,
  onToggle,
}) => {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-q" onClick={() => onToggle(item.id)}>
        <span className="q-text">{highlightText(item.question, searchTerm)}</span>
        <span className="plus">
          <FaPlus />
        </span>
      </button>
      <div className="faq-a-wrap" style={{ maxHeight: isOpen ? "320px" : "0px" }}>
        <div className="faq-a">
          <p className="a-text">{highlightText(item.answer, searchTerm)}</p>
          <div className="faq-helpful">
            <span>Was this helpful?</span>
            <button
              className={vote === "yes" ? "picked" : ""}
              onClick={(e) => {
                e.stopPropagation();
                setVote("yes");
              }}
            >
              Yes
            </button>
            <button
              className={vote === "no" ? "picked" : ""}
              onClick={(e) => {
                e.stopPropagation();
                setVote("no");
              }}
            >
              No
            </button>
            {vote && <span className="thanks show">Thanks for the feedback!</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [activeCat, setActiveCat] = useState<FaqTab["key"]>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return FAQS.filter((faq) => {
      const matchesCat = activeCat === "all" || faq.category === activeCat;
      const haystack = `${faq.question} ${faq.answer}`.toLowerCase();
      const matchesTerm = !term || haystack.includes(term);
      return matchesCat && matchesTerm;
    });
  }, [activeCat, searchTerm]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleReset = () => {
    setSearchTerm("");
    setActiveCat("all");
  };

  return (
    <section className="faq-section">
      <Container>
        <Row>
          <Col lg={12} className="faq-section-head">
            <h2>Frequently asked questions</h2>
            <p>Quick answers to the things people ask us most.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12}>
            <div className={`faq-search ${searchTerm ? "has-text" : ""}`}>
              <FaSearch className="search-icon" style={{ color: "var(--primary-color)" }} />
              <input
                type="text"
                placeholder="Search FAQs, e.g. 'refund' or 'change address'"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="faq-tabs">
              {FAQ_TABS.map((tab) => (
                <span
                  key={tab.key}
                  className={`faq-tab ${activeCat === tab.key ? "active" : ""}`}
                  onClick={() => setActiveCat(tab.key)}
                >
                  {tab.label}
                </span>
              ))}
            </div>

            <div className="faq-count">
              <strong>{filteredFaqs.length}</strong>{" "}
              {filteredFaqs.length === 1 ? "question found" : "questions found"}
            </div>

            <div className="faq-list">
              {filteredFaqs.map((faq) => (
                <FaqAccordionItem
                  key={faq.id}
                  item={faq}
                  isOpen={openId === faq.id}
                  searchTerm={searchTerm}
                  onToggle={handleToggle}
                />
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="faq-empty show">
                No results found. Try a different search term, or{" "}
                <span className="faq-reset-link" onClick={handleReset}>
                  clear filters
                </span>
                .
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;