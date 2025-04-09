"use client";

import React, { useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiBootstrap,
  SiPython,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    percentage: 90,
    icon: <SiHtml5 className="text-orange-600" />,
    desc: "Solid understanding of semantic structure and web accessibility.",
    color: "#f97316",
  },
  {
    name: "CSS",
    percentage: 85,
    icon: <SiCss3 className="text-blue-600" />,
    desc: "Proficient in layouts, animations, and responsiveness.",
    color: "#2563eb",
  },
  {
    name: "Tailwind CSS",
    percentage: 80,
    icon: <SiTailwindcss className="text-cyan-400" />,
    desc: "Building fast UI with utility-first styling.",
    color: "#22d3ee",
  },
  {
    name: "Bootstrap",
    percentage: 75,
    icon: <SiBootstrap className="text-purple-600" />,
    desc: "Experience with grid and components for quick layouts.",
    color: "#9333ea",
  },
  {
    name: "Next.js",
    percentage: 70,
    icon: <SiNextdotjs className="text-gray-900" />,
    desc: "Using Next.js for building dynamic frontend-only apps.",
    color: "#000",
  },
  {
    name: "Figma",
    percentage: 70,
    icon: <SiFigma className="text-pink-500" />,
    desc: "Translating clean Figma designs into pixel-perfect code.",
    color: "#ec4899",
  },
  {
    name: "JavaScript",
    percentage: 50,
    icon: <SiJavascript className="text-yellow-400" />,
    desc: "Comfortable with DOM manipulation and interactivity.",
    color: "#facc15",
  },
  {
    name: "TypeScript",
    percentage: 50,
    icon: <SiTypescript className="text-blue-500" />,
    desc: "Using TypeScript for type safety in React apps.",
    color: "#3b82f6",
  },
  {
    name: "Python",
    percentage: 45,
    icon: <SiPython className="text-yellow-500" />,
    desc: "Currently learning and exploring Python with Streamlit.",
    color: "#eab308",
  },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section id="skills" className="pt-24">
      <h2 className="text-center text-5xl font-bold text-blue-500 mb-8" data-aos="fade-up">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-10 px-4" >
        {displayedSkills.map((skill, idx) => (
          <div
            key={idx}
            className="w-64 p-5 bg-black rounded-2xl shadow-md hover:shadow-blue-400 transition-all duration-300 text-center" data-aos="fade-up"
          >
            <div className= "relative w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" data-aos="zoom-in">
              <div
                className="w-24 h-24 rounded-full"
                style={{
                  background: `conic-gradient(${skill.color} ${visible ? skill.percentage * 3.6 : 0}deg, #e5e7eb 0deg)`,
                }}
              >
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-2xl">
                  {skill.icon}
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">{skill.name}</h3>
            <p className="text-sm mt-1">{skill.desc}</p>
            <p className="mt-2 text-indigo-600 font-bold text-lg">{skill.percentage}%</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Skills;
