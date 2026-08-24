"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  feedback: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Rohit Malhotra",
    role: "Men's Clothing Seller",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    feedback:
      "Simcocart pe list karne ke 3 din baad hi first order aa gaya. Zero commission first 90 days ne bahut help ki scale karne mein.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Home & Kitchen Seller",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    feedback:
      "Payment settlement sirf 48 hours mein hota hai, ye sabse best part hai. Pehle jo platform use karti thi usme hafta lag jaata tha.",
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Electronics Seller",
    avatar: "https://i.pravatar.cc/150?img=51",
    rating: 4,
    feedback:
      "Support team genuinely responsive hai. Onboarding ke time har query 24 hours ke andar solve hui. Highly recommend Growth plan.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Beauty & Wellness Seller",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    feedback:
      "50+ cities tak reach mila without any extra marketing spend. Dashboard bhi simple hai, catalogue upload karna easy tha.",
  },
  {
    id: 5,
    name: "Karan Singh",
    role: "Footwear Seller",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 5,
    feedback:
      "Category-flat fees with no hidden deductions — exactly wahi mila jo promise kiya gaya tha. Trust build hota hai isse.",
  },
  {
    id: 6,
    name: "Simran Kaur",
    role: "Groceries Seller",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    feedback:
      "Registration free thi aur listing process bahut smooth. Ab har mahine consistent orders aa rahe hain without much effort.",
  },
];

const AUTOPLAY_DELAY = 2000;

const SellTestimonials = () => {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonialsData.length;

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1);
      } else if (width < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [itemsPerView]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = (index: number) => setActiveIndex(index);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      goNext();
    }, AUTOPLAY_DELAY);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  const visibleTestimonials = Array.from({ length: itemsPerView }).map(
    (_, i) => testimonialsData[(activeIndex + i) % total]
  );

  const colSize = 12 / itemsPerView;

  return (
    <section
      className="testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7} md={9}>
            <span className="testimonials-tag">Testimonials</span>
            <h2 className="testimonials-heading">Sellers love selling here</h2>
            <p className="testimonials-subtext">
              Don&apos;t just take our word for it — here&apos;s what real
              sellers say about growing their business on Simcocart.
            </p>
          </Col>
        </Row>

        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-arrows-mobile">
            <button
              className="testimonial-arrow testimonial-arrow-left"
              onClick={goPrev}
              aria-label="Previous testimonial"
              type="button"
            >
              <FaChevronLeft />
            </button>

            <button
              className="testimonial-arrow testimonial-arrow-right"
              onClick={goNext}
              aria-label="Next testimonial"
              type="button"
            >
              <FaChevronRight />
            </button>
          </div>

          <button
            className="testimonial-arrow testimonial-arrow-left testimonial-arrow-desktop"
            onClick={goPrev}
            aria-label="Previous testimonial"
            type="button"
          >
            <FaChevronLeft />
          </button>

          <Row className="g-4 testimonial-cards-row">
            {visibleTestimonials.map((item) => (
              <Col lg={colSize} md={colSize} xs={12} key={item.id}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="testimonial-quote-icon" />

                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < item.rating ? (
                        <FaStar key={i} className="star-filled" />
                      ) : (
                        <FaRegStar key={i} className="star-empty" />
                      )
                    )}
                  </div>

                  <p className="testimonial-feedback">{item.feedback}</p>

                  <div className="testimonial-profile">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-profile-info">
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <button
            className="testimonial-arrow testimonial-arrow-right testimonial-arrow-desktop"
            onClick={goNext}
            aria-label="Next testimonial"
            type="button"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonialsData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`testimonial-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SellTestimonials;