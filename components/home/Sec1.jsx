import Image from "next/image";

export default function Sec1() {
  const clients = [
    { name: "AWS", logo: "/images/AWS.png" },
    { name: "BBC", logo: "/images/BBC.png" },
    { name: "Burger King", logo: "/images/Burger King.png" },
    { name: "Oracle", logo: "/images/Oracle.png" },
    { name: "Scratch", logo: "/images/Scratch.png" },
    { name: "Tesla", logo: "/images/tesla.png" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#f4eade] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4"
            style={{ fontFamily: "Nippo, sans-serif" }}
          >
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-[#1b1b1b]/70 max-w-2xl mx-auto">
            Partnering with world-class brands to deliver exceptional results
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-20 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Optional Stats or CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#1b1b1b]/60 text-sm">
            Join 100+ companies that trust us with their digital presence
          </p>
        </div>
      </div>
    </section>
  );
}
