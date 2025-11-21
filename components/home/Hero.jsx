import Link from "next/link";
import MouseEffect from "./MouseEffect";

export default function Hero() {
  return (
    <MouseEffect>
      <section className="relative min-h-screen flex items-center justify-center px-6 py-25 md:py-32">
        {/* Background decorative elements */}
       

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Heading with Nippo Font */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#f4eade]"
            style={{ fontFamily: "Nippo, sans-serif" }}
          >
            <span className="inline-block animate-slide-up drop-shadow-sm">
              Influence Your buisness with Cybrox
            </span>
          </h1>

          {/* Subheading with different font */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-[#f4eade] max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Crafting digital experiences that inspire, engage, and transform
            your vision into reality
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row md:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link href={"/services"} className="px-8 py-4 bg-[#1b1b1b] text-[#f4eade] rounded-full font-medium text-lg hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Get Started
            </Link>
            <Link href={"/about"} className="px-8 py-4 bg-transparent border-2 border-[#1b1b1b] text-[#f4eade] rounded-full font-medium text-lg  hover:scale-105 transition-all duration-300">
              Learn More
            </Link>
          </div>

          {/* Scroll indicator */}
        </div>
      </section>
    </MouseEffect>
  );
}
