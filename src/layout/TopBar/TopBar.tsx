"use client";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import {
  FiMapPin,
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const categories = ["All Categories", "Electronics", "Fashion", "Groceries", "Home Essentials"];

const TopHeader = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="top-header-wrapper">
      <Row className="align-items-center top-header-row g-3">
       
        <Col xs={1} className="d-lg-none">
          <button className="hamburger-btn" onClick={() => setShowMobileMenu(true)}>
            <FiMenu />
          </button>
        </Col>

        {/* Logo */}
        <Col xs={7} sm={5} md={7} lg={2}>
          <Link href="/" className="logo-link">
            <Image
              src="/assets/img/logo/logo.png"
              alt="IMCOCART"
              width={180}
              height={40}
              priority
            />
          </Link>
        </Col>

      
        <Col lg={2} className="d-none d-lg-block location-col">
          <div className="location-box">
            <FiMapPin className="location-icon" />
            <div className="location-text">
              <span className="delivering-to">Delivering to Chandigarh</span>
              <strong className="update-location">Update location</strong>
            </div>
          </div>
        </Col>

        <Col lg={4} className="d-none d-lg-block search-col">
          <div className="search-box">
            <div className="category-select" onClick={() => setShowCategory(!showCategory)}>
              <span>{selectedCategory}</span>
              <FiChevronDown className="category-arrow" />
              {showCategory && (
                <ul className="category-dropdown">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategory(false);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <span className="divider" />
            <form
              action=""
              className="search-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search for items...."
                className="search-input"
              />
              <button className="search-btn" type="submit">
                <FiSearch />
              </button>
            </form>
          </div>
        </Col>

       
        <Col xs={4} sm={4} md={4} lg={4} className="right-icons icons-col">
          <Link href="/become-seller" className="icon-item">
            <FiShoppingBag className="icon" />
            <span className="d-none d-lg-inline">Become a Seller</span>
          </Link>
          <Link href="/wishlist" className="icon-item">
            <FiHeart className="icon" />
            <span className="d-none d-lg-inline">Wishlist</span>
          </Link>
          <Link href="/cart" className="icon-item">
            <FiShoppingCart className="icon" />
            <span className="d-none d-lg-inline">Cart</span>
          </Link>
          <Link href="/profile/" className="icon-item d-none d-lg-flex">
            <FiUser className="icon" />
            <span>Login</span>
          </Link>
        </Col>
      </Row>

      <MobileMenu show={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </div>
  );
};

export default TopHeader;
