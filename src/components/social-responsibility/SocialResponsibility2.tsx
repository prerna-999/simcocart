const initiatives = [
  {
    stat: "63%",
    title: "less plastic in every parcel",
    copy: "We've replaced single-use plastic mailers with recycled-paper and compostable packaging across our top shipping lanes, cutting plastic use compared to last year.",
    accent: "color-1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 3v4M17 3v4M4 7h16M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13M10 11v6M14 11v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    stat: "9",
    title: "solar-powered fulfilment centres",
    copy: "Nine of our regional warehouses now run partly on rooftop solar, with two more coming online this year.",
    accent: "color-4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3 5.5 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    stat: "1 tree",
    title: "planted per 20 orders delivered",
    copy: "Through our reforestation partners, every twenty completed deliveries funds a native sapling planted in a partner state.",
    accent: "color-2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3c3 2 5 4.5 5 7.5a5 5 0 0 1-10 0C7 7.5 9 5 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M12 13v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const SocialResponsibility2 = () => {
  return (
    <section className="sr-section sr-section-alt">
      <div className="sr-section-head">
        <h2 className="sr-section-title">Environmental sustainability</h2>
        <p className="sr-section-copy">
          Shipping millions of packages has a footprint. We&apos;re working to
          shrink ours, one lane and one warehouse at a time.
        </p>
      </div>

      <div className="sr-impact-grid">
        {initiatives.map((item) => (
          <div key={item.title} className="sr-impact-card">
            <span className={`sr-impact-icon sr-impact-icon--${item.accent}`}>
              {item.icon}
            </span>
            <p className="sr-impact-badge">{item.stat}</p>
            <h3 className="sr-impact-title">{item.title}</h3>
            <p className="sr-impact-copy">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialResponsibility2;