import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";


const stats = [
  { value: "10K+", label: "Affiliates earning now" },
  { value: "Up to 12%", label: "Commission per sale" },
  { value: "24 hrs", label: "Cookie window" },
];

export default function FinalCta() {
  return (
    <section className="final-cta">
      <Container>
        <div className="cta-inner text-center">
          <span className="cta-badge">
            <span className="dot" />
            Applications open — approved within 48 hrs
          </span>
          <h2>
            Your audience is already shopping.
            <br />
            Start earning from it today.
          </h2>
          <p>
            No fees, no inventory, no minimum followers. Just a link and a
            cut of every sale it brings in.
          </p>
          <div className="btns">
            <a href="#" className="btn-solid">
              Join the Program — It&apos;s Free <FaArrowRight size={13} />
            </a>
          </div>
          <div className="cta-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}