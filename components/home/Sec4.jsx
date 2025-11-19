export default function Sec4() {
  const socialPlatforms = [
    {
      name: "Fiverr",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 12.5c0 6.35-5.15 11.5-11.5 11.5S0 18.85 0 12.5 5.15 1 11.5 1 23 6.15 23 12.5zM11.5 3C6.26 3 2 7.26 2 12.5S6.26 22 11.5 22 21 17.74 21 12.5 16.74 3 11.5 3zm5.5 11h-1v-3h1v3zm-2-4h-4v1h4v-1zm-5 0H7v4h1v-3h2v-1zm7-2h-1v1h1V8z" />
        </svg>
      ),
      handle: "@cybrox",
      followers: "5K+ Clients",
      engagement: "4.9★ Rating",
      color: "from-[#1DBF73] to-[#00A65A]",
      bgColor: "bg-[#1DBF73]/10",
      link: "#",
    },
    {
      name: "Upwork",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      handle: "@cybrox",
      followers: "3K+ Clients",
      engagement: "100% Success",
      color: "from-[#6FDA44] to-[#4FB82E]",
      bgColor: "bg-[#6FDA44]/10",
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      handle: "@cybrox",
      followers: "10K+ Connections",
      engagement: "500+ Posts",
      color: "from-[#0077B5] to-[#005885]",
      bgColor: "bg-[#0077B5]/10",
      link: "#",
    },
    {
      name: "X (Twitter)",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      handle: "@cybrox",
      followers: "8K+ Followers",
      engagement: "2K+ Tweets",
      color: "from-[#1DA1F2] to-[#0C85D0]",
      bgColor: "bg-[#1DA1F2]/10",
      link: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      handle: "@cybrox",
      followers: "12K+ Followers",
      engagement: "1K+ Posts",
      color: "from-[#E4405F] to-[#C13584]",
      bgColor: "bg-[#E4405F]/10",
      link: "#",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      handle: "@cybrox",
      followers: "15K+ Followers",
      engagement: "5K+ Likes",
      color: "from-[#1877F2] to-[#0C63D4]",
      bgColor: "bg-[#1877F2]/10",
      link: "#",
    },
    {
      name: "Reddit",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
      handle: "r/cybrox",
      followers: "6K+ Members",
      engagement: "500+ Discussions",
      color: "from-[#FF4500] to-[#D93A00]",
      bgColor: "bg-[#FF4500]/10",
      link: "#",
    },
  ];

  return (
    <section className="py-24 px-6 bg-linear-to-b from-white to-[#f4eade]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#1b1b1b]/5 rounded-full mb-6">
            <span className="text-[#1b1b1b] text-sm font-medium tracking-wide">
              CONNECT WITH US
            </span>
          </div>

          <h2
            className="text-5xl md:text-6xl font-bold text-[#1b1b1b] mb-6"
            style={{ fontFamily: "Nippo, sans-serif" }}
          >
            Our Social Presence
          </h2>

          <p className="text-lg text-[#1b1b1b]/70 max-w-2xl mx-auto">
            Join our thriving community across multiple platforms. Stay updated
            with our latest work, insights, and connect with us wherever you are
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#1b1b1b]/5"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${platform.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-100">
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${platform.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-[#1b1b1b] transition-all duration-300">
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Name */}
                <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">
                  {platform.name}
                </h3>

                {/* Handle */}
                <p className="text-[#1b1b1b]/60 text-sm mb-4">
                  {platform.handle}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-linear-to-r ${platform.color}`}
                    ></div>
                    <span className="text-sm text-[#1b1b1b]/80 font-medium">
                      {platform.followers}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-linear-to-r ${platform.color}`}
                    ></div>
                    <span className="text-sm text-[#1b1b1b]/80 font-medium">
                      {platform.engagement}
                    </span>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-[#1b1b1b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#1b1b1b] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-[#f4eade]/10 to-transparent"></div>
          <div className="relative z-10">
            <h3
              className="text-3xl md:text-4xl font-bold text-[#f4eade] mb-4"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Let's Build Something Together
            </h3>
            <p className="text-[#f4eade]/70 mb-8 max-w-2xl mx-auto">
              Ready to start your project? Reach out to us on any platform or
              get in touch directly
            </p>
            <button className="px-8 py-4 bg-[#f4eade] text-[#1b1b1b] rounded-full font-medium text-lg hover:bg-[#e5dbc8] hover:scale-105 transition-all duration-300 shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
