import React from "react";
import MouseEffect from "../about/MouseEffect";

const Hero = () => {
  return (
    <section className="relative  bg-linear-to-br from-[#f4eade] to-white">
      <MouseEffect>
        <div className="max-w-5xl py-24 md:py-32 px-6 mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#1b1b1b] mb-6 animate-slide-up"
            style={{ fontFamily: "Nippo, sans-serif" }}
          >
            Transform Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-[#2a2a2a] font-light animate-fade-in">
            Digital solutions that drive growth, inspire audiences, and elevate
            your brand.
          </p>
        </div>
      </MouseEffect>
    </section>
  );
};

export default Hero;
