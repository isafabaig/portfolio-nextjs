'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6 flex flex-col items-center" data-aos="fade-up">
      
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-blue-500 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* About Content Wrapper */}
      <motion.div
        className="max-w-4xl text-lg text-gray-300 leading-relaxed text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>
          I am a passionate frontend developer skilled in crafting intuitive and responsive user interfaces.
          My expertise includes <strong className="text-yellow-500">HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, Shadcn, and Figma</strong>.
          I am currently enhancing my skills by working with <strong className="text-blue-400">Next.js</strong>, creating dynamic and performance-optimized web applications. 
          Additionally, I have experience integrating data into Sanity CMS through APIs for seamless content management.
          I am also learning <strong className="text-green-400">Python</strong> to expand my backend development skills and build more robust applications.
          With a commitment to clean code and exceptional design, I aim to deliver seamless user experiences.
        </p>
      </motion.div>

      {/* Explore More Button */}
      <div className="mt-10">
        <Link href="/aboutdetail">
          <motion.button
            className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md"
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(to right, #4facfe, #00f2fe)",
              boxShadow: "0px 0px 15px rgba(79, 172, 254, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Explore More
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
