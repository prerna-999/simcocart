import React, { useMemo } from "react";

type FAQ = {
  id: string;
  categoryId: string;
  categoryLabel: string;
  question: string;
  answer: string;
};

const TABS = [
  { id: "all", label: "All" },
  { id: "orders", label: "Orders & Tracking" },
  { id: "payments", label: "Payments & Refunds" },
  { id: "returns", label: "Returns & Exchanges" },
  { id: "shipping", label: "Shipping & Delivery" },
  { id: "account", label: "Account & Security" },
  { id: "seller", label: "Become a Seller" },
];

const FAQS: FAQ[] = [
  {
    id: "f1",
    categoryId: "orders",
    categoryLabel: "Orders & Tracking",
    question: "How do I track my order?",
    answer:
      "Go to Your Orders from the account menu and select the order you'd like to track. You'll see live status updates from dispatch to delivery, plus courier details once your package ships.",
  },
  {
    id: "f2",
    categoryId: "orders",
    categoryLabel: "Orders & Tracking",
    question: "Can I cancel an order after placing it?",
    answer:
      "Yes, orders can be cancelled free of charge as long as they haven't been shipped yet. Open Your Orders, choose the item, and select Cancel Order. Once it's out for delivery, you'll need to use our return process instead.",
  },
  {
    id: "f3",
    categoryId: "orders",
    categoryLabel: "Orders & Tracking",
    question: "Why is my order showing as delayed?",
    answer:
      "Delays are usually caused by high demand, weather, or a courier handoff issue. Check the tracking timeline for the latest update — if it hasn't moved in 48 hours, contact support and we'll look into it directly.",
  },
  {
    id: "f4",
    categoryId: "payments",
    categoryLabel: "Payments & Refunds",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major cards, UPI, net banking, popular wallets like PhonePe and MobiKwik, and Cash on Delivery on eligible orders. You can save a default method under Payment Settings for faster checkout.",
  },
  {
    id: "f5",
    categoryId: "payments",
    categoryLabel: "Payments & Refunds",
    question: "When will I get my refund?",
    answer:
      "Refunds are issued as soon as we receive and verify your returned item, and typically reach your original payment method within 5–7 business days. Wallet and UPI refunds are usually the fastest.",
  },
  {
    id: "f6",
    categoryId: "payments",
    categoryLabel: "Payments & Refunds",
    question: "My payment failed but money was deducted. What now?",
    answer:
      "This is usually a temporary hold that reverses automatically within 3–5 business days. If it hasn't reversed after that window, reach out to support with your transaction ID and we'll trace it with the bank.",
  },
  {
    id: "f7",
    categoryId: "returns",
    categoryLabel: "Returns & Exchanges",
    question: "What's your return window?",
    answer:
      "Most items can be returned within 10 days of delivery in their original condition and packaging. Perishables, personal care, and made-to-order items are typically non-returnable — check the product page for specifics.",
  },
  {
    id: "f8",
    categoryId: "returns",
    categoryLabel: "Returns & Exchanges",
    question: "How do I start a return or exchange?",
    answer:
      "Open Your Orders, select the item, and choose Return or Exchange. Pick a reason, and we'll schedule a free pickup where available. You can track the return status the same way you track a delivery.",
  },
  {
    id: "f9",
    categoryId: "shipping",
    categoryLabel: "Shipping & Delivery",
    question: "How long does delivery usually take?",
    answer:
      "Standard delivery takes 3–6 business days depending on your location. Express delivery is available at checkout in select cities and typically arrives within 24–48 hours.",
  },
  {
    id: "f10",
    categoryId: "shipping",
    categoryLabel: "Shipping & Delivery",
    question: "Do you deliver to my area?",
    answer:
      "Enter your pin code on any product page or update your delivery location from the top of the homepage to instantly check serviceability, estimated delivery date, and any local delivery charges.",
  },
  {
    id: "f11",
    categoryId: "account",
    categoryLabel: "Account & Security",
    question: "How do I reset my password?",
    answer:
      "Select Forgot Password on the login screen and we'll send a reset link to your registered email or phone. For your security, the link expires after 30 minutes.",
  },
  {
    id: "f12",
    categoryId: "account",
    categoryLabel: "Account & Security",
    question: "How do I keep my account secure?",
    answer:
      "Use a unique password, enable two-step verification under Account Settings, and never share OTPs with anyone — our team will never ask for one. Review your active sessions periodically and log out of devices you don't recognize.",
  },
  {
    id: "f13",
    categoryId: "seller",
    categoryLabel: "Become a Seller",
    question: "How do I register as a Simcocart supplier?",
    answer:
      "Select Become a Seller from the top navigation, share your business and bank details, and list your first product. Approved sellers usually go live within 2 business days with zero listing commission.",
  },
  {
    id: "f14",
    categoryId: "seller",
    categoryLabel: "Become a Seller",
    question: "What fees does Simcocart charge sellers?",
    answer:
      "There's no commission on your first 100 orders. After that, a category-based service fee applies, shown transparently on every order in your Seller Dashboard — no hidden deductions.",
  },
];

type Props = {
  query: string;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  openFaqId: string | null;
  setOpenFaqId: (id: string | null) => void;
};

const HelpCenter3: React.FC<Props> = ({
  query,
  activeCategory,
  setActiveCategory,
  openFaqId,
  setOpenFaqId,
}) => {
  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.categoryId === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const activeLabel = TABS.find((t) => t.id === activeCategory)?.label ?? "All";

  return (
    <section className="help-section">
      <div className="help-section__head">
        <h2>Frequently asked questions</h2>
        <p>{activeCategory === "all" ? "Showing all topics" : `Showing: ${activeLabel}`}</p>
      </div>

      <div className="help-faq-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeCategory === tab.id ? "is-active" : ""}
            onClick={() => setActiveCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="help-faq-list">
        {filteredFaqs.length === 0 && (
          <div className="help-faq-empty">
            <p>No results for "{query}". Try a different search term or topic.</p>
          </div>
        )}

        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div className={`help-faq-item ${isOpen ? "is-open" : ""}`} key={faq.id}>
              <button
                type="button"
                className="help-faq-item__question"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <span className="help-faq-item__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {isOpen && <p className="help-faq-item__answer">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HelpCenter3;