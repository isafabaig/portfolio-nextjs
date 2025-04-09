"use client";
import React from "react";
import { motion } from "framer-motion";
import CVSection from "@/components/CVSection";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  { name: "HTML5", color: "text-orange-500", icon: "🌐", desc: "Markup for web structure" },
  { name: "CSS3", color: "text-blue-500", icon: "🎨", desc: "Styling for responsive designs" },
  { name: "JavaScript", color: "text-yellow-500", icon: "⚡", desc: "Core scripting for interactivity" },
  { name: "TypeScript", color: "text-blue-700", icon: "📘", desc: "Typed superset of JavaScript" },
  { name: "Next.js", color: "text-gray-900", icon: "🚀", desc: "React framework for production" },
  { name: "Tailwind CSS", color: "text-teal-500", icon: "🌊", desc: "Utility-first CSS framework" },
  { name: "Bootstrap", color: "text-purple-600", icon: "📦", desc: "Popular component library" },
  { name: "Shadcn", color: "text-indigo-500", icon: "🛠️", desc: "Beautiful UI components" },
  { name: "Figma", color: "text-pink-500", icon: "🎨", desc: "UI/UX Design tool" },
  { name: "Sanity CMS", color: "text-red-500", icon: "📊", desc: "Headless content platform" },
  { name: "Python", color: "text-green-600", icon: "🐍", desc: "Exploring backend and automation" }
];

export default function Aboutdetail() {
  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center" data-aos="fade-up">
      {/* Heading */}
      <motion.h2
        className="text-5xl sm:text-5xl font-bold text-blue-500 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typewriter
          words={["More About Me"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
        />
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg max-w-3xl text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I am a <strong>passionate frontend developer</strong> dedicated to crafting <strong>responsive</strong> and <strong>interactive web experiences</strong>. I specialize in modern <strong>UI frameworks</strong> like Next.js and Tailwind CSS, and I'm currently <strong>exploring Python</strong> to expand my skills into <strong>backend development and automation</strong>. I love building things that look great and work even better.
      </motion.p>

      {/* Skills Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-xl p-5 flex flex-col items-center text-center space-y-2 hover:scale-105 transition duration-300 border border-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-4xl">{skill.icon}</span>
            <h3 className={`font-bold text-lg ${skill.color}`}>{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CV Section */}
      <div className="mt-10 px-6 py-3 border rounded-full bg-blue-500 text-white shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
        <CVSection />
      </div>

      {/* Back to Home Button */}
      <motion.button
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.history.back()}
      >
        ← Go Back
      </motion.button>
    </div>
  );
}
