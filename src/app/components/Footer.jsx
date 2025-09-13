"use client";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) return setMessage("Please enter your email");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    }
  };

  return (
    <footer className="bg-[#20124d] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section 1: Logo, slogan, social links */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ASRS News</h2>
          <p className="mb-4 text-gray-300">आज की ताज़ा सरकारी नौकरियां</p>
          <div className="flex gap-4 text-gray-400">
            <a
              href="#"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-sky-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-pink-500 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-gray-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:underline hover:text-gray-200">
                Jobs
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/latest-jobs"
                className="hover:underline hover:text-gray-200"
              >
                Latest Jobs
              </a>
            </li>
            <li>
              <a
                href="/results"
                className="hover:underline hover:text-gray-200"
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="/admissions"
                className="hover:underline hover:text-gray-200"
              >
                Admissions
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-300">Get daily updates in your inbox</p>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSubscribe}
              className="bg-white text-[#20124d] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </div>
          {message && <p className="mt-3 text-yellow-400 text-sm">{message}</p>}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-10 text-gray-400 text-sm border-t border-gray-700 pt-6">
        © 2025 Rojgar Updates by ASRS
      </div>
    </footer>
  );
};

export default Footer;
