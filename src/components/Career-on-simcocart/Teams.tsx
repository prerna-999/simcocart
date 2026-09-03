"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
  FaCogs,
  FaHeadset,
  FaWarehouse,
} from "react-icons/fa";

export interface TeamItem {
  icon: React.ReactNode;
  title: string;
  count: string;
  color: string;
  href?: string;
}

export interface TeamsProps {
  heading?: string;
  description?: string;
  teams?: TeamItem[];
}

const defaultTeams: TeamItem[] = [
  {
    icon: <FaCode />,
    title: "Engineering",
    count: "6 open roles",
    color: "var(--color-4)",
    href: "#roles",
  },
  {
    icon: <FaPalette />,
    title: "Product & Design",
    count: "3 open roles",
    color: "var(--color-1)",
    href: "#roles",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing",
    count: "2 open roles",
    color: "var(--color-3)",
    href: "#roles",
  },
  {
    icon: <FaCogs />,
    title: "Operations",
    count: "4 open roles",
    color: "var(--color-2)",
    href: "#roles",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    count: "2 open roles",
    color: "var(--color-5)",
    href: "#roles",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouse & Logistics",
    count: "1 open role",
    color: "var(--primary-color)",
    href: "#roles",
  },
];

const Teams: React.FC<TeamsProps> = ({
  heading = "Explore our teams",
  description = "Every order, delivery and seller relationship is built by one of these teams.",
  teams = defaultTeams,
}) => {
  return (
    <section className="teams">
      <Container>
        <Row>
          <Col xs={12} md={8} className="teams-head">
            <h2>{heading}</h2>
            <p>{description}</p>
          </Col>
        </Row>

        <Row className="gy-4 gx-3 gx-md-4">
          {teams.map((team) => (
            <Col xs={6} sm={4} lg={2} key={team.title}>
              <div className="team-card">
                <div className="team-icon" style={{ background: team.color }}>
                  {team.icon}
                </div>
                <h4>{team.title}</h4>
                <div className="team-count">{team.count}</div>
                <a href={team.href ?? "#"} className="team-button">
                  View Roles
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;