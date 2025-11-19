"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleTransition((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleTransition = (newIndexOrFn) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndexOrFn);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    handleTransition(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    handleTransition((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    handleTransition(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="bg-[#2a2a2a] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-8 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-[#f4eade]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-[#f4eade] text-xl md:text-2xl leading-relaxed mb-12 text-center font-light">
            {testimonial.text}
          </p>

          {/* Author Info */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#f4eade]/30">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="text-center">
              <h4 className="text-[#f4eade] font-semibold text-xl mb-1">
                {testimonial.name}
              </h4>
              <p className="text-[#f4eade]/60">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-10 h-10 bg-[#f4eade] rounded-full flex items-center justify-center hover:bg-[#e5dbc8] transition-all duration-300 shadow-lg hover:scale-110"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-6 h-6 text-[#1b1b1b]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-10    h-10 bg-[#f4eade] rounded-full flex items-center justify-center hover:bg-[#e5dbc8] transition-all duration-300 shadow-lg hover:scale-110"
        aria-label="Next testimonial"
      >
        <svg
          className="w-6 h-6 text-[#1b1b1b]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-12 h-3 bg-[#f4eade]"
                : "w-3 h-3 bg-[#f4eade]/30 hover:bg-[#f4eade]/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
