export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 md:py-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1F6F50] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F4C430] rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#1F6F50]/10 border border-[#1F6F50]/20 rounded-full text-[#1F6F50] font-medium text-sm">
            <span className="w-2 h-2 bg-[#1F6F50] rounded-full animate-pulse"></span>
            About Cybrox
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 text-[#1b1b1b] leading-tight animate-slide-up"
          style={{ fontFamily: "Nippo, sans-serif" }}
        >
          Building Digital Excellence
          <span className="block mt-2 text-[#1F6F50]">
            One Solution at a Time
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-center text-[#2a2a2a]/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in delay-200">
          We're a team of passionate innovators, designers, and developers
          dedicated to transforming businesses through cutting-edge technology
          and creative solutions.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 animate-scale-in delay-700">
          {/* Stat 1 */}
          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#1b1b1b]/10 hover:border-[#1F6F50]/30 transition-all duration-300 hover:scale-105">
            <div
              className="text-4xl md:text-5xl font-bold text-[#1F6F50] mb-2"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              500+
            </div>
            <div className="text-sm md:text-base text-[#2a2a2a]/70 font-medium">
              Projects Delivered
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#1b1b1b]/10 hover:border-[#1F6F50]/30 transition-all duration-300 hover:scale-105">
            <div
              className="text-4xl md:text-5xl font-bold text-[#1F6F50] mb-2"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              98%
            </div>
            <div className="text-sm md:text-base text-[#2a2a2a]/70 font-medium">
              Client Satisfaction
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#1b1b1b]/10 hover:border-[#1F6F50]/30 transition-all duration-300 hover:scale-105">
            <div
              className="text-4xl md:text-5xl font-bold text-[#1F6F50] mb-2"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              50+
            </div>
            <div className="text-sm md:text-base text-[#2a2a2a]/70 font-medium">
              Team Members
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#1b1b1b]/10 hover:border-[#1F6F50]/30 transition-all duration-300 hover:scale-105">
            <div
              className="text-4xl md:text-5xl font-bold text-[#1F6F50] mb-2"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              10+
            </div>
            <div className="text-sm md:text-base text-[#2a2a2a]/70 font-medium">
              Years Experience
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in delay-700">
          <button className="px-8 py-4 bg-[#1F6F50] text-white rounded-full font-medium text-lg hover:bg-[#1F6F50]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Our Story
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-[#1F6F50] text-[#1F6F50] rounded-full font-medium text-lg hover:bg-[#1F6F50]/5 hover:scale-105 transition-all duration-300">
            Meet the Team
          </button>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent"></div>
    </section>
  );
}
