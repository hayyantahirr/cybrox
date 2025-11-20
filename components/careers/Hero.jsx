import React from "react";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-36 px-6 bg-linear-to-br from-[#f4eade] to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-[#1F6F50] animate-slide-up"
          style={{ fontFamily: "Nippo, sans-serif" }}
        >
          Join the Cybrox Team
        </h1>
        <p className="text-lg md:text-xl text-[#1b1b1b] mb-6 font-light leading-relaxed animate-fade-in">
          Be part of something extraordinary. At Cybrox, we're crafting digital
          experiences that transform businesses and looking for passionate
          individuals to join our mission.
        </p>
        <p className="text-base md:text-lg text-[#F4C430] animate-fade-in delay-100">
          Explore opportunities to grow, innovate, and make an impact with a
          team that values creativity, collaboration, and cutting-edge
          solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
