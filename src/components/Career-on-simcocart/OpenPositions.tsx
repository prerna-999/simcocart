"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";


export interface FilterGroupData {
  label: string;
  options: string[];
  openByDefault?: boolean;
}

export interface RoleItem {
  department: string;
  departmentColor: string;
  jobType: string;
  title: string;
  location: string;
  experience: string;
  applyHref?: string;
}

export interface OpenPositionsProps {
  heading?: string;
  description?: string;
  resultsCount?: string;
  filterGroups?: FilterGroupData[];
  roles?: RoleItem[];
}

const defaultFilterGroups: FilterGroupData[] = [
  {
    label: "Department",
    openByDefault: true,
    options: [
      "Engineering",
      "Product & Design",
      "Marketing",
      "Operations",
      "Customer Support",
      "Warehouse & Logistics",
    ],
  },
  {
    label: "Location",
    openByDefault: true,
    options: ["Chandigarh", "Delhi NCR", "Mumbai", "Remote"],
  },
  {
    label: "Job type",
    options: ["Full-time", "Internship", "Contract"],
  },
];

const defaultRoles: RoleItem[] = [
  {
    department: "Engineering",
    departmentColor: "var(--color-4)",
    jobType: "Full-time",
    title: "Frontend Engineer",
    location: "Chandigarh / Remote",
    experience: "3–5 yrs exp",
    applyHref: "#",
  },
  {
    department: "Engineering",
    departmentColor: "var(--color-4)",
    jobType: "Full-time",
    title: "Backend Engineer — Payments",
    location: "Chandigarh",
    experience: "2–4 yrs exp",
    applyHref: "#",
  },
  {
    department: "Product & Design",
    departmentColor: "var(--color-1)",
    jobType: "Full-time",
    title: "UI/UX Designer",
    location: "Remote",
    experience: "2+ yrs exp",
    applyHref: "#",
  },
  {
    department: "Operations",
    departmentColor: "var(--color-2)",
    jobType: "Full-time",
    title: "Category Manager — Fashion",
    location: "Delhi NCR",
    experience: "4+ yrs exp",
    applyHref: "#",
  },
  {
    department: "Warehouse & Logistics",
    departmentColor: "var(--primary-color)",
    jobType: "Full-time",
    title: "Warehouse Operations Lead",
    location: "Mumbai",
    experience: "3+ yrs exp",
    applyHref: "#",
  },
  {
    department: "Customer Support",
    departmentColor: "var(--color-5)",
    jobType: "Full-time",
    title: "Customer Support Associate",
    location: "Chandigarh",
    experience: "0–2 yrs exp",
    applyHref: "#",
  },
];

const OpenPositions: React.FC<OpenPositionsProps> = ({
  heading = "Open positions",
  description = "18 roles across 6 teams. Filter to find where you fit.",
  resultsCount = "Showing 6 of 18 roles",
  filterGroups = defaultFilterGroups,
  roles = defaultRoles,
}) => {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const openFilters = () => setFiltersOpen(true);
  const closeFilters = () => setFiltersOpen(false);

  return (
    <section className="roles" id="roles">
      <Container>
        <Row>
          <Col xs={12} md={8} className="roles-head">
            <h2>{heading}</h2>
            <p>{description}</p>
          </Col>
        </Row>

        <Row className="roles-layout">
      
          <div
            className={`filters-backdrop ${filtersOpen ? "open" : ""}`}
            onClick={closeFilters}
          />

          <Col
            lg={3}
            className={`filters-panel ${filtersOpen ? "open" : ""}`}
          >
            <div className="filters-panel-head">
              <h4>Filters</h4>
              <button
                className="filter-close-button"
                onClick={closeFilters}
                aria-label="Close filters"
              >
                <FaTimes />
              </button>
            </div>
            <h4 className="filters-title-desktop">Filters</h4>

            {filterGroups.map((group) => (
              <details
                className="filter-group"
                key={group.label}
                open={group.openByDefault}
              >
                <summary>
                  {group.label}
                  <FaChevronDown className="filter-chevron" />
                </summary>
                {group.options.map((option) => (
                  <label key={option}>
                    <input type="checkbox" /> {option}
                  </label>
                ))}
              </details>
            ))}
          </Col>

          <Col lg={9} className="roles-list">
            <div className="roles-list-head">
              <div className="roles-count">{resultsCount}</div>
              <div className="roles-actions">
                <button className="filter-toggle-button" onClick={openFilters}>
                  <FaBars /> Filters
                </button>
                <select className="sort-select" defaultValue="newest">
                  <option value="newest">Sort by: Newest</option>
                  <option value="department">Sort by: Department</option>
                </select>
              </div>
            </div>

            {roles.map((role) => (
              <div className="role-card" key={role.title}>
                <div className="role-info">
                  <span
                    className="role-tag"
                    style={{ background: role.departmentColor }}
                  >
                    {role.department}
                  </span>
                  <span className="role-tag role-tag-dark">
                    {role.jobType}
                  </span>
                  <h4>{role.title}</h4>
                  <div className="role-meta">
                    <span>{role.location}</span>
                    <span>{role.experience}</span>
                  </div>
                </div>
                <a href={role.applyHref ?? "#"} className="pill-button pill-primary">
                  Apply Now
                </a>
              </div>
            ))}

            <div className="roles-load-more">
              <a href="#" className="pill-button pill-outline-dark">
                Load More Roles
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OpenPositions;