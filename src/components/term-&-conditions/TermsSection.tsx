import React from "react";


interface Section {
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    number: "01",
    title: "Acceptance of terms",
    body: (
      <p>
        By accessing or shopping on SIMCO CART, you agree to be bound by
        these Terms and Conditions, our Privacy Policy, and any additional
        guidelines posted on the site. If you don't agree with any part of
        these terms, please don't use our website or place an order.
      </p>
    ),
  },
  {
    number: "02",
    title: "Using our website",
    body: (
      <ul>
        <li>You must be at least 18, or shopping with a parent or guardian's consent</li>
        <li>You agree to provide accurate account and shipping information</li>
        <li>You won't use the site for any unlawful or fraudulent purpose</li>
        <li>You're responsible for keeping your account credentials secure</li>
        <li>We may suspend or terminate accounts that violate these terms</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Orders and payments",
    body: (
      <p>
        Placing an order is an offer to buy, which we may accept or decline
        — for example if an item is out of stock or priced in error. Prices
        are shown in your local currency and include applicable taxes unless
        stated otherwise. Payment is processed securely at checkout, and
        your order is confirmed once payment is verified.
      </p>
    ),
  },
  {
    number: "04",
    title: "Shipping and delivery",
    body: (
      <p>
        Delivery timelines shown at checkout are estimates, not guarantees —
        they can shift due to courier delays, weather, or high order
        volumes. Ownership and risk of loss pass to you once an order is
        handed to the shipping carrier. You're responsible for entering a
        correct delivery address.
      </p>
    ),
  },
  {
    number: "05",
    title: "Returns, refunds and exchanges",
    body: (
      <p>
        Most items can be returned within 14 days of delivery if unused and
        in original packaging. Refunds are issued to your original payment
        method once the return is received and inspected. Final-sale and
        personalized items are not eligible for return unless faulty.
      </p>
    ),
  },
  {
    number: "06",
    title: "Intellectual property",
    body: (
      <p>
        All content on SIMCO CART — including product photos, logos, text,
        and site design — belongs to us or our licensors and is protected by
        copyright and trademark law. You may not copy, reproduce, or reuse
        it commercially without our written permission.
      </p>
    ),
  },
  {
    number: "07",
    title: "Limitation of liability",
    body: (
      <p>
        We work hard to keep listings accurate and the site running
        smoothly, but we don't guarantee it will be error-free or
        uninterrupted. To the extent permitted by law, SIMCO CART isn't
        liable for indirect or incidental damages arising from your use of
        the site or products purchased through it.
      </p>
    ),
  },
  {
    number: "08",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India, without regard to
        conflict-of-law principles. Any disputes arising from these terms
        or your use of the site will be subject to the exclusive
        jurisdiction of the courts where SIMCO CART is registered.
      </p>
    ),
  },
];

const TermsSection: React.FC = () => {
  return (
    <>
      <section className="legal-content">
        <div className="legal-content__inner">
          <p className="legal-content__updated">Last updated: August 2026</p>

          {sections.map((s) => (
            <div className="legal-block" key={s.number}>
              <div className="legal-block__head">
                <span className="legal-block__num">{s.number}</span>
                <h2>{s.title}</h2>
              </div>
              <div className="legal-block__body">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TermsSection;