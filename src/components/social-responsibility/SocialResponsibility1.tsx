const programs = [
  {
    title: "Seller upliftment fund",
    copy: "Interest-free working-capital loans and onboarding support for first-time sellers from smaller towns and rural clusters.",
    color: "var(--color-1)",
  },
  {
    title: "Skilling & literacy drives",
    copy: "Weekend digital-literacy workshops run with local NGOs, helping artisans list, price and ship their own products.",
    color: "var(--color-2)",
  },
  {
    title: "Disaster relief logistics",
    copy: "Free warehousing and last-mile delivery for relief supplies whenever a partner state declares a natural-disaster emergency.",
    color: "var(--color-4)",
  },
];

const SocialResponsibility1 = () => {
  return (
    <section className="sr-section">
      <div className="sr-section-head">
        <h2 className="sr-section-title">Community impact</h2>
        <p className="sr-section-copy">
          We built SimcoCart on top of thousands of small sellers. Supporting
          the neighbourhoods they trade from is part of the same job.
        </p>
      </div>

      <div className="sr-card-grid">
        {programs.map((program) => (
          <article key={program.title} className="sr-card">
            <span
              className="sr-card-marker"
              style={{ background: program.color }}
            />
            <h3 className="sr-card-title">{program.title}</h3>
            <p className="sr-card-copy">{program.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SocialResponsibility1;