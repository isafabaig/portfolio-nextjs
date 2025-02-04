'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32">
      <h2 className="text-blue-500 font-bold text-6xl text-center">About Me</h2>
      <div className="max-w-4xl p-5">
      <p className="text-lg text-gray-800 leading-relaxed text-center">
  I am a passionate frontend developer skilled in crafting intuitive and responsive user interfaces.
  My expertise includes HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, Shadcn, and Figma.
  I am currently enhancing my skills by working with Next.js, creating dynamic and performance-optimized web applications.
  Additionally, I have experience integrating data into Sanity CMS through API, enabling seamless content management for dynamic websites.
  With a commitment to clean code and exceptional design, I aim to deliver seamless user experiences.
</p>
</div>

      <div  id="about" className="text-center text-xl">
        {/* Explore more Button */}
        <Link href={'/AboutDetail'}>
        <motion.button
   className="p-4 bg-blue-400 rounded shadow-md text-white"
   whileHover={{
     scale: 1.1,
     background: "linear-gradient(to right, #4facfe, #00f2fe)",
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
};