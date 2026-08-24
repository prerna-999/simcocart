"use client";

import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const navItems = [
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Mobiles", href: "/mobiles" },
  { label: "Customer Service", href: "/customer-service" },
  { label: "Electronics", href: "/electronics" },
  { label: "Fashion", href: "/fashion" },
  { label: "Groceries", href: "/groceries" },
  { label: "Home Essentials", href: "/home-essentials" },
  { label: "New Releases", href: "/new-releases" },
  { label: "Home & Kitchen", href: "/home-kitchen" },
  { label: "Computers", href: "/computers" },
  { label: "Gift Ideas", href: "/gift-ideas" },
  { label: "Books", href: "/books" },
  { label: "Beauty & Personal Care", href: "/beauty-personal-care" },
];

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

type MenuSection = {
  title: string;
  items: MenuItem[];
 
  visibleCount?: number;
};

const menuSections: MenuSection[] = [
  {
    title: "Trending",
    items: [
      { label: "Bestsellers", href: "/best-sellers" },
      { label: "New Releases", href: "/new-releases" },
    ],
  },
  {
    title: "Digital Content and Devices",
    items: [
      {
        label: "eReaders & Devices",
        children: [
          { label: "All eReaders", href: "/ereaders" },
          { label: "Reading Tablets", href: "/ereaders/tablets" },
          { label: "Accessories", href: "/ereaders/accessories" },
        ],
      },
      {
        label: "eBooks",
        children: [
          { label: "All eBooks", href: "/ebooks" },
          { label: "Fiction eBooks", href: "/ebooks/fiction" },
          { label: "Non-Fiction eBooks", href: "/ebooks/non-fiction" },
        ],
      },
      {
        label: "Audiobooks",
        children: [
          { label: "All Audiobooks", href: "/audiobooks" },
          { label: "Bestselling Audiobooks", href: "/audiobooks/bestsellers" },
        ],
      },
      {
        label: "Book Subscriptions",
        children: [
          { label: "Unlimited Reading Plan", href: "/subscriptions/unlimited" },
          { label: "Monthly Book Box", href: "/subscriptions/book-box" },
        ],
      },
      {
        label: "Gift Cards",
        children: [
          { label: "All Gift Cards", href: "/gift-cards" },
          { label: "eGift Cards", href: "/gift-cards/e-gift" },
        ],
      },
    ],
  },
  {
    title: "Shop by Category",
    visibleCount: 4,
    items: [
      {
        label: "Fiction",
        children: [
          { label: "All Fiction", href: "/books/fiction" },
          { label: "Mystery & Thriller", href: "/books/fiction/mystery-thriller" },
          { label: "Romance", href: "/books/fiction/romance" },
          { label: "Fantasy & Sci-Fi", href: "/books/fiction/fantasy-scifi" },
          { label: "Literary Fiction", href: "/books/fiction/literary" },
        ],
      },
      {
        label: "Non-Fiction",
        children: [
          { label: "All Non-Fiction", href: "/books/non-fiction" },
          { label: "Biography & Memoir", href: "/books/non-fiction/biography" },
          { label: "History", href: "/books/non-fiction/history" },
          { label: "Self-Help", href: "/books/non-fiction/self-help" },
        ],
      },
      {
        label: "Children's Books",
        children: [
          { label: "All Children's Books", href: "/books/children" },
          { label: "Picture Books", href: "/books/children/picture-books" },
          { label: "Middle Grade", href: "/books/children/middle-grade" },
          { label: "Young Adult", href: "/books/children/young-adult" },
        ],
      },
      {
        label: "Textbooks & Reference",
        children: [
          { label: "All Textbooks", href: "/books/textbooks" },
          { label: "School Textbooks", href: "/books/textbooks/school" },
          { label: "Exam Guides", href: "/books/textbooks/exam-guides" },
        ],
      },
      {
        label: "Comics & Graphic Novels",
        children: [
          { label: "All Comics", href: "/books/comics" },
          { label: "Manga", href: "/books/comics/manga" },
          { label: "Graphic Novels", href: "/books/comics/graphic-novels" },
        ],
      },
      {
        label: "Poetry & Drama",
        children: [
          { label: "All Poetry & Drama", href: "/books/poetry-drama" },
          { label: "Poetry Collections", href: "/books/poetry-drama/poetry" },
          { label: "Plays", href: "/books/poetry-drama/plays" },
        ],
      },
      {
        label: "Regional & Translated",
        children: [
          { label: "Hindi Books", href: "/books/regional/hindi" },
          { label: "Punjabi Books", href: "/books/regional/punjabi" },
          { label: "Translated Classics", href: "/books/regional/translated" },
        ],
      },
      {
        label: "Stationery & Accessories",
        children: [
          { label: "Bookmarks", href: "/accessories/bookmarks" },
          { label: "Journals & Notebooks", href: "/accessories/journals" },
          { label: "Reading Lights", href: "/accessories/reading-lights" },
        ],
      },
    ],
  },
  {
    title: "Programs & Features",
    visibleCount: 4,
    items: [
      { label: "Gift Cards & Book Vouchers", href: "/gift-cards" },
      { label: "UrbanWords Launchpad", href: "/launchpad" },
      { label: "UrbanWords for Business", href: "/business" },
      { label: "Author Spotlight", href: "/author-spotlight" },
      { label: "Local & Indie Publishers", href: "/indie-publishers" },
      { label: "Book Clubs", href: "/book-clubs" },
      { label: "Buy More, Save More", href: "/deals/buy-more-save-more" },
      { label: "Clearance Store", href: "/clearance" },
    ],
  },
  {
    title: "Help & Settings",
    items: [
      { label: "Your Account", href: "/account" },
      { label: "Customer Service", href: "/customer-service" },
      { label: "Sign in", href: "/profile/" },
    ],
  },
];

const HeaderMain = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [panelStack, setPanelStack] = useState<MenuItem[]>([]);

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const openSidebar = () => {
    setPanelStack([]);
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowSidebar(false);
      setIsClosing(false);
      setPanelStack([]);
    }, 300);
  };

  const pushPanel = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      setPanelStack((prev) => [...prev, item]);
    } else {
      closeSidebar();
    }
  };

  const popPanel = () => {
    setPanelStack((prev) => prev.slice(0, -1));
  };

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.5;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const renderItem = (item: MenuItem) => (
    <Row key={item.label} className="sidebar-row m-0 align-items-center">
      <Col xs={11} className="p-0">
        {item.children ? (
          <button className="sidebar-link sidebar-link-btn" onClick={() => pushPanel(item)}>
            {item.label}
          </button>
        ) : (
          <Link href={item.href ?? "#"} className="sidebar-link" onClick={closeSidebar}>
            {item.label}
          </Link>
        )}
      </Col>
      <Col xs={1} className="p-0 text-end">
        {item.children && <span className="chevron">›</span>}
      </Col>
    </Row>
  );

  return (
    <>
      <Row className="top-header m-0">
        <Col xs={1} lg={1} className="hamburger-col d-flex align-items-center">
          <button className="hamburger-btn" onClick={openSidebar} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </Col>

        <Col
          xs={11}
          lg={11}
          className={`nav-scroll-col d-flex align-items-center ${isDragging ? "dragging" : ""}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <Row className="nav-items flex-nowrap m-0">
            {navItems.map((item) => (
              <Col key={item.label} xs="auto" sm="auto" md="auto" lg="auto" className="nav-item-col">
                <Link href={item.href} className="nav-item-text" draggable={false}>
                  {item.label}
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {showSidebar && (
        <div className={`sidebar-overlay ${isClosing ? "closing" : ""}`} onClick={closeSidebar}>
          <div
            className={`sidebar-panel ${isClosing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Row className="sidebar-header m-0 align-items-center">
              <Col xs={2} className="p-0">
                <div className="avatar-icon" />
              </Col>
              <Col xs={8} className="p-0">
                <span className="sidebar-greeting">Hello, sign in</span>
              </Col>
              <Col xs={2} className="p-0 text-end">
                <button className="close-btn" onClick={closeSidebar} aria-label="Close menu">
                  ✕
                </button>
              </Col>
            </Row>

            <div
              className="sidebar-track"
              style={{ transform: `translateX(-${panelStack.length * 100}%)` }}
            >
          
              <div className="sidebar-panel-page">
                <div className="sidebar-body">
                  {menuSections.map((section, idx) => {
                    const isExpanded = !!expandedSections[section.title];
                    const shouldTruncate =
                      section.visibleCount !== undefined &&
                      section.items.length > section.visibleCount;
                    const visibleItems =
                      shouldTruncate && !isExpanded
                        ? section.items.slice(0, section.visibleCount)
                        : section.items;
                    const isLast = idx === menuSections.length - 1;

                    return (
                      <div key={section.title}>
                        <h6 className="sidebar-section-title">{section.title}</h6>
                        {visibleItems.map(renderItem)}
                        {shouldTruncate && (
                          <button
                            className="see-more-btn"
                            onClick={() => toggleSection(section.title)}
                          >
                            {isExpanded ? "see less" : "see all"}
                            <span className={`see-more-arrow ${isExpanded ? "up" : "down"}`}>
                            </span>
                          </button>
                        )}
                        {!isLast && <hr className="sidebar-divider" />}
                      </div>
                    );
                  })}
                </div>
              </div>

            
              {panelStack.map((panelItem, depth) => (
                <div key={panelItem.label + depth} className="sidebar-panel-page">
                  <button className="sidebar-back-btn" onClick={popPanel}>
                    <span className="back-arrow">‹</span> main menu
                  </button>
                  <div className="sidebar-body">
                    <h6 className="sidebar-section-title">{panelItem.label}</h6>
                    {(panelItem.children ?? []).map(renderItem)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMain;
