import { Container, Row, Col } from "react-bootstrap";
import { FaLink, FaPuzzlePiece, FaImage, FaChartLine } from "react-icons/fa";


const tools = [
  {
    icon: <FaLink size={20} />,
    color: "var(--color-4)",
    title: "Link generator",
    desc: "Paste any SimcoCart URL and get a trackable affiliate link back instantly.",
  },
  {
    icon: <FaPuzzlePiece size={20} />,
    color: "var(--color-1)",
    title: "Browser extension",
    desc: "Turn links into affiliate links as you browse the store — no dashboard hopping.",
  },
  {
    icon: <FaImage size={20} />,
    color: "var(--color-3)",
    title: "Banners & widgets",
    desc: "Ready-made banners sized for blogs, YouTube descriptions, and stories.",
  },
  {
    icon: <FaChartLine size={20} />,
    color: "var(--color-2)",
    title: "Reporting API",
    desc: "Pull clicks, conversions, and earnings into your own dashboard if you'd rather not use ours.",
  },
];

export default function ToolsSection() {
  return (
    <section className="tools-section">
      <Container>
        <div className="section-head text-center mx-auto">
          <span className="eyebrow">Your toolkit</span>
          <h2 className="section-title">
            Built for creators, not spreadsheets
          </h2>
          <p className="section-sub mx-auto">
            Everything you need to go from a product page to a live tracked
            link in under a minute.
          </p>
        </div>

        <Row className="g-4">
          {tools.map((tool) => (
            <Col xs={12} sm={6} lg={3} key={tool.title}>
              <div className="tool-card h-100">
                <div className="tool-icon" style={{ background: tool.color }}>
                  {tool.icon}
                </div>
                <h4>{tool.title}</h4>
                <p>{tool.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}