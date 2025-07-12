import React from "react";
import { FaBalanceScale } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-white border-t border-gray-600 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
  
        <div className="flex items-center justify-center md:justify-start">
          <FaBalanceScale className="text-yellow-500 text-4xl md:text-5xl" />
          <h1 className="text-2xl md:text-3xl font-semibold ms-3">LegalStack</h1>
        </div>

        <p className="text-gray-400 text-sm md:text-base">
          © 2025 LegalStack. Empowering legal professionals with AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
