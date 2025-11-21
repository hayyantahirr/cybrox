import Card from "@/components/services/Card";
import Hero from "@/components/services/Hero";
import React from "react";

const page = () => {
  const services = [
    {
      id: 1,
      title: "Web App Developer",
      Lead: "Marcus Chen",
      description:
        "Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Integration",
      ],
      svg: "",
    },
  ];

  return (
    <>
      <Hero />
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
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
