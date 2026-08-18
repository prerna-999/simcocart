"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTimes, FaStore, FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

interface MobileMenuProps {
  show: boolean;
  onClose: () => void;
}


const categories = [
  { name: "Electronics", link: "/category/electronics" },
  { name: "Fashion", link: "/category/fashion" },
  { name: "Groceries", link: "/category/groceries" },
  { name: "Home Essentials", link: "/category/home-essentials" },
];

const MobileMenu = ({ show, onClose }: MobileMenuProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  if (!show) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
    onClose();
  };

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

      
        <form className="mobile-menu-search" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for items...."
            className="mobile-search-input"
          />
          <button type="submit" className="mobile-search-btn">
            <FaSearch />
          </button>
        </form>

        <div className="mobile-menu-categories">
          <span className="categories-title">Categories</span>
          <ul>
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link href={cat.link} onClick={onClose}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mobile-menu-list">
          <li>
            <Link href="/login" onClick={onClose}>
              <FaUser className="me-2" /> Login
            </Link>
          </li>
          <li>
            <Link href="/become-seller" onClick={onClose}>
              <FaStore className="me-2" /> Become a Seller
            </Link>
          </li>
          <li>
            <Link href="/wishlist" onClick={onClose}>
              <FaHeart className="me-2" /> Wishlist
            </Link>
          </li>
          <li>
            <Link href="/cart" onClick={onClose}>
              <FaShoppingCart className="me-2" /> Cart
            </Link>
          </li>
        </ul>


      </div>
    </div>
  );
};

export default MobileMenu;