import Link from "next/link";
import MouseEffect from "./MouseEffect";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Sec3() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechVision Inc.",
      image: "/images/person-1.jpg",
      text: "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "Founder, StartupHub",
      image: "/images/person-2.jpg",
      text: "Exceptional service from start to finish. They understood our vision and brought it to life with remarkable precision and creativity.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Marketing Director, BrandCo",
      image: "/images/person-3.jpg",
      text: "The level of professionalism and expertise is unmatched. Our project was delivered on time and beyond our wildest expectations.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      role: "CTO, DataFlow Systems",
      image: "/images/person-4.jpg",
      text: "Their technical prowess combined with creative excellence made our collaboration seamless. Highly recommend for any serious project.",
      rating: 5,
    },
    {
      name: "Sophia Anderson",
      role: "Product Manager, InnovateLabs",
      image: "/images/person-5.jpg",
      text: "A game-changing partnership that elevated our product to new heights. Their strategic insights were invaluable throughout the process.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Director, Creative Studios",
      image: "/images/person-6.jpg",
      text: "Outstanding work ethic and brilliant execution. They turned our complex requirements into an elegant, user-friendly solution.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#1b1b1b] relative">
      <MouseEffect>
        <div className="relative overflow-hidden py-20 px-8">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f4eade] rounded-full blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f4eade] rounded-full blur-3xl opacity-5"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-[#f4eade]/10 rounded-full mb-6">
                <span className="text-[#f4eade] text-sm font-medium tracking-wide">
                  TESTIMONIALS
                </span>
              </div>

              <h2
                className="text-5xl md:text-6xl font-bold text-[#f4eade] mb-6"
                style={{ fontFamily: "Nippo, sans-serif" }}
              >
                What Our Clients Say
              </h2>

              <p className="text-lg text-[#f4eade]/70 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our valued clients
                have to say about their experience
              </p>
            </div>

            {/* Testimonial Carousel */}
            <TestimonialCarousel testimonials={testimonials} />

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-[#f4eade]/60 mb-6">
                Ready to join our satisfied clients?
              </p>
              <Link href={"/services"} className="px-8 py-4 bg-[#f4eade] text-[#1b1b1b] rounded-full font-medium text-lg hover:bg-[#e5dbc8] hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </MouseEffect>
    </section>
  );
}
