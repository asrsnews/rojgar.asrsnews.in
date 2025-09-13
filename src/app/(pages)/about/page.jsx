// src/app/(pages)/about/page.jsx

import React from "react";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
          About ASRS
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">ASRS News</span>! We are
          your trusted digital news platform, providing the latest updates on
          jobs, sarkari notifications, and important events in India. Our goal
          is to deliver accurate, timely, and real news that helps our readers
          stay informed.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
          Whether it's employment opportunities, government updates, or current
          affairs, ASRS News ensures you never miss an important update. Stay
          connected with us!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
