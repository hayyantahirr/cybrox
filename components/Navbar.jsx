"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * GLASSMORPHIC NAVBAR COMPONENT
 * ==============================
 * A modern, responsive navigation bar with glass effect and smooth animations
 *
 * FEATURES:
 * - Glassmorphism design with backdrop blur
 * - Dynamic active state detection (route-based & scroll-based)
 * - Smooth page transitions
 * - Responsive mobile menu
 * - Dark mode support
 * - Scroll-aware sizing
 *
 * COLORS:
 * - Light Mode: #F4EADE (Linen Pulps) accents with #1B1B1B (Night Trunk) text
 * - Dark Mode: Inverted color scheme
 */

const Navbar = () => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================

  const pathname = usePathname(); // Current route path from Next.js
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if user has scrolled down
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const [activeSection, setActiveSection] = useState(""); // Active section for scroll-based navigation

  // ============================================
  // SCROLL DETECTION & SECTION TRACKING
  // ============================================

  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar after scrolling 20px
      setIsScrolled(window.scrollY > 20);

      // Only detect sections on homepage (for hash-based navigation)
      if (pathname === "/") {
        const sections = ["home", "about", "services", "portfolio", "contact"];
        const scrollPosition = window.scrollY + 100; // Offset for better detection

        // Loop through sections to find which one is currently in view
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            // Check if current scroll position is within this section
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // ============================================
  // NAVIGATION LINKS CONFIGURATION
  // ============================================

  /**
   * Navigation links array
   * - name: Display text
   * - href: Link destination (can be route or hash)
   * - path: Route path for active state detection
   *
   * TO ADD NEW LINKS: Simply add a new object to this array
   */
  const navLinks = [
    { name: "Home", href: "/", path: "/" },
    { name: "About", href: "/about", path: "/about" },
    { name: "Services", href: "/services", path: "/services" },
    { name: "Portfolio", href: "/portfolio", path: "/portfolio" },
    { name: "Contact", href: "/contact", path: "/contact" },
  ];

  // ============================================
  // ACTIVE LINK DETECTION LOGIC
  // ============================================

  /**
   * Determines if a navigation link should be highlighted as active
   * Supports both route-based navigation and hash-based scrolling
   */
  const isLinkActive = (link) => {
    // Route-based: Check if current pathname matches link path
    if (link.path && pathname === link.path) {
      return true;
    }
    // Hash-based: Check if we're on homepage and scrolled to this section
    if (pathname === "/" && link.href.startsWith("#")) {
      return activeSection === link.href.replace("#", "");
    }
    return false;
  };

  // ============================================
  // RENDER NAVBAR
  // ============================================

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "w-[95%] md:w-[85%]" : "w-[95%] md:w-[90%]"
      }`}
    >
      {/* ========== GLASS CONTAINER ========== */}
      <div
        className={`relative backdrop-blur-xl bg-[#F4EADE]/10 dark:bg-[#1B1B1B]/30 
        border border-[#F4EADE]/20 dark:border-[#F4EADE]/10 rounded-2xl shadow-2xl
        transition-all duration-500 ease-out ${isScrolled ? "py-3" : "py-4"}`}
      >
        {/* Gradient overlay for depth - adds subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EADE]/5 via-transparent to-[#F4EADE]/5 rounded-2xl pointer-events-none" />

        <div className="relative px-4 md:px-8 flex items-center justify-between">
          {/* ========== LOGO ========== */}
          {/* Custom Nippo font with gradient text and scale animation on hover */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1B1B1B] to-[#1B1B1B]/70 
            dark:from-[#F4EADE] dark:to-[#F4EADE]/70 bg-clip-text text-transparent 
            hover:scale-105 transition-transform duration-300 ease-out"
            style={{ fontFamily: "Nippo, sans-serif" }}
          >
            Cybrox
          </Link>

          {/* ========== DESKTOP NAVIGATION ========== */}
          {/* Hidden on mobile (md:flex), visible on desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`relative px-4 lg:px-6 py-2 font-medium transition-all duration-500 ease-out group
                    ${
                      isActive
                        ? "text-[#1B1B1B] dark:text-white"
                        : "text-[#1B1B1B]/70 dark:text-[#F4EADE]/70"
                    }
                    hover:text-[#1B1B1B] dark:hover:text-white`}
                >
                  {/* Link text with higher z-index to stay above backgrounds */}
                  <span className="relative z-10">{link.name}</span>

                  {/* HOVER EFFECT: Background that scales in on hover */}
                  <span
                    className="absolute inset-0 bg-[#F4EADE]/20 dark:bg-[#F4EADE]/10 rounded-lg 
                    scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"
                  />

                  {/* ACTIVE INDICATOR: Animated bottom border */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r 
                    from-[#1B1B1B] to-[#1B1B1B]/50 dark:from-[#F4EADE] dark:to-[#F4EADE]/50 rounded-full
                    transition-all duration-500 ease-out ${
                      isActive ? "w-3/4 opacity-100" : "w-0 opacity-0"
                    }`}
                  />

                  {/* ACTIVE BACKGROUND: Subtle glow effect for active tab */}
                  <span
                    className={`absolute inset-0 bg-gradient-to-r from-[#F4EADE]/30 via-[#F4EADE]/20 to-[#F4EADE]/30 
                    dark:from-[#F4EADE]/20 dark:via-[#F4EADE]/10 dark:to-[#F4EADE]/20 rounded-lg
                    transition-all duration-500 ease-out ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* ========== CTA BUTTON ========== */}
          {/* Call-to-action button with gradient and shadow effects */}
          <button
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#1B1B1B] to-[#1B1B1B]/80 
            dark:from-[#F4EADE] dark:to-[#F4EADE]/80 text-[#F4EADE] dark:text-[#1B1B1B] 
            rounded-lg font-semibold hover:shadow-lg hover:shadow-[#1B1B1B]/20 dark:hover:shadow-[#F4EADE]/20 
            hover:scale-105 transition-all duration-300 ease-out"
          >
            Get Started
          </button>

          {/* ========== MOBILE MENU BUTTON ========== */}
          {/* Hamburger/Close icon toggle - visible only on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1B1B1B] dark:text-[#F4EADE] hover:bg-[#F4EADE]/10 
            rounded-lg transition-all duration-300 ease-out"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300 ease-out"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Toggle between hamburger and X icon */}
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ========== MOBILE MENU DROPDOWN ========== */}
        {/* Animated dropdown menu for mobile devices */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-2 space-y-2 border-t border-[#F4EADE]/20 dark:border-[#F4EADE]/10 mt-4">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative block px-4 py-3 font-medium rounded-lg transition-all duration-500 ease-out
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#F4EADE]/30 to-[#F4EADE]/20 dark:from-[#F4EADE]/20 dark:to-[#F4EADE]/10 text-[#1B1B1B] dark:text-white border-l-4 border-[#1B1B1B] dark:border-[#F4EADE]"
                        : "text-[#1B1B1B]/70 dark:text-[#F4EADE]/70 hover:bg-[#F4EADE]/20 dark:hover:bg-[#F4EADE]/10"
                    }
                    hover:text-[#1B1B1B] dark:hover:text-white hover:translate-x-1`}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* Mobile CTA Button */}
            <button
              className="w-full px-4 py-3 bg-gradient-to-r from-[#1B1B1B] to-[#1B1B1B]/80 
              dark:from-[#F4EADE] dark:to-[#F4EADE]/80 text-[#F4EADE] dark:text-[#1B1B1B] 
              rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.02]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
