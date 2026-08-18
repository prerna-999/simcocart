"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";


interface MissionVisionParagraph {
    id: number;
    text: string;
}

interface MissionVisionContent {
    heading: string;
    subheading: string;
    paragraphs: MissionVisionParagraph[];
    image: {
        src: string;
        alt: string;
    };
}

const missionVisionData: MissionVisionContent = {
    heading: "Our Mission and Vision",
    subheading: "Let’s enable 63 million+ SMEs to go digital",
    paragraphs: [
        {
            id: 1,
            text: "With technology and innovation as enablers, we endeavour to help our users reinvent businesses to compete and win, with digitization at the core. We also pride ourselves to be the only marketplace offering 360° digital marketing solutions to MSMEs to help them be tech-enabled.",
        },
        {
            id: 2,
            text: "With a robust pan-India as well as a global presence in 10+ countries, we also assist global buyers to locate Indian suppliers, manufacturers, and exporters.With a robust pan-India as well as a global presence in 10+ countries, we also assist global buyers to locate Indian suppliers, manufacturers, and exporters.",
        },
    ],
    image: {
        src: "/assets/img/all-images/about/mission-vission.jpg",
        alt: "Corporate office building representing our mission and vision",
    },
};

const MissionVision: React.FC = () => {
    const { heading, subheading, paragraphs, image } = missionVisionData;

    return (
        <section className="missionSection">
            <Container>
                <Row className="align-items-center gy-4">

                    <Col xs={12} md={12} lg={6} xl={6} className="imageCol">
                        <div className="imageWrapper">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={430}
                                className="missionImage"
                                priority
                            />
                        </div>
                    </Col>


                    <Col xs={12} md={12} lg={6} xl={6} className="textCol">
                        <h2 className="missionHeading">{heading}</h2>
                        <h3 className="missionSubheading">{subheading}</h3>

                        {paragraphs.map((para, index) => (
                            <p
                                key={para.id}
                                className={`missionParagraph ${index === paragraphs.length - 1 ? "lastParagraph" : ""
                                    }`}
                            >
                                {para.text}
                            </p>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MissionVision;