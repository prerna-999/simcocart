import React from "react";

interface Section {
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    number: "01",
    title: "Information we collect",
    body: (
      <p>
        When you shop with SIMCO CART, we collect information you give us
        directly — like your name, email, phone number, shipping address,
        and payment details at checkout. We also automatically collect data
        such as your IP address, browser type, device information, and
        browsing behavior on our site to improve your experience.
      </p>
    ),
  },
  {
    number: "02",
    title: "How we use your information",
    body: (
      <ul>
        <li>To process and deliver your orders</li>
        <li>To send order updates, receipts, and shipping notifications</li>
        <li>To personalize product recommendations and offers</li>
        <li>To improve our website, products, and customer service</li>
        <li>To prevent fraud and maintain account security</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Sharing your information",
    body: (
      <p>
        We never sell your personal data. We only share information with
        trusted third parties who help us run our business — payment
        processors, shipping partners, and analytics providers — and only to
        the extent necessary for them to perform their services.
      </p>
    ),
  },
  {
    number: "04",
    title: "Cookies",
    body: (
      <p>
        We use cookies to remember your cart, preferences, and login
        session, and to understand how you use our site so we can make it
        better. You can disable cookies in your browser settings, though
        some features may not work as expected.
      </p>
    ),
  },
  {
    number: "05",
    title: "Data security",
    body: (
      <p>
        We use industry-standard encryption and security practices to
        protect your data. All payment transactions are processed through
        secure, PCI-compliant gateways — we never store your full card
        details on our servers.
      </p>
    ),
  },
  {
    number: "06",
    title: "Your rights",
    body: (
      <p>
        You can request access to, correction of, or deletion of your
        personal data at any time by reaching out to our support team. You
        can also opt out of marketing emails using the unsubscribe link in
        any email we send.
      </p>
    ),
  },
  {
    number: "07",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy occasionally to reflect changes in our
        practices or for legal reasons. We'll post the revised version here
        with an updated date.
      </p>
    ),
  },
];

const PrivacySection: React.FC = () => {
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

          <div className="legal-contact">
            <div className="legal-contact__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m5.5 7 6.5 5 6.5-5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2>08. Contact us</h2>
              <p>
                Questions about your privacy? Reach us at{" "}
                <a href="mailto:support@SIMCO CART.com">support@SIMCO CART.com</a>{" "}
                or <a href="tel:+917969328400">+91 7969328400</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacySection;