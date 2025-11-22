import Card from "@/components/services/Card";
import Hero from "@/components/services/Hero";
import React from "react";

const page = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      category: "Development",
      description:
        "Transform your ideas into powerful web applications with modern frameworks and scalable architecture.",
      lead: {
        name: "Marcus Chen",
        img: "/images/person-1.jpg",
        role: "Lead Full Stack Developer",
        experience: "8+ years",
        projectsCompleted: 45,
        specialization: "React, Node.js, Cloud Architecture",
      },
      keyDeliverables: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "API Development & Integration",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
      startingPrice: "$5,000",
    },
    {
      id: 2,
      title: "UI/UX Design",
      category: "Design",
      description:
        "Create stunning, user-centered designs that captivate audiences and drive meaningful engagement.",
      lead: {
        name: "Alex Zane",
        img: "/images/person-2.jpg",
        role: "Senior UX Designer",
        experience: "6+ years",
        projectsCompleted: 60,
        specialization: "User Research, Prototyping, Design Systems",
      },
      keyDeliverables: [
        "User Research & Testing",
        "Wireframes & Prototypes",
        "Design Systems",
        "Mobile & Web Interfaces",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
      startingPrice: "$3,500",
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Development",
      description:
        "Build native and cross-platform mobile experiences that users love on iOS and Android.",
      lead: {
        name: "David Kumar",
        img: "/images/person-3.jpg",
        role: "Mobile Development Lead",
        experience: "7+ years",
        projectsCompleted: 38,
        specialization: "React Native, Flutter, iOS & Android",
      },
      keyDeliverables: [
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Backend Integration",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      startingPrice: "$8,000",
    },
    {
      id: 4,
      title: "Digital Marketing",
      category: "Marketing",
      description:
        "Amplify your brand with data-driven strategies that reach the right audience at the right time.",
      lead: {
        name: "Emily Rodriguez",
        img: "/images/person-4.jpg",
        role: "Digital Marketing Strategist",
        experience: "5+ years",
        projectsCompleted: 72,
        specialization: "SEO, Content Strategy, Social Media",
      },
      keyDeliverables: [
        "SEO & SEM Campaigns",
        "Social Media Strategy",
        "Content Marketing",
        "Analytics & Reporting",
      ],
      technologies: [
        "Google Analytics",
        "SEMrush",
        "HubSpot",
        "Hootsuite",
        "Mailchimp",
      ],
      startingPrice: "$2,500/mo",
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "Design",
      description:
        "Establish a memorable brand presence with cohesive visual identity and strategic positioning.",
      lead: {
        name: "Alex Thompson",
        img: "/images/person-5.jpg",
        role: "Brand Strategist",
        experience: "9+ years",
        projectsCompleted: 55,
        specialization: "Brand Strategy, Visual Identity, Guidelines",
      },
      keyDeliverables: [
        "Logo & Visual Identity",
        "Brand Guidelines",
        "Marketing Collateral",
        "Brand Strategy",
      ],
      technologies: [
        "Adobe Illustrator",
        "Photoshop",
        "InDesign",
        "Figma",
        "After Effects",
      ],
      startingPrice: "$4,000",
    },
    {
      id: 6,
      title: "Cloud Solutions",
      category: "Infrastructure",
      description:
        "Deploy scalable, secure cloud infrastructure that grows with your business needs.",
      lead: {
        name: "James Park",
        img: "/images/person-6.jpg",
        role: "Cloud Architect",
        experience: "10+ years",
        projectsCompleted: 42,
        specialization: "AWS, DevOps, Kubernetes, CI/CD",
      },
      keyDeliverables: [
        "Cloud Migration",
        "DevOps & CI/CD Pipelines",
        "Infrastructure as Code",
        "Performance Optimization",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      startingPrice: "$6,000",
    },
  ];

  return (
    <>
      <Hero />
      <div className="py-16 px-6 bg-linear-to-b from-white to-[#f4eade]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-4"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Our Services
            </h2>
            <p className="text-[#3a3a3a] max-w-2xl mx-auto">
              Expert-led solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
