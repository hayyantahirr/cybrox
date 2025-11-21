import Image from "next/image";
import Link from "next/link";
import MouseEffect from "./MouseEffect";

export default function Sec2() {
  const teamMembers = [
    {
      name: "Marcus Chen",
      role: "Senior Backend Developer",
      image: "/images/team-images/senior-backend-developer.jpg",
      description:
        "Architecting scalable systems with 8+ years of expertise in cloud infrastructure and microservices.",
    },
    {
      name: "Sophia Martinez",
      role: "Senior AI Analytics",
      image: "/images/team-images/senior-ai-analytic.jpg",
      description:
        "Transforming data into actionable insights using machine learning and predictive analytics.",
    },
    {
      name: "David Thompson",
      role: "Senior Python Developer",
      image: "/images/team-images/senior-python-dev.jpg",
      description:
        "Building robust applications with Python, specializing in automation and data processing.",
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Graphic Designer",
      image: "/images/team-images/senior-graphic-designer.jpg",
      description:
        "Creating stunning visual identities that capture brand essence and engage audiences.",
    },
    {
      name: "Oliver Bennett",
      role: "Senior Marketing Expert",
      image: "/images/team-images/senior-marketing-expert.jpg",
      description:
        "Driving growth through strategic campaigns and data-driven marketing initiatives.",
    },
    {
      name: "Isabella Kim",
      role: "Junior UI/UX Designer",
      image: "/images/team-images/junior-ui-ux-designer.jpg",
      description:
        "Crafting intuitive user experiences with a keen eye for detail and modern design trends.",
    },
    {
      name: "Lucas Anderson",
      role: "Senior Video Editor",
      image: "/images/team-images/senior-video-editor.jpg",
      description:
        "Bringing stories to life through cinematic editing and creative visual storytelling.",
    },
    {
      name: "Rachel Foster",
      role: "Content Writer",
      image: "/images/team-images/content-writer.jpg",
      description:
        "Crafting compelling narratives that resonate with audiences and drive engagement.",
    },
    {
      name: "James Mitchell",
      role: "Business Consultant",
      image: "/images/team-images/buisness-consultant.jpg",
      description:
        "Guiding businesses toward success with strategic planning and market insights.",
    },
  ];

  return (
    <MouseEffect>
      <section id="team" className="py-20 md:py-28 px-6 bg-linear-to-b from-white to-[#f4eade]/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F6F50]/10 rounded-full text-[#1F6F50] font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-[#1F6F50] rounded-full animate-pulse"></span>
              Meet Our Team
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              The Minds Behind
              <span className="block text-[#1F6F50] mt-2">Our Success</span>
            </h2>
            <p className="text-lg text-[#2a2a2a]/80 max-w-3xl mx-auto">
              A diverse team of passionate professionals dedicated to delivering
              excellence in every project
            </p>
          </div>

          {/* CEO Section - Featured */}
          <div className="mb-20 animate-slide-up">
            <div className="max-w-5xl mx-auto bg-linear-to-br from-[#1F6F50]/5 to-[#F4C430]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#1F6F50]/10">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* CEO Image */}
                <div className="relative group">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/team-images/ceo.jpg"
                      alt="CEO - Alexander Hayes"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#1F6F50]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F4C430] rounded-full blur-2xl opacity-40"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1F6F50] rounded-full blur-2xl opacity-30"></div>
                </div>

                {/* CEO Info */}
                <div>
                  <div className="inline-block px-4 py-1 bg-[#F4C430]/20 rounded-full text-gray-600  font-semibold text-sm mb-4 border border-[#F4C430]/30">
                    Chief Executive Officer
                  </div>
                  <h3
                    className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4"
                    style={{ fontFamily: "Nippo, sans-serif" }}
                  >
                    Alexander Hayes
                  </h3>
                  <p className="text-lg text-[#2a2a2a]/80 mb-6 leading-relaxed">
                    With over 15 years of experience in the tech industry,
                    Alexander founded Cybrox with a vision to revolutionize how
                    businesses approach digital transformation. His leadership
                    has guided the company from a small startup to a trusted
                    partner for enterprises worldwide.
                  </p>
                  <p className="text-lg text-[#2a2a2a]/80 mb-6 leading-relaxed">
                    Alexander's strategic thinking and commitment to innovation
                    have been instrumental in establishing Cybrox as a leader in
                    cutting-edge technology solutions. He believes in empowering
                    teams, fostering creativity, and maintaining an unwavering
                    focus on client success.
                  </p>

                  {/* CEO Highlights */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1F6F50] flex items-center justify-center shrink-0">
                        <svg
                          className="w-4 h-4 text-[#F4EAD4]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#1b1b1b] font-medium">
                        15+ Years Industry Experience
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1F6F50] flex items-center justify-center shrink-0">
                        <svg
                          className="w-4 h-4 text-[#F4EAD4]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#1b1b1b] font-medium">
                        Forbes 30 Under 30 Alumni
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1F6F50] flex items-center justify-center shrink-0">
                        <svg
                          className="w-4 h-4 text-[#F4EAD4]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#1b1b1b] font-medium">
                        Led 500+ Successful Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1b1b1b]/80 via-[#1b1b1b]/20 to-transparent"></div>

                  {/* Name and role on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-2xl font-bold text-[#F4EAD4] mb-1"
                      style={{ fontFamily: "Nippo, sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[#F4C430] font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Member Description */}
                <div className="p-6 bg-linear-to-br from-white to-[#1F6F50]/5">
                  <p className="text-[#2a2a2a]/80 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in delay-700">
            <p className="text-lg text-[#F4EAD4] mb-6">
              Want to join our talented team?
            </p>
            <Link
              href={"/careers"}
              className="px-8 py-4 bg-[#1F6F50] text-[#F4EAD4] rounded-full font-medium text-lg hover:bg-[#1F6F50]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </MouseEffect>
  );
}
