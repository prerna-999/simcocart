"use client";

import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";

export interface Category {
  id: number;
  title: string;
  src: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Men Clothing",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 2,
    title: "Women Clothing",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 3,
    title: "Electronics",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 4,
    title: "Toys & Stationery",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 5,
    title: "Footwear",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 6,
    title: "Beauty Wellness & More",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 7,
    title: "Toys & Stationery",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 8,
    title: "Footwear",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 9,
    title: "Toys & Stationery",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
  {
    id: 10,
    title: "Footwear",
    src: "/assets/img/all-images/home/categories1.jpg",
  },
];

const Categories: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const track = trackRef.current;

    if (!track) return;

    const firstSlide =
      track.querySelector<HTMLDivElement>(".carouselSlide");

    const slideWidth = firstSlide
      ? firstSlide.offsetWidth
      : track.clientWidth;

    track.scrollBy({
      left: direction === "next" ? slideWidth : -slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <Container className="categoriesSection">
      {/* Header */}
      <div className="categoriesHeader">
        <h2 className="categoriesTitle">
          Shop by Categories
        </h2>

        <div className="arrowGroup">
          <button
            type="button"
            className="arrowBtn"
            aria-label="Previous"
            onClick={() => scrollByAmount("prev")}
          >
            <FiChevronLeft size={18} />
          </button>

          <button
            type="button"
            className="arrowBtn"
            aria-label="Next"
            onClick={() => scrollByAmount("next")}
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="carouselViewport"
        ref={trackRef}
      >
        {categories.map((category) => (
          <div
            className="carouselSlide"
            key={category.id}
          >
            <div className="categoryCard">

              {/* Background Image */}
              <Image
                src={category.src}
                alt={category.title}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 991px) 50vw, 25vw"
                className="categoryImage"
              />

              {/* Overlay Content */}
              <div className="categoryOverlay">

                {/* Category Title */}
                <h3 className="categoryCardTitle">
                  {category.title}
                </h3>

                {/* Shop Button */}
                <button
                  type="button"
                  className="shopBtn"
                >
                  Shop Now

                  <span className="shopBtnArrow">
                    <FiArrowRight size={15} />
                  </span>
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;