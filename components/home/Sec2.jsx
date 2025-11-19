import Image from "next/image";

export default function Sec2() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Team -1.jpg"
                alt="Our collaborative team working together"
                width={700}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1b1b1b]/20 to-transparent"></div>
            </div>

            {/* Floating accent element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f4eade] rounded-full blur-3xl opacity-60 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#1b1b1b] rounded-full blur-3xl opacity-10 -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-[#f4eade] rounded-full">
              <span className="text-[#1b1b1b] text-sm font-medium tracking-wide">
                OUR TEAM
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold text-[#1b1b1b] leading-tight"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Collaboration
              <br />
              <span className="text-[#1b1b1b]/70">Drives Success</span>
            </h2>

            <p className="text-lg text-[#1b1b1b]/70 leading-relaxed">
              Our strength lies in our collective expertise and unwavering
              commitment to excellence. Every project is a symphony of diverse
              talents working in perfect harmony.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1b1b1b] rounded-full flex items-center justify-center">
                  <span className="text-[#f4eade] text-xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b1b1b] mb-1">
                    Cross-Functional Expertise
                  </h3>
                  <p className="text-[#1b1b1b]/60">
                    Designers, developers, and strategists unite to create
                    exceptional solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1b1b1b] rounded-full flex items-center justify-center">
                  <span className="text-[#f4eade] text-xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b1b1b] mb-1">
                    Agile Methodology
                  </h3>
                  <p className="text-[#1b1b1b]/60">
                    Rapid iteration and continuous improvement drive our
                    workflow
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1b1b1b] rounded-full flex items-center justify-center">
                  <span className="text-[#f4eade] text-xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b1b1b] mb-1">
                    Client-Centric Approach
                  </h3>
                  <p className="text-[#1b1b1b]/60">
                    Your vision becomes our mission through transparent
                    collaboration
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="px-8 py-4 bg-[#1b1b1b] text-[#f4eade] rounded-full font-medium text-lg hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-300 shadow-lg">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
