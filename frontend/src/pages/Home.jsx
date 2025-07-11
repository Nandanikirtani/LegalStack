import React from "react";
import Navbar from "../components/Navbar/";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0f172a] px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold">
            Your AI-Powered{" "}
            <span className="text-yellow-500">Legal Assistant</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400 mt-6">
            Get instant answers to legal questions, analyze documents, and
            navigate complex legal matters with confidence. LegalStack combines
            cutting-edge AI with comprehensive legal knowledge.
          </p>
          <div className="flex md:flex-row flex-col text-xl shadow-lg font-medium justify-center mt-8 gap-4 md:gap-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black md:px-4 md:py-2 px-2 py-1 rounded-lg">Start Your Legal Research</button>
            <button className= "hover:bg-white hover:text-black px-2 py-1 cursor-pointer border md:px-4 md:py-2 rounded-lg">How it works</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
