"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
}

const heroSlides: CarouselSlide[] = [
  { id: "1", src: "/assets/img/all-images/home/banner1.png", alt: "Demo slide one" },
  { id: "2", src: "/assets/img/all-images/home/banner2.png", alt: "Demo slide two" },
  { id: "3", src: "/assets/img/all-images/home/banner3.png", alt: "Demo slide three" },
  { id: "4", src: "/assets/img/all-images/home/banner4.png", alt: "Demo slide four" },
];

interface HomeHeroProps {
  slides?: CarouselSlide[];
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

function HomeHero({
  slides = heroSlides,
  autoPlayInterval = 1500,
  pauseOnHover = true,
}: HomeHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideCount = slides.length;

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slideCount);
  }, [slideCount]);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused || slideCount <= 1) return;

    timerRef.current = setInterval(goToNext, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, goToNext, autoPlayInterval, slideCount]);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="hero-slider__track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-slider__slide"
            aria-hidden={index !== activeIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slideCount}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-slider__image"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--prev"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="hero-slider__dots" role="tablist" aria-label="Choose slide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={`hero-slider__dot${index === activeIndex ? " hero-slider__dot--active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeHero;