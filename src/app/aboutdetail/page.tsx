"use client";
import React from "react";
import { motion } from "framer-motion";
import CVSection from "@/components/CVSection";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  { name: "HTML5", color: "text-orange-500", icon: "🌐" },
  { name: "CSS3", color: "text-blue-500", icon: "🎨" },
  { name: "JavaScript", color: "text-yellow-500", icon: "⚡" },
  { name: "TypeScript", color: "text-blue-700", icon: "📘" },
  { name: "Next.js", color: "text-gray-900", icon: "🚀" },
  { name: "Tailwind CSS", color: "text-teal-500", icon: "🌊" },
  { name: "Bootstrap", color: "text-purple-600", icon: "📦" },
  { name: "Shadcn", color: "text-indigo-500", icon: "🛠️" },
  { name: "Figma", color: "text-pink-500", icon: "🎨" },
  { name: "Sanity CMS", color: "text-red-500", icon: "📊" },
];

export default function Aboutdetail() { // Fixed function name
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-blue-500 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typewriter words={["More About Me"]} loop={true} cursor cursorStyle="|" typeSpeed={100} />
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I am a <strong>passionate frontend developer</strong> dedicated to crafting intuitive, <strong>responsive, and interactive web experiences</strong>.
        With expertise in modern <strong>UI technologies and frameworks</strong>, I specialize in building visually appealing and high-performance applications.
      </motion.p>

      {/* Skills Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2 hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-3xl">{skill.icon}</span>
            <h3 className={`font-semibold text-xl ${skill.color}`}>
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* CV Section */}
      <div className="mt-10 px-6 py-3 border rounded-full bg-blue-500 text-white shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
        <CVSection />
      </div>

      {/* Back to Home Button */}
      <motion.button
        className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.history.back()}
      >
        ← Go Back
      </motion.button>
    </div>
  );
}
