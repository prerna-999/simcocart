// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// interface Category {
//   id: number;
//   title: string;
//   image: string;
// }

// const categories: Category[] = [
//   { id: 1, title: "Men Clothing", image: "/assets/img/all-images/home/categories.avif" },
//   { id: 2, title: "Women Clothing", image: "/assets/img/all-images/home/categories1.avif" },
//   { id: 3, title: "Electronics", image: "/assets/img/all-images/home/categories2.avif" },
//   { id: 4, title: "Toys & Stationery", image: "/assets/img/all-images/home/categories3.avif" },
//   { id: 5, title: "Footwear", image: "/assets/img/all-images/home/categories.avif" },
//   { id: 6, title: "Beauty Wellness", image: "/assets/img/all-images/home/categories1.avif" },
//    { id: 7, title: "Electronics", image: "/assets/img/all-images/home/categories2.avif" },
//   { id: 8, title: "Toys & Stationery", image: "/assets/img/all-images/home/categories3.avif" },
//   { id: 9, title: "Footwear", image: "/assets/img/all-images/home/categories.avif" },
//   { id: 10, title: "Beauty Wellness", image: "/assets/img/all-images/home/categories1.avif" },
// ];

// const Categories: React.FC = () => {
//   const trackRef = useRef<HTMLDivElement>(null);

//   const scrollByCard = (direction: "left" | "right") => {
//     const track = trackRef.current;
//     if (!track) return;

//     const card = track.querySelector<HTMLDivElement>(".shop-cat-card");
//     if (!card) return;

//     const cardWidth = card.getBoundingClientRect().width;
//     const gap = parseFloat(getComputedStyle(track).columnGap || "0");
//     const scrollAmount = cardWidth + gap;

//     track.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="shop-cat-section">
//       <Container fluid className="shop-cat-container">
//         <Row className="shop-cat-header align-items-center">
//           <Col xs={6}>
//             <h2 className="shop-cat-title">Shop by Categories</h2>
//           </Col>
//           <Col xs={6} className="shop-cat-nav-col">
//             <button
//               type="button"
//               className="shop-cat-nav-btn"
//               aria-label="Scroll left"
//               onClick={() => scrollByCard("left")}
//             >
//               <FaChevronLeft />
//             </button>
//             <button
//               type="button"
//               className="shop-cat-nav-btn"
//               aria-label="Scroll right"
//               onClick={() => scrollByCard("right")}
//             >
//               <FaChevronRight />
//             </button>
//           </Col>
//         </Row>

//         <div className="shop-cat-track" ref={trackRef}>
//           {categories.map((cat) => (
//             <div className="shop-cat-card" key={cat.id}>
//               <p className="shop-cat-card__title">{cat.title}</p>

//               <div className="shop-cat-card__media">
//                 <Image
//                   src={cat.image}
//                   alt={cat.title}
//                   fill
//                   sizes="(max-width: 576px) 45vw, (max-width: 1024px) 22vw, 15vw"
//                   className="shop-cat-card__img"
//                 />
//               </div>

//               <button type="button" className="shop-now-btn">
//                 <span>Shop Now</span>
//                 <FaChevronRight className="shop-now-btn__icon" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Categories;

"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Category {
  id: number;
  title: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, title: "Men Clothing", image: "/assets/img/all-images/home/categories.avif" },
  { id: 2, title: "Women Clothing", image: "/assets/img/all-images/home/categories1.avif" },
  { id: 3, title: "Electronics", image: "/assets/img/all-images/home/categories2.avif" },
  { id: 4, title: "Toys & Stationery", image: "/assets/img/all-images/home/categories3.avif" },
  { id: 5, title: "Footwear", image: "/assets/img/all-images/home/categories.avif" },
  { id: 6, title: "Beauty Wellness", image: "/assets/img/all-images/home/categories1.avif" },
  { id: 7, title: "Electronics", image: "/assets/img/all-images/home/categories2.avif" },
  { id: 8, title: "Toys & Stationery", image: "/assets/img/all-images/home/categories3.avif" },
  { id: 9, title: "Footwear", image: "/assets/img/all-images/home/categories.avif" },
  { id: 10, title: "Beauty Wellness", image: "/assets/img/all-images/home/categories1.avif" },
];

const Categories: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const updateArrowState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;

    // small tolerance for sub-pixel rounding
    const atStart = scrollLeft <= 1;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    setIsPrevDisabled(atStart);
    setIsNextDisabled(atEnd);
  }, []);

  useEffect(() => {
    updateArrowState();

    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);

    return () => {
      track.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, [updateArrowState]);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLDivElement>(".shop-cat-card");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    const scrollAmount = cardWidth + gap;

    track.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="shop-cat-section">
      <Container>
        <Row className="shop-cat-header align-items-center">
          <Col xs={8}>
            <h2 className="shop-cat-title">Shop by Categories</h2>
          </Col>
          <Col xs={4} className="shop-cat-nav-col">
            <button
              type="button"
              className="shop-cat-nav-btn"
              aria-label="Scroll left"
              onClick={() => scrollByCard("left")}
              disabled={isPrevDisabled}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="shop-cat-nav-btn"
              aria-label="Scroll right"
              onClick={() => scrollByCard("right")}
              disabled={isNextDisabled}
            >
              <FaChevronRight />
            </button>
          </Col>
        </Row>

        <div className="shop-cat-track" ref={trackRef}>
          {categories.map((cat) => (
            <div className="shop-cat-card" key={cat.id}>
              <p className="shop-cat-card__title">{cat.title}</p>

              <div className="shop-cat-card__media">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 576px) 45vw, (max-width: 1024px) 22vw, 15vw"
                  className="shop-cat-card__img"
                />
              </div>

              <button type="button" className="shop-now-btn">
                <span>Shop Now</span>
                <FaChevronRight className="shop-now-btn__icon" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
