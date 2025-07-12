import React from "react";
import Navbar from "../components/Navbar/";
import { motion } from "framer-motion";
import { FaBrain, FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineFileSearch, AiOutlineRobot } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineCheckCircle } from "react-icons/ai";
import { RiShieldCheckLine, RiArrowRightCircleLine } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import Footer from "../components/Footer";
import { FaRegCommentDots, FaFileAlt } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaBrain />,
      head: "AI Legal Assistant",
      desc: "Get instant answers to legal questions with AI-powered responses",
    },
    {
      icon: <AiOutlineFileSearch />,
      head: "Document Analysis",
      desc: "Upload and analyze legal documents with intelligent insights",
    },
    {
      icon: <AiOutlineSearch />,
      head: "Smart Search",
      desc: "Find relevant information quickly with advanced search capabilities",
    },
    {
      icon: <RiShieldCheckLine />,
      head: "Secure & Private",
      desc: "Your data is encrypted and protected with enterprise-grade security",
    },
  ];

  const steps = [
    {
      icon: <FaRegCommentDots className="w-8 h-8 text-blue-400" />,
      number: "01",
      title: "Describe Your Legal Issue",
      description: "Tell us your legal problem in plain English.",
      features: [
        "Natural language processing",
        "Context understanding",
        "Smart follow-up questions",
      ],
    },
    {
      icon: <FaBrain className="w-8 h-8 text-purple-400" />,
      number: "02",
      title: "AI Analysis & Research",
      description: "AI checks legal databases to give insights.",
      features: ["Case law analysis", "Statute research", "Risk assessment"],
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-green-400" />,
      number: "03",
      title: "Get Personalized Legal Guidance",
      description: "Receive tailored advice and documents.",
      features: [
        "Custom legal advice",
        "Document generation",
        "Action plan creation",
      ],
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0f172a] px-4">
        <div className="max-w-4xl text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Your AI-Powered{" "}
            <span className="text-yellow-500">Legal Assistant</span>
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400 mt-6">
            Get instant answers to legal questions, analyze documents, and
            navigate complex legal matters with confidence. LegalStack combines
            cutting-edge AI with comprehensive legal knowledge.
          </p>
          <div className="flex md:flex-row flex-col text-xl font-medium justify-center mt-8 gap-4 md:gap-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black md:px-4 md:py-2 px-2 py-1 rounded-lg">
              Start Your Legal Research
            </button>
            <button className="hover:bg-white hover:text-black px-2 py-1 cursor-pointer border md:px-4 md:py-2 rounded-lg">
              How it works
            </button>
          </div>
        </div>
      </div>
      <div className="pt-16 px-4 flex flex-row justify-center text-white font-bold bg-[#0f172a]">
        <div className="">
          <motion.h1
            className="text-3xl md:text-5xl text-center"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Everything You Need for Legal Research
          </motion.h1>
          <p className="text-md md:text-xl font-medium text-center max-w-2xl mx-auto text-gray-400 mt-6">
            Powerful tools designed specifically for legal professionals,
            students, and anyone navigating legal challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-6 p-4 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col shadow-lg bg-gray-900 border border-gray-500 p-4 max-w-80 rounded-xl items-center mx-auto gap-4"
              >
                <div className="h-auto w-auto text-3xl bg-yellow-100 font-bold rounded-lg p-2 text-yellow-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-2xl">{feature.head}</h3>
                  <p className="text-md mt-4 font-medium text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-16 py-16 px-4 text-white bg-[#0f172a]">
        <h1 className="text-4xl font-bold text-center mb-4">How it Works?</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Get legal help in three simple steps — quick, AI-powered, and
          effective.
        </p>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="md:flex md:items-start md:gap-8 bg-slate-800/40 p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>{step.icon}</div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <ul className="text-gray-400 list-disc list-inside">
                  {step.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-2">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">
            Join others who solved their legal queries using our AI assistant.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium">
            Start Your Legal Journey
          </button>
        </div>
      </div>

      <div className="pb-16 pt-16 flex md:flex-row flex-col mx-auto text-center text-white gap-8 p-4 bg-[#152038] justify-center">
        <div className="border w-full h-auto md:w-1/2 mt-10 mb-2 md:ms-20 p-4">
          <div className="flex justify-center">
            <HiUserGroup className="text-yellow-500 text-5xl" />
          </div>
          <h1 className="text-2xl font-bold mt-2">Trusted by Legal Teams</h1>
          <p className="md:text-xl font-medium text-center max-w-2xl mx-auto text-gray-400 mt-6">
            Join thousands of legal professionals who rely on LegalStack for
            accurate, fast legal research and document analysis.
          </p>
          <div className="flex justify-between p-10">
            <div>
              <h1 className="text-xl text-yellow-500 font-bold">500+</h1>
              <h1 className="text-lg">Law Firms</h1>
            </div>
            <div>
              <h1 className="text-xl text-yellow-500 font-bold">10k+</h1>
              <h1 className="text-lg">Legal Queries</h1>
            </div>
            <div>
              <h1 className="text-xl text-yellow-500 font-bold">95%</h1>
              <h1 className="text-lg">Accuracy Rate</h1>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto md:w-1/2 mt-10 text-start p-4 md:me-20">
          <h1 className="text-3xl font-bold mx-auto">
            Built for Legal Professionals
          </h1>
          <p className="md:text-lg font-medium max-w-2xl mx-auto text-gray-400 mt-6">
            Whether you're a practicing attorney, law student, or legal
            researcher, LegalStack provides the tools you need for comprehensive
            legal analysis.
          </p>
          <ul className="mt-4 text-lg">
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <AiOutlineCheckCircle className="text-green-400" /> Legal research
              and case precedent lookup
            </motion.li>
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            >
              <AiOutlineCheckCircle className="text-green-400" />
              Contract analysis and review
            </motion.li>
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              <AiOutlineCheckCircle className="text-green-400" />
              Compliance questions and regulatory guidance
            </motion.li>
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              <AiOutlineCheckCircle className="text-green-400" />
              Legal document drafting assistance
            </motion.li>
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
            >
              <AiOutlineCheckCircle className="text-green-400" />
              Case law citation and reference
            </motion.li>
            <motion.li
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <AiOutlineCheckCircle className="text-green-400" />
              Statutory interpretation and analysis
            </motion.li>
          </ul>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
