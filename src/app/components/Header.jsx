"use client";

import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full shadow-md">
      {/* 🔹 Top Bar */}
      <div className="bg-blue-900 text-gray-200 text-sm py-2 px-4 flex justify-between">
        <span className="">📢 Govt Job Updates Daily</span>
        <div className="flex gap-3">
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            YouTube
          </a>
        </div>
      </div>

      {/* 🔹 Middle Bar */}
      <div className="bg-white py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center font-bold rounded-full">
            AS
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">
              Rojgar Updates - ASRS
            </h1>
            <p className="text-gray-600 text-sm">आज की ताज़ा सरकारी नौकरियां</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-full md:w-80">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      {/* 🔹 Bottom Nav (Responsive + Sticky) */}
      <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
          {/* Logo / Brand Name */}
          <a href="/" className="text-lg font-bold hover:text-yellow-300">
            ASRS Jobs
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden flex items-center px-2 py-1 border rounded text-white border-white hover:bg-blue-600"
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm md:text-base">
            <a href="#" className="hover:text-yellow-300">
              Latest Jobs
            </a>
            <a href="#" className="hover:text-yellow-300">
              Results
            </a>
            <a href="#" className="hover:text-yellow-300">
              Admit Cards
            </a>
            <a href="#" className="hover:text-yellow-300">
              Admissions
            </a>
            <a href="/about" className="hover:text-yellow-300">
              About Us
            </a>
            <a href="/contact" className="hover:text-yellow-300">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div
          id="mobile-menu"
          className="md:hidden hidden bg-blue-600 px-4 pb-3"
        >
          <a href="#" className="block py-2 hover:text-yellow-300">
            Latest Jobs
          </a>
          <a href="#" className="block py-2 hover:text-yellow-300">
            Results
          </a>
          <a href="#" className="block py-2 hover:text-yellow-300">
            Admit Cards
          </a>
          <a href="#" className="block py-2 hover:text-yellow-300">
            Admissions
          </a>
          <a href="/about" className="block py-2 hover:text-yellow-300">
            About Us
          </a>
          <a href="/contact" className="block py-2 hover:text-yellow-300">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
