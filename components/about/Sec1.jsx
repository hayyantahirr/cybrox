import Image from "next/image";
import MouseEffect from "./MouseEffect";

export default function Sec1() {
  return (
    <MouseEffect>
      <section className="py-20 md:py-28 px-6 bg-[#F4EAD4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1 animate-slide-up">
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F6F50]/10 rounded-full text-[#1F6F50] font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-[#1F6F50] rounded-full"></span>
                About Our Company
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6 leading-tight"
                style={{ fontFamily: "Nippo, sans-serif" }}
              >
                Innovating the Future of
                <span className="block text-[#1F6F50] mt-2">
                  Digital Solutions
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-[#2a2a2a]/80 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the digital landscape,
                Cybrox has grown from a small startup to a leading technology
                partner for businesses worldwide. We combine creativity,
                technical expertise, and strategic thinking to deliver solutions
                that drive real results.
              </p>

              <p className="text-lg text-[#2a2a2a]/80 mb-8 leading-relaxed">
                Our team of passionate professionals works tirelessly to
                understand your unique challenges and craft tailored solutions
                that not only meet but exceed expectations. We believe in
                building long-term partnerships based on trust, transparency,
                and exceptional quality.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F6F50]/20 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#1F6F50]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b] mb-1">
                      Client-Centric Approach
                    </h3>
                    <p className="text-[#2a2a2a]/70">
                      Your success is our priority. We listen, adapt, and
                      deliver solutions that align with your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F6F50]/20 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#1F6F50]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b] mb-1">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-[#2a2a2a]/70">
                      We stay ahead of the curve, leveraging the latest tools
                      and frameworks to build future-proof solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F6F50]/20 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#1F6F50]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b] mb-1">
                      Proven Track Record
                    </h3>
                    <p className="text-[#2a2a2a]/70">
                      With hundreds of successful projects, we've earned the
                      trust of clients across diverse industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 animate-fade-in delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                {/* Image */}
                <div className="relative h-[400px] md:h-[600px] w-full">
                  <Image
                    src="/images/Team-2.jpg"
                    alt="Cybrox Team"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Overlay Accent */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1F6F50]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4C430] rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1F6F50] rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MouseEffect>
  );
}
