import MouseEffect from "./MouseEffect";

export default function Sec5() {
  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+66 2 123 4567",
      link: "tel:+6621234567",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "hello@cybrox.com",
      link: "mailto:hello@cybrox.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      value: "123 Sukhumvit Road, Khlong Toei, Bangkok 10110, Thailand",
      link: "https://maps.google.com/?q=13.7307,100.5418",
    },
  ];

  return (
    <MouseEffect>
      <section className="py-24 px-6 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4eade]/10 rounded-full mb-6">
              <span className="text-[#f4eade] text-sm font-medium tracking-wide">
                GET IN TOUCH
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold text-[#f4eade] mb-6"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Contact Us
            </h2>

            <p className="text-lg text-[#f4eade]/70 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out to
              us through any of the channels below
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#2a2a2a] rounded-3xl p-8 md:p-10">
                <h3
                  className="text-3xl font-bold text-[#f4eade] mb-8"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  Let's Talk
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#333333] transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-12 h-12 bg-[#f4eade]/10 rounded-xl flex items-center justify-center text-[#f4eade] group-hover:bg-[#f4eade]/20 group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#f4eade]/60 text-sm font-medium mb-1">
                          {info.title}
                        </h4>
                        <p className="text-[#f4eade] text-lg font-medium group-hover:text-[#f4eade]/90 transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-[#f4eade]/40 group-hover:text-[#f4eade] group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-8 pt-8 border-t border-[#f4eade]/10">
                  <h4 className="text-[#f4eade] font-semibold mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-[#f4eade]/70">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl overflow-hidden h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5919074087!2d100.53960731483!3d13.730698190349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269e0c5e5%3A0x8a5f4a3e8e8e8e8e!2sSukhumvit%20Rd%2C%20Khlong%20Toei%2C%20Bangkok%2010110%2C%20Thailand!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cybrox Office Location"
                ></iframe>
              </div>

              {/* Location Badge */}
              <div className="absolute top-6 left-6 bg-[#f4eade] rounded-2xl px-6 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#1b1b1b] rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-[#1b1b1b] font-semibold text-sm">
                      We're Here
                    </p>
                    <p className="text-[#1b1b1b]/70 text-xs">
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-linear-to-br from-[#f4eade]/10 to-transparent rounded-3xl p-12 border border-[#f4eade]/10">
            <h3
              className="text-3xl md:text-4xl font-bold text-[#f4eade] mb-4"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Ready to Start Your Project?
            </h3>
            <p className="text-[#f4eade]/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life. find your
              Suitable servicees Now !
            </p>
            <button className="px-8 py-4 bg-[#f4eade] text-[#1b1b1b] rounded-full font-medium text-lg hover:bg-[#e5dbc8] hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </MouseEffect>
  );
}
