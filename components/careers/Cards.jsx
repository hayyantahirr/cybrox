import React from "react";
import MouseEffect from "../about/MouseEffect";

const Cards = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Join our development team to build cutting-edge web applications that transform how businesses operate in the digital space.",
      requirements: [
        "5+ years of experience with React, Node.js, and modern web technologies",
        "Strong understanding of database design and API development",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving and communication skills",
      ],
      lifeAtCybrox: [
        "Flexible work hours and remote-first culture",
        "Collaborative team environment with weekly knowledge sharing",
        "Access to latest tools and technologies",
        "Continuous learning opportunities and conference attendance",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      description:
        "Create beautiful, intuitive digital experiences that delight users and drive business results for our diverse client portfolio.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or similar design tools",
        "Strong portfolio showcasing web and mobile design projects",
        "Understanding of design systems and accessibility standards",
      ],
      lifeAtCybrox: [
        "Creative freedom to explore innovative design solutions",
        "Direct collaboration with clients and development teams",
        "Regular design critiques and mentorship opportunities",
        "Budget for design tools and professional development",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Drive digital growth strategies for our clients through data-driven marketing campaigns and creative content strategies.",
      requirements: [
        "2+ years of experience in digital marketing or growth roles",
        "Expertise in SEO, SEM, social media, and content marketing",
        "Proficiency with analytics tools (Google Analytics, SEMrush, etc.)",
        "Strong copywriting and communication skills",
      ],
      lifeAtCybrox: [
        "Work with diverse brands across multiple industries",
        "Data-driven approach with creative freedom",
        "Collaborative campaigns with design and development teams",
        "Performance bonuses tied to campaign success",
      ],
    },
    {
      id: 4,
      title: "Project Manager",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Lead cross-functional teams to deliver exceptional digital projects on time and exceed client expectations.",
      requirements: [
        "4+ years of project management experience in digital/tech industry",
        "Strong understanding of Agile/Scrum methodologies",
        "Excellent client communication and stakeholder management skills",
        "Experience with project management tools (Jira, Asana, etc.)",
      ],
      lifeAtCybrox: [
        "Lead impactful projects from concept to launch",
        "Supportive team culture with clear processes",
        "Professional development and PM certification support",
        "Direct impact on company growth and client satisfaction",
      ],
    },
  ];

  return (
    <MouseEffect>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1b1b1b] text-center mb-4"
            style={{ fontFamily: "Nippo, sans-serif" }}
          >
            Open Positions
          </h2>
          <p className="text-center text-[#3a3a3a] mb-12 max-w-2xl mx-auto">
            Explore exciting opportunities to join our team and help shape the
            future of digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-linear-to-br from-[#f4eade] to-white border border-[#e5dbc8] rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3
                    className="text-2xl font-bold text-[#1b1b1b] mb-2"
                    style={{ fontFamily: "Nippo, sans-serif" }}
                  >
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-[#3a3a3a]">
                    <span className="bg-[#1b1b1b] text-[#f4eade] px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full border border-[#e5dbc8]">
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#2a2a2a] mb-4 leading-relaxed">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1b1b1b] mb-2">
                    Requirements:
                  </h4>
                  <ul className="space-y-1 text-sm text-[#3a3a3a]">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-[#1b1b1b]">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Life at Cybrox */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1b1b1b] mb-2">
                    Life at Cybrox:
                  </h4>
                  <ul className="space-y-1 text-sm text-[#3a3a3a]">
                    {job.lifeAtCybrox.map((perk, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-[#1b1b1b]">✓</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button className="w-full bg-[#1b1b1b] text-[#f4eade] py-3 rounded-full font-medium hover:bg-[#2a2a2a] transition-all duration-300 hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MouseEffect>
  );
};

export default Cards;
