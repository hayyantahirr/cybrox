import React from "react";
import Image from "next/image";

const Card = ({ service }) => {
  return (
    <div className="bg-white border border-[#e5dbc8] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      {/* Header with Category Badge */}
      <div className="bg-linear-to-br from-[#1b1b1b] to-[#2a2a2a] p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4eade]/10 rounded-full -mr-16 -mt-16"></div>
        <span className="inline-block bg-[#f4eade] text-[#1b1b1b] text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {service.category}
        </span>
        <h3
          className="text-2xl font-bold text-[#f4eade] mb-2"
          style={{ fontFamily: "Nippo, sans-serif" }}
        >
          {service.title}
        </h3>
        <p className="text-[#f4eade]/80 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Lead Expert Section */}
      <div className="p-6 bg-[#f4eade]/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#e5dbc8]">
            <Image
              src={service.lead.img}
              alt={service.lead.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-[#1b1b1b] text-sm">
              {service.lead.name}
            </p>
            <p className="text-xs text-[#3a3a3a]">{service.lead.role}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-[#3a3a3a]">
          <div>
            <span className="font-semibold text-[#1b1b1b]">Experience:</span>{" "}
            {service.lead.experience}
          </div>
          <div>
            <span className="font-semibold text-[#1b1b1b]">Projects:</span>{" "}
            {service.lead.projectsCompleted}+
          </div>
        </div>
      </div>

      {/* Key Deliverables */}
      <div className="p-6">
        <h4 className="font-semibold text-[#1b1b1b] mb-3 text-sm">
          Key Deliverables:
        </h4>
        <ul className="space-y-2 mb-4">
          {service.keyDeliverables.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-[#3a3a3a]">
              <span className="mr-2 text-[#1b1b1b] font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="font-semibold text-[#1b1b1b] mb-2 text-sm">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="bg-[#f4eade] text-[#1b1b1b] text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {service.technologies.length > 4 && (
              <span className="bg-[#e5dbc8] text-[#1b1b1b] text-xs px-2 py-1 rounded">
                +{service.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#e5dbc8]">
          <div>
            <p className="text-xs text-[#3a3a3a]">Starting at</p>
            <p
              className="text-xl font-bold text-[#1b1b1b]"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              {service.startingPrice}
            </p>
          </div>
          <button className="bg-[#1b1b1b] text-[#f4eade] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#2a2a2a] transition-all duration-300 group-hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
