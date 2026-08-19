import React from "react";

interface Section {
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    number: "01",
    title: "Return eligibility",
    body: (
      <>
        <p>
          We want you to love what you ordered from SIMCO CART. If something
          isn't right, most items can be returned within 14 days of
          delivery, as long as they meet the conditions below.
        </p>
        <ul>
          <li>Item is unused, unwashed, and in its original condition</li>
          <li>Original tags, labels, and packaging are intact</li>
          <li>Return is initiated within 14 days of the delivery date</li>
          <li>Proof of purchase (order ID or invoice) is provided</li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "Items that can't be returned",
    body: (
      <ul>
        <li>Innerwear, swimwear, and other personal-care items, for hygiene reasons</li>
        <li>Final-sale or clearance items marked as non-returnable at checkout</li>
        <li>Customized, personalized, or made-to-order products</li>
        <li>Gift cards and digital vouchers</li>
        <li>Items returned after the 14-day window</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "How to start a return",
    body: (
      <>
        <p>Starting a return only takes a few steps:</p>
        <ul>
          <li>Go to Orders in your account and select the item you want to return</li>
          <li>Choose a reason for the return and confirm your pickup address</li>
          <li>Pack the item securely in its original packaging, if possible</li>
          <li>Hand it over to our pickup partner or drop it at the suggested courier point</li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Refunds",
    body: (
      <>
        <p>
          Once your return reaches our warehouse, our team inspects it
          against the eligibility criteria above. If approved, we process
          your refund to the original payment method used at checkout.
        </p>
        <ul>
          <li>Inspection is usually completed within 2–3 business days of receipt</li>
          <li>Refunds are initiated within 3–5 business days of approval</li>
          <li>It can take an additional 5–7 business days to reflect in your account, depending on your bank</li>
          <li>Cash on Delivery orders are refunded via bank transfer or store credit</li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Exchanges",
    body: (
      <p>
        Need a different size or color instead of a refund? Select "Exchange"
        rather than "Return" when starting the request. Exchanges are
        subject to stock availability — if the item you want isn't in
        stock, we'll offer a refund instead.
      </p>
    ),
  },
  {
    number: "06",
    title: "Damaged, defective, or wrong items",
    body: (
      <>
        <p>
          If you receive an item that's damaged, defective, or not what you
          ordered, let us know within 48 hours of delivery with photos of
          the product and packaging.
        </p>
        <ul>
          <li>We'll arrange a free pickup — no return shipping cost to you</li>
          <li>You can choose a replacement, exchange, or full refund</li>
          <li>Verified cases are resolved on priority, ahead of standard returns</li>
        </ul>
      </>
    ),
  },
  {
    number: "07",
    title: "Return shipping costs",
    body: (
      <p>
        Returns due to change of mind are picked up free of charge in most
        serviceable areas. If pickup isn't available at your pincode, you'll
        need to self-ship the item, and we'll reimburse standard shipping
        costs on approved returns. Damaged, defective, or incorrect items are
        always returned free of charge.
      </p>
    ),
  },
  {
    number: "08",
    title: "Order cancellations",
    body: (
      <p>
        You can cancel an order for free as long as it hasn't been shipped
        yet — just go to Orders and select Cancel. Once an order has shipped,
        it can no longer be cancelled, but you're welcome to return it after
        delivery under our standard return policy.
      </p>
    ),
  },
  {
    number: "09",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Refund and Returns Policy from time to time to
        reflect changes in our process or applicable law. The updated
        version will always be posted here with a new effective date.
      </p>
    ),
  },
];

const RefundSection: React.FC = () => {
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

export default RefundSection;