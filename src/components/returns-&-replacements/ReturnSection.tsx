import React from "react";

interface Section {
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    number: "01",
    title: "What you can request",
    body: (
      <p>
        If an item doesn't work out, you can request either a return
        (refund to your original payment method) or a replacement
        (same item, different size, color, or a straight swap for a
        defective piece) — whichever suits you. Both follow the same
        pickup process below.
      </p>
    ),
  },
  {
    number: "02",
    title: "Eligibility window",
    body: (
      <ul>
        <li>Standard items — request a return or replacement within 14 days of delivery</li>
        <li>Damaged or defective items — request within 48 hours of delivery</li>
        <li>Wrong item received — request within 48 hours of delivery</li>
        <li>Item must be unused, unwashed, and in original packaging with tags attached</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Requesting a replacement",
    body: (
      <>
        <p>Replacements for size, color, or a defective item are handled in one flow:</p>
        <ul>
          <li>Open the order in your account and select "Request replacement"</li>
          <li>Pick the reason and, if applicable, the new size or color</li>
          <li>Schedule a free pickup for the original item</li>
          <li>Your replacement ships once the original item is picked up</li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "When we offer a refund instead",
    body: (
      <p>
        If the size, color, or item you want for a replacement is out of
        stock, we'll offer a full refund to your original payment method
        instead. You'll always be asked to confirm before we process a
        refund in place of a replacement.
      </p>
    ),
  },
  {
    number: "05",
    title: "Pickup & packaging",
    body: (
      <ul>
        <li>Pickups are free for defective, damaged, or wrongly shipped items</li>
        <li>Pack the item in its original box or a similar protective packaging</li>
        <li>Keep the original invoice or order slip inside the package if you have it</li>
        <li>Our pickup partner will contact you to confirm a pickup slot</li>
      </ul>
    ),
  },
  {
    number: "06",
    title: "Replacement timelines",
    body: (
      <p>
        Once the original item is picked up, replacements are dispatched
        within 2–3 business days, subject to stock availability. Delivery
        then follows the same timeline as a regular order for your
        pincode, which you can track from the Orders section of your
        account.
      </p>
    ),
  },
  {
    number: "07",
    title: "Items not eligible for replacement",
    body: (
      <ul>
        <li>Innerwear, swimwear, and other personal-care items, for hygiene reasons</li>
        <li>Items marked final sale or clearance at checkout</li>
        <li>Customized or made-to-order products</li>
        <li>Items without original tags or packaging</li>
        <li>Requests made after the eligibility window has closed</li>
      </ul>
    ),
  },
  {
    number: "08",
    title: "Tracking your request",
    body: (
      <p>
        You can check the status of any return or replacement — pickup
        scheduled, item received, replacement dispatched — from the Orders
        section of your account at any time. We'll also send updates by
        email and SMS at each step.
      </p>
    ),
  },
  {
    number: "09",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Returns and Replacements policy from time to
        time to reflect changes in our process. The current version will
        always be posted here with a new effective date.
      </p>
    ),
  },
];

const ReturnSection: React.FC = () => {
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

export default ReturnSection;