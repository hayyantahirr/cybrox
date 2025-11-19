"use client";

// import { useEffect, useRef, useState } from "react";

// export default function MouseEffect({ children }) {
//   const containerRef = useRef(null);
//   const glowRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const container = containerRef.current;
//     const glow = glowRef.current;

//     if (!container || !glow) return;

//     const handleMouseMove = (e) => {
//       const rect = container.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       glow.style.left = `${x}px`;
//       glow.style.top = `${y}px`;
//     };

//     const handleMouseEnter = () => {
//       setIsHovering(true);
//     };

//     const handleMouseLeave = () => {
//       setIsHovering(false);
//     };

//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseenter", handleMouseEnter);
//     container.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseenter", handleMouseEnter);
//       container.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative overflow-hidden">
//       <div
//         ref={glowRef}
//         className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full transition-opacity duration-500"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(27, 27, 27, 0.25) 0%, rgba(27, 27, 27, 0.5) 40%, transparent 20%)",
//           opacity: isHovering ? 1 : 0,
//         }}
//       />
//       {children}
//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";

export default function MouseEffect({ children }) {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;

    if (!container || !glow) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

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
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-[#1a1a1a]"
      
    >
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
              rgba(255,255,255,0.18) 0%,
              rgba(180,180,255,0.10) 25%,
              rgba(60,60,150,0.06) 45%,
              rgba(0,0,0,0) 70%
            )
          `,
          filter: "blur(90px)",
        }}
      />

      {children}
    </div>
  );
}
