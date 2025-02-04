"use client";

import React, { useEffect, useState } from "react";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 50 },
  { name: "TypeScript", percentage: 50 },
  { name: "Tailwind CSS", percentage: 80 },
  { name: "Next.JS", percentage: 70 },
  { name: "Figma", percentage: 70 },
  { name: "Bootstrap", percentage: 60 },
];

// Sort skills in descending order by percentage
skills.sort((a, b) => b.percentage - a.percentage);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <div id="skills" className="py-10 bg-gray-50">
      <h2 className="text-blue-500 font-bold text-6xl text-center">
        My Skills
      </h2>
      <div className="pt-10 flex flex-wrap justify-center gap-8 mt-6">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="relative w-32 h-32 flex flex-col items-center transform transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <div
              className="relative w-32 h-32 rounded-full"
              style={{
                background: `conic-gradient(#4f46e5 ${isVisible ? skill.percentage * 3.6 : 0}deg, #e5e7eb 0deg)`,
                transition: "background 2s ease-out",
              }}
            >
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-500">
                  {isVisible ? skill.percentage : 0}%
                </span>
              </div>
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-700">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Skills;
