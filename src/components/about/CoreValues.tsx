import React from "react";
import { Container, Row, Col } from "react-bootstrap";


interface ValueRow {
    image: string;
    alt: string;
    title: string;
    description: string;
    color: string;
    imageFirst: boolean;
}

const values: ValueRow[] = [
    {
        image:
            "https://tiimg.tistatic.com/new_website1/design2022/ti-about/trust.jpg",
        alt: "Trust and Transparency",
        title: "Trust and Transparency",
        description:
            "At the heart of our organization, trust and transparency stand as unwavering core values. Trust is the foundation upon which all our relationships, both internal and external, are built. It's the bedrock of our commitment to integrity and accountability, as we believe that trust is not given but earned through consistent actions and open communication.",
        color: "var(--primary-color)",
        imageFirst: true,
    },
    {
        image:
            "https://tiimg.tistatic.com/new_website1/design2022/ti-about/constant-learning.jpg",
        alt: "Constant Learning",
        title: "Constant Learning",
        description:
            "We understand that in a rapidly evolving world, stagnation is not an option. We embrace the spirit of continuous improvement, encouraging every member of our team to seek knowledge, acquire new skills, and adapt to emerging trends and technologies. We view challenges as opportunities for growth and change as a chance to evolve and excel.",
        color: "var(--color-1)",
        imageFirst: false,
    },
    {
        image:
            "https://tiimg.tistatic.com/new_website1/design2022/ti-about/ownership.jpg",
        alt: "Ownership",
        title: "Ownership",
        description:
            "Taking ownership is a fundamental core value that defines the essence of our organization. We believe that success is a product of personal responsibility and accountability. We encourage every member of our team to embrace challenges as opportunities to take ownership of their work, decisions, and outcomes.",
        color: "var(--color-2)",
        imageFirst: true,
    },
    {
        image:
            "https://tiimg.tistatic.com/new_website1/design2022/ti-about/drive-deliver.jpg",
        alt: "Drive and Deliver",
        title: "Drive and Deliver",
        description:
            "We believe that having the determination to push boundaries and the dedication to turn ambitions into reality are vital components of success. Every member of our team is driven by a relentless pursuit of our goals, fueled by a passion for innovation and a sense of purpose.",
        color: "var(--color-4)",
        imageFirst: false,
    },
    {
        image:
            "https://tiimg.tistatic.com/new_website1/design2022/ti-about/one-ti.jpg",
        alt: "One TI",
        title: "One 'TI'",
        description:
            "A cohesive culture, uniting us under the banner of \"One TI,\" is the heartbeat of our organization. We recognize that our strength lies not just in individual talents but in our collective spirit and shared values. We foster an environment where every member feels a sense of belonging and ownership, working collaboratively towards our common mission.",
        color: "var(--color-3)",
        imageFirst: true,
    },
];

const CoreValues: React.FC = () => {
    return (
        <section className="corevalues-section">
            <Container>
                <div className="corevalues-margin">
                    <Row>
                        <Col xs={12}>
                            <h2 className="corevalues-heading">Our Core Values</h2>
                        </Col>
                    </Row>

                    <div className="corevalues-list">
                        {values.map((item, idx) => (
                            <Row
                                key={idx}
                                className={`corevalues-item-row ${item.imageFirst ? "" : "corevalues-item-row-reverse"
                                    }`}
                            >
                                <Col
                                    lg={6}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    className={`corevalues-img-col ${item.imageFirst ? "order-lg-1" : "order-lg-2"
                                        }`}
                                >
                                    <div className="corevalues-image-wrap">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="corevalues-image"
                                        />
                                    </div>
                                </Col>

                                <Col
                                    lg={6}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    className={`corevalues-text-col ${item.imageFirst ? "order-lg-2" : "order-lg-1"
                                        }`}
                                >
                                    <div className="corevalues-text-card">
                                        <span
                                            className="corevalues-text-title"
                                            style={{ color: item.color }}
                                        >
                                            {item.title}
                                        </span>
                                        <p className="corevalues-text-desc">{item.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CoreValues;