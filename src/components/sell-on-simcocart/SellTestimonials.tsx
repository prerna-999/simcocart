import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "react-bootstrap";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonials {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarClass: string;
}

const testimonial: Testimonials[] = [
  {
    id: 1,
    quote:
      "Registration took me one evening and my first order came in three days later. The payout landing in 48 hours makes a real difference for cash flow.",
    name: "Rohit Kapoor",
    role: "Apparel seller, Ludhiana",
    initials: "RK",
    avatarClass: "avatar-1",
  },
  {
    id: 2,
    quote:
      "We moved from a single local store to shipping across three states. The seller dashboard makes stock updates painless.",
    name: "Sunita Mehra",
    role: "Home essentials, Chandigarh",
    initials: "SM",
    avatarClass: "avatar-2",
  },
  {
    id: 3,
    quote:
      "Zero commission for the first three months let us price competitively while we built our first reviews. Support actually picks up the phone.",
    name: "Aman Verma",
    role: "Electronics, Panchkula",
    initials: "AV",
    avatarClass: "avatar-3",
  },
  {
    id: 4,
    quote:
      "Zero commission for the first three months let us price competitively while we built our first reviews. Support actually picks up the phone.",
    name: "Aman Verma",
    role: "Electronics, Panchkula",
    initials: "AV",
    avatarClass: "avatar-3",
  },
  {
    id: 5,
    quote:
      "Zero commission for the first three months let us price competitively while we built our first reviews. Support actually picks up the phone.",
    name: "Aman Verma",
    role: "Electronics, Panchkula",
    initials: "AV",
    avatarClass: "avatar-3",
  },
  {
    id: 6,
    quote:
      "Zero commission for the first three months let us price competitively while we built our first reviews. Support actually picks up the phone.",
    name: "Aman Verma",
    role: "Electronics, Panchkula",
    initials: "AV",
    avatarClass: "avatar-3",
  },
];

const getVisibleCount = (width: number) => {
  if (width <= 575) return 1; // mobile
  if (width <= 991) return 2; // tablet
  return 3; // desktop
};

const SellTestimonials: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const total = testimonial.length;

  // clones: end ke last `visibleCount` cards ko start me, start ke first `visibleCount` cards ko end me lagao
  const slides = [
    ...testimonial.slice(total - visibleCount).map((t) => ({ ...t, cloneKey: `pre-${t.id}` })),
    ...testimonial.map((t) => ({ ...t, cloneKey: `real-${t.id}` })),
    ...testimonial.slice(0, visibleCount).map((t) => ({ ...t, cloneKey: `post-${t.id}` })),
  ];

  // index ab "real" testimonial array ke andar 0-based hai; actual track position = index + visibleCount
  const [index, setIndex] = useState<number>(0);
  const [withTransition, setWithTransition] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // visibleCount badalne par index reset (clones bhi resize hote hain isliye safe reset)
  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  const goNext = useCallback(() => {
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  }, []);

  const goPrev = () => {
    setWithTransition(true);
    setIndex((prev) => prev - 1);
  };

  const goTo = (i: number) => {
    setWithTransition(true);
    setIndex(i);
  };

  // jab index end/start clone zone me pahunche, transition khatam hone ke baad silently real position pe snap karo
  const handleTransitionEnd = () => {
    if (index >= total) {
      setWithTransition(false);
      setIndex(0);
    } else if (index < 0) {
      setWithTransition(false);
      setIndex(total - 1);
    }
  };

  // autoplay — speed kam ki hai: 3500ms -> 6000ms
  useEffect(() => {
    autoplayRef.current = setInterval(goNext, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [goNext]);

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  const resumeAutoplay = () => {
    autoplayRef.current = setInterval(goNext, 6000);
  };

  const trackPosition = index + visibleCount; // clones ki wajah se offset
  const slideWidthPct = 100 / slides.length;

  // active dot: index ko 0..total-1 ke range me normalize karo
  const activeDot = ((index % total) + total) % total;

  return (
    <section className="testimonials">
      <Container>
        <div className="sec-head">
          <div className="sec-eyebrow">Seller Stories</div>
          <h2>Sellers who grew with us</h2>
        </div>

        <div
          className="test-carousel"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <button className="test-arrow test-arrow-prev" onClick={goPrev} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className="test-viewport">
            <div
              className="test-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${trackPosition * (100 / visibleCount)}%)`,
                width: `${slides.length * (100 / visibleCount)}%`,
                transition: withTransition ? "transform 0.9s ease-in-out" : "none",
              }}
            >
              {slides.map((t) => (
                <div
                  className="test-slide-item"
                  key={t.cloneKey}
                  style={{ width: `${slideWidthPct}%` }}
                >
                  <div className="test-card">
                    <div className="test-stars">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                    <p className="test-quote">{t.quote}</p>
                    <div className="test-person">
                      <div className={`test-avatar ${t.avatarClass}`}>{t.initials}</div>
                      <div>
                        <b>{t.name}</b>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="test-arrow test-arrow-next" onClick={goNext} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        <div className="test-indicators">
          {testimonial.map((_, i) => (
            <button
              key={i}
              className={`test-dot ${i === activeDot ? "test-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SellTestimonials;