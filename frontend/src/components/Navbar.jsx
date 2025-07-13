import { useState } from "react";
import React from "react";
import { FaBalanceScale, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed px-4 bg-gradient-to-r from-[#0f172a] to-blue-900 text-white flex h-20 w-full shadow-2xl justify-between z-50">
      <div className="flex items-center md:ms-16 space-x-2">
        <FaBalanceScale className="text-yellow-500 text-5xl" />
        <div>
          <span className="md:text-3xl text-2xl font-semibold ">
            LegalStack
          </span>
          <p className="text-sm text-gray-400">
            Intelligent Legal Research, Simplified
          </p>
        </div>
      </div>

      <div className="md:flex hidden items-center text-lg me-16 space-x-10">
        <a
          href=""
          className="bg-yellow-500 py-2 text-black hover:bg-yellow-600 px-4 rounded-xl"
        >
          Get Started
        </a>
        <Link to="/login">Login</Link>
        <Link to="/login">SignUp</Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f172a] flex flex-col items-start p-4 space-y-6 py-6 md:hidden ">
          <a
            href="#"
            className="bg-yellow-500 text-black py-2 px-6 rounded-xl hover:bg-yellow-600"
          >
            Get Started
          </a>
          <a href="#" className="hover:text-yellow-400 py-2 px-6">
            Login
          </a>
          <a href="#" className="hover:text-yellow-400 py-2 px-6">
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
