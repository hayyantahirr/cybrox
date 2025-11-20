"use client";

import { useState } from "react";
import MouseEffect from "./MouseEffect";

export default function Sec3() {
  const [activePhase, setActivePhase] = useState(0);

  const journeyPhases = [
    {
      title: "Discovery",
      icon: "🔍",
      description:
        "We listen to your vision, understand your challenges, and explore possibilities together.",
      color: "#1F6F50",
    },
    {
      title: "Strategy",
      icon: "🎯",
      description:
        "Crafting a tailored roadmap that aligns with your goals and maximizes impact.",
      color: "#F4C430",
    },
    {
      title: "Creation",
      icon: "⚡",
      description:
        "Bringing ideas to life with cutting-edge technology and creative excellence.",
      color: "#1F6F50",
    },
    {
      title: "Launch",
      icon: "🚀",
      description:
        "Deploying your solution with precision, ensuring a smooth and successful rollout.",
      color: "#F4C430",
    },
    {
      title: "Growth",
      icon: "📈",
      description:
        "Continuous support and optimization to help your business thrive and scale.",
      color: "#1F6F50",
    },
  ];

  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Partnership",
      description:
        "We're not just vendors—we're your long-term partners in success.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Trust",
      description:
        "Transparency and honesty form the foundation of every relationship.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Constantly pushing boundaries to deliver solutions that exceed expectations.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Commitment",
      description:
        "Your success is our mission—we're with you every step of the way.",
    },
  ];

  return (
    <MouseEffect>
      <section className="py-20 md:py-28 px-6 bg-[#1b1b1b] text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#1F6F50] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4C430] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#1F6F50] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4C430]/20 rounded-full text-[#F4C430] font-medium text-sm mb-6 border border-[#F4C430]/30">
              <span className="w-2 h-2 bg-[#F4C430] rounded-full animate-pulse"></span>
              Our Relationship
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              More Than Clients,
              <span className="block mt-2 bg-linear-to-r from-[#1F6F50] to-[#F4C430] bg-clip-text text-transparent">
                We Build Partnerships
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              At Cybrox, every client relationship is built on trust,
              collaboration, and a shared vision for success. We don't just
              deliver projects—we create lasting partnerships that drive growth.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="mb-24">
            <h3
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Your Journey With Us
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-[#1F6F50] via-[#F4C430] to-[#1F6F50] hidden lg:block"></div>

              {/* Phase cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {journeyPhases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActivePhase(index)}
                    onClick={() => setActivePhase(index)}
                  >
                    {/* Card */}
                    <div
                      className={`
                      bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300
                      ${
                        activePhase === index
                          ? "border-[#F4C430] scale-105 shadow-2xl"
                          : "border-white/10 hover:border-[#1F6F50]/50"
                      }
                    `}
                    >
                      {/* Icon */}
                      <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                        {phase.icon}
                      </div>

                      {/* Title */}
                      <h4
                        className="text-xl font-bold text-center mb-3"
                        style={{ fontFamily: "Nippo, sans-serif" }}
                      >
                        {phase.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-white/70 text-center leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Step number */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-linear-to-br from-[#1F6F50] to-[#F4C430] flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Connector dot */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F4C430] border-4 border-[#1b1b1b] z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="mb-16">
            <h3
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              What Drives Our Relationships
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1F6F50] transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#1F6F50] to-[#F4C430] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h4
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "Nippo, sans-serif" }}
                  >
                    {value.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-linear-to-r from-[#1F6F50]/20 to-[#F4C430]/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 bg-linear-to-r from-[#1F6F50] to-[#F4C430] bg-clip-text text-transparent"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  98%
                </div>
                <p className="text-white/70">Client Retention Rate</p>
              </div>
              <div className="animate-fade-in delay-100">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 bg-linear-to-r from-[#1F6F50] to-[#F4C430] bg-clip-text text-transparent"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  24/7
                </div>
                <p className="text-white/70">Support Available</p>
              </div>
              <div className="animate-fade-in delay-200">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 bg-linear-to-r from-[#1F6F50] to-[#F4C430] bg-clip-text text-transparent"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  100+
                </div>
                <p className="text-white/70">Happy Clients</p>
              </div>
              <div className="animate-fade-in delay-700">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 bg-linear-to-r from-[#1F6F50] to-[#F4C430] bg-clip-text text-transparent"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  5★
                </div>
                <p className="text-white/70">Average Rating</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in delay-700">
            <p className="text-xl text-white/80 mb-6">
              Ready to start your journey with us?
            </p>
            <button className="px-10 py-5 bg-linear-to-r from-[#1F6F50] to-[#F4C430] text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Let's Build Together
            </button>
          </div>
        </div>
      </section>
    </MouseEffect>
  );
}
