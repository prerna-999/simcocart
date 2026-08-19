import React from "react";

interface Section {
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    number: "01",
    title: "Order processing time",
    body: (
      <p>
        Orders are processed within 1–2 business days of confirmation, Monday
        through Saturday, excluding public holidays. You'll get an email and
        SMS the moment your order ships, along with a tracking link. Orders
        placed after 4 PM are processed the next business day.
      </p>
    ),
  },
  {
    number: "02",
    title: "Shipping methods & rates",
    body: (
      <ul>
        <li>Standard shipping — 4–7 business days, free on orders over ₹999</li>
        <li>Standard shipping — 4–7 business days, ₹79 on orders under ₹999</li>
        <li>Express shipping — 1–3 business days, ₹199 flat rate</li>
        <li>Store pickup — ready within 24 hours at select locations, free</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Delivery timelines",
    body: (
      <p>
        Estimated delivery windows are shown at checkout based on your
        pincode and are calculated from the day your order ships, not the
        day it's placed. Metro cities typically see faster delivery than
        remote or rural pincodes. Timelines are estimates and not guaranteed,
        especially during sale periods or extreme weather.
      </p>
    ),
  },
  {
    number: "04",
    title: "Order tracking",
    body: (
      <p>
        Once your order ships, you can track it anytime from the Orders
        section of your account or through the tracking link sent to your
        email and phone. Tracking updates may take up to 24 hours to appear
        after the courier picks up your package.
      </p>
    ),
  },
  {
    number: "05",
    title: "International shipping",
    body: (
      <p>
        We currently ship to select countries outside India; available
        destinations are shown at checkout. International orders may be
        subject to customs duties, import taxes, and clearance delays, which
        are the responsibility of the recipient and are not included in the
        shipping cost you pay at checkout.
      </p>
    ),
  },
  {
    number: "06",
    title: "Shipping delays",
    body: (
      <ul>
        <li>Public holidays and peak sale periods</li>
        <li>Severe weather or natural events affecting a region</li>
        <li>Incomplete or incorrect delivery addresses</li>
        <li>Customs processing, for international orders</li>
        <li>Courier network disruptions outside our control</li>
      </ul>
    ),
  },
  {
    number: "07",
    title: "Address accuracy",
    body: (
      <p>
        Please double-check your shipping address, pincode, and phone number
        before placing an order. We aren't able to redirect a package once
        it's shipped, and orders returned to us due to an incorrect address
        may be subject to re-shipping charges.
      </p>
    ),
  },
  {
    number: "08",
    title: "Lost or damaged in transit",
    body: (
      <p>
        If your package is lost or arrives visibly damaged, contact us
        within 48 hours of the expected or actual delivery date with your
        order ID and photos, if available. We'll work with the courier to
        investigate and arrange a replacement or full refund once confirmed.
      </p>
    ),
  },
  {
    number: "09",
    title: "Changes to this policy",
    body: (
      <p>
        We may update our shipping rates and delivery timelines from time to
        time to reflect changes in courier partnerships or operating costs.
        The current version will always be posted here with a new effective
        date.
      </p>
    ),
  },
];

const ShippingSection: React.FC = () => {
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

export default ShippingSection;