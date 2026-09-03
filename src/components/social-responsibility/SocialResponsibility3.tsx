const commitments = [
  {
    title: "Verified before going live",
    copy: "Every listed brand agrees to our supplier code of conduct before going live on the marketplace.",
  },
  {
    title: "No underage labor",
    copy: "No warehouse or delivery partner on our network employs workers under 18.",
  },
  {
    title: "Regular wage audits",
    copy: "Fair-wage audits are carried out twice a year across our top fulfilment partners.",
  },
  {
    title: "Zero-tolerance enforcement",
    copy: "Sellers flagged for labor violations are suspended pending an independent review.",
  },
];

const SocialResponsibility3 = () => {
  return (
    <section className="sr-section sr-section-alt sr-section-alt2">
      <div className="sr-section-head">
        <h2 className="sr-section-title">Ethical sourcing & fair labor</h2>
        <p className="sr-section-copy">
          We hold the sellers, factories and delivery partners in our network
          to a written standard, and we check on it.
        </p>
      </div>

      <div className="sr-commit-grid">
        {commitments.map((item) => (
          <div key={item.title} className="sr-commit-card">
            <span className="sr-commit-mark" aria-hidden="true">
              ✓
            </span>
            <div>
              <h3 className="sr-commit-title">{item.title}</h3>
              <p className="sr-commit-copy">{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialResponsibility3;