"use client";
import MouseEffect from "@/components/about/MouseEffect";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "business",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <MouseEffect>
      <div className="min-h-screen bg-linear-to-br from-[#f4eade] to-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4 animate-slide-up"
              style={{ fontFamily: "Nippo, sans-serif" }}
            >
              Get in Touch
            </h1>
            <p className="text-lg text-[#3a3a3a] max-w-2xl mx-auto">
              Have a project in mind or looking to join our team? We'd love to
              hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-[#e5dbc8]">
                <h2
                  className="text-2xl font-bold text-[#1b1b1b] mb-6"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1b1b1b] text-[#f4eade] p-3 rounded-full">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1b1b1b] mb-1">
                        Email
                      </h3>
                      <p className="text-[#3a3a3a]">contact@cybrox.com</p>
                      <p className="text-[#3a3a3a] text-sm">
                        careers@cybrox.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1b1b1b] text-[#f4eade] p-3 rounded-full">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1b1b1b] mb-1">
                        Phone
                      </h3>
                      <p className="text-[#3a3a3a]">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1b1b1b] text-[#f4eade] p-3 rounded-full">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1b1b1b] mb-1">
                        Office
                      </h3>
                      <p className="text-[#3a3a3a]">
                        123 Digital Avenue, Suite 400
                      </p>
                      <p className="text-[#3a3a3a]">San Francisco, CA 94102</p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1b1b1b] text-[#f4eade] p-3 rounded-full">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1b1b1b] mb-1">
                        Follow Us
                      </h3>
                      <div className="flex space-x-3 text-[#3a3a3a]">
                        <a
                          href="#"
                          className="hover:text-[#1b1b1b] transition-colors"
                        >
                          LinkedIn
                        </a>
                        <span>•</span>
                        <a
                          href="#"
                          className="hover:text-[#1b1b1b] transition-colors"
                        >
                          Twitter
                        </a>
                        <span>•</span>
                        <a
                          href="#"
                          className="hover:text-[#1b1b1b] transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-[#e5dbc8]">
                <h2
                  className="text-2xl font-bold text-[#1b1b1b] mb-4"
                  style={{ fontFamily: "Nippo, sans-serif" }}
                >
                  Business Hours
                </h2>
                <div className="space-y-2 text-[#3a3a3a]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-[#e5dbc8]">
              <h2
                className="text-2xl font-bold text-[#1b1b1b] mb-6"
                style={{ fontFamily: "Nippo, sans-serif" }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-[#1b1b1b] font-semibold mb-2">
                    I'm interested in:
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="business"
                        checked={formData.inquiryType === "business"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-[#3a3a3a]">Business Inquiry</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="career"
                        checked={formData.inquiryType === "career"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-[#3a3a3a]">Career Opportunity</span>
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[#1b1b1b] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#e5dbc8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] bg-[#f4eade]/30"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#1b1b1b] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#e5dbc8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] bg-[#f4eade]/30"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#1b1b1b] font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5dbc8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] bg-[#f4eade]/30"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[#1b1b1b] font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#e5dbc8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] bg-[#f4eade]/30"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#1b1b1b] font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-[#e5dbc8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b1b1b] bg-[#f4eade]/30 resize-none"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1b1b1b] text-[#f4eade] py-4 rounded-full font-semibold hover:bg-[#2a2a2a] transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MouseEffect>
  );
};

export default ContactPage;
