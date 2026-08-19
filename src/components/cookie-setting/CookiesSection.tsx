import React from "react";

interface Section {
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    number: "01",
    title: "What are cookies?",
    body: (
      <p>
        Cookies are small text files stored on your device when you visit
        SIMCO CART. They help us remember your preferences, keep your
        shopping session active, improve website performance, and provide
        a smoother shopping experience.
      </p>
    ),
  },
  {
    number: "02",
    title: "Essential cookies",
    body: (
      <p>
        Essential cookies are required for the website to function
        properly. They support important features such as your shopping
        cart, secure checkout, account login, authentication, fraud
        prevention, and session management. These cookies cannot be
        disabled through our cookie settings because the website may not
        function correctly without them.
      </p>
    ),
  },
  {
    number: "03",
    title: "Functional cookies",
    body: (
      <p>
        Functional cookies remember choices you make while shopping,
        such as your preferred language, location, recently viewed
        products, and other preferences. They help us provide a more
        personalized experience when you return to SIMCO CART.
      </p>
    ),
  },
  {
    number: "04",
    title: "Analytics and performance cookies",
    body: (
      <p>
        Analytics cookies help us understand how customers use our
        website. We may use this information to understand which pages
        are visited most often, identify errors, measure website
        performance, and improve our products and services. These
        cookies generally collect information in an aggregated or
        pseudonymous form.
      </p>
    ),
  },
  {
    number: "05",
    title: "Advertising and marketing cookies",
    body: (
      <p>
        Marketing cookies may be used to understand your interests and
        provide more relevant advertisements, promotions, and product
        recommendations. These cookies may also help us measure the
        effectiveness of advertising campaigns across our website and
        other platforms.
      </p>
    ),
  },
  {
    number: "06",
    title: "Shopping cart and checkout cookies",
    body: (
      <p>
        Some cookies are specifically used to support your shopping
        journey. They may remember products added to your cart, maintain
        your checkout session, help prevent duplicate transactions, and
        keep your account securely signed in while you browse and place
        orders.
      </p>
    ),
  },
  {
    number: "07",
    title: "Third-party cookies",
    body: (
      <p>
        Some services used by SIMCO CART may place cookies or similar
        technologies on your device. These may include payment providers,
        analytics services, advertising platforms, fraud-prevention
        services, customer-support tools, and social-media services.
        These third parties are responsible for their own privacy and
        cookie practices.
      </p>
    ),
  },
  {
    number: "08",
    title: "Managing your cookie preferences",
    body: (
      <>
        <p>
          You can control optional cookies through the cookie preferences
          available on SIMCO CART. You may choose to allow or disable
          categories such as functional, analytics, and marketing
          cookies.
        </p>

        <p>
          You can also control cookies through your web browser settings.
          Please note that blocking or deleting certain cookies may
          affect features such as your shopping cart, account login,
          checkout, and personalized shopping experience.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "How long cookies are stored",
    body: (
      <p>
        Some cookies are temporary and are deleted when you close your
        browser. Others remain on your device for a longer period so
        that we can remember your preferences when you return to
        SIMCO CART. The duration depends on the purpose of the cookie
        and the service that places it.
      </p>
    ),
  },
  {
    number: "10",
    title: "Updates to these cookie settings",
    body: (
      <p>
        We may update these Cookie Settings from time to time to reflect
        changes to our website, services, technology, or legal
        requirements. When we make significant changes, we will update
        the date shown on this page.
      </p>
    ),
  },
];

const CookiesSection: React.FC = () => {
  return (
    <section className="legal-content">
      <div className="legal-content__inner">
        <p className="legal-content__updated">
          Last updated: August 2026
        </p>

        {sections.map((s) => (
          <div className="legal-block" key={s.number}>
            <div className="legal-block__head">
              <span className="legal-block__num">{s.number}</span>

              <h2>{s.title}</h2>
            </div>

            <div className="legal-block__body">
              {s.body}
            </div>
          </div>
        ))}

        <div className="legal-contact">
          <div
            className="legal-contact__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <h2>11. Contact us</h2>

            <p>
              If you have questions about our use of cookies or want
              help managing your cookie preferences, you can contact
              our support team at{" "}
              <a href="mailto:support@simcocart.com">
                support@simcocart.com
              </a>{" "}
              or{" "}
              <a href="tel:+917969328400">
                +91 7969328400
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesSection;