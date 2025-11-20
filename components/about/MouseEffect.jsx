"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseEffect({ children }) {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;

    if (!container || !glow) return;

    // Get all text elements (h1, h2, h3, p, span, button, etc.)
    const textElements = container.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, button, a, div[class*='text']"
    );

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x: e.clientX, y: e.clientY });

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;

      // Check proximity to text elements and apply jump effect
      textElements.forEach((element) => {
        const elemRect = element.getBoundingClientRect();
        const elemCenterX = elemRect.left + elemRect.width / 2;
        const elemCenterY = elemRect.top + elemRect.height / 2;

        // Calculate distance from mouse to element center
        const distance = Math.sqrt(
          Math.pow(e.clientX - elemCenterX, 2) +
            Math.pow(e.clientY - elemCenterY, 2)
        );

        // Proximity threshold (in pixels)
        const threshold = 150;

        if (distance < threshold) {
          // Calculate jump intensity based on distance (closer = stronger)
          const intensity = 1 - distance / threshold;
          const jumpAmount = intensity * 8; // Max 8px jump

          element.style.transform = `translateY(-${jumpAmount}px)`;
          element.style.transition =
            "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
        } else {
          element.style.transform = "translateY(0)";
          element.style.transition = "transform 0.4s ease-out";
        }
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset all text elements
      textElements.forEach((element) => {
        element.style.transform = "translateY(0)";
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#1a1a1a]">
      <div
        ref={glowRef}
        className={`
          pointer-events-none absolute 
          -translate-x-1/2 -translate-y-1/2
          w-[550px] h-[550px] 
          rounded-full 
          transition-opacity
        `}
        style={{
          opacity: isHovering ? 1 : 0,
          background: `
            radial-gradient(
              circle,
              rgba(244, 196, 48, 0.25) 0%,
              rgba(244, 196, 48, 0.15) 25%,
              rgba(244, 196, 48, 0.08) 45%,
              rgba(0, 0, 0, 0) 70%
            )
          `,
          filter: "blur(90px)",
        }}
      />

      {children}
    </div>
  );
}
