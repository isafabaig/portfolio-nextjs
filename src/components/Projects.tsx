"use client";

import React, { useState } from "react";
import Card from "./Card";
import Heading from "./Heading";

const projects = [
  {
    id: 0,
    title: "Restaurant Clone Website",
    desc: "A Restaurant clone website by using HTML and CSS",
    img: "/image/project_01.png",
    tags: ["HTML", "CSS"],
    vercel: "https://restaurant-clone-topaz.vercel.app/",
    github: "https://github.com/isafabaig/restaurant-clone",
  },
  {
    id: 1,
    title: "Pakola Clone Website",
    desc: "A Pakola clone website by using HTML and CSS",
    img: "/image/project_02.png",
    tags: ["HTML", "CSS"],
    vercel: "https://pakola-web-clone.vercel.app/",
    github: "https://github.com/isafabaig/pakola-web---clone",
  },
  {
    id: 2,
    title: "Tech Force Pakistan Clone Website",
    desc: "A clone website by using HTML, CSS and JavaScript",
    img: "/image/project_03.png",
    tags: ["HTML", "CSS", "JavaScript"],
    vercel: "https://pakola-web-clone.vercel.app/",
    github: "https://github.com/isafabaig/Tech-Force-Pakistan",
  },
  {
    id: 3,
    title: "Figma Template Website",
    desc: "A pixel-perfect Figma template building design",
    img: "/image/project_04.png",
    tags: ["NextJS"],
    vercel: "https://pakola-web-clone.vercel.app/",
    github: "https://github.com/isafabaig/figma-template-building",
  },
  {
    id: 4,
    title: "Countdown Timer",
    desc: "A HTML, CSS and JS based stop watch app",
    img: "/image/project_05.png",
    tags: ["HTML", "CSS", "JavaScript"],
    vercel: "https://stop-watch-js-one.vercel.app/",
    github: "https://github.com/isafabaig/stop-watch-JS",
  },
  {
    id: 5,
    title: "Todo List",
    desc: "HTML, CSS and JS based Todo List for managing and organizing regular work",
    img: "/image/project_06.png",
    tags: ["HTML", "CSS", "JavaScript"],
    vercel: "https://to-do-list-seven-theta-16.vercel.app/",
    github: "https://github.com/isafabaig/To-do-List",
  },
  {
    id: 6,
    title: "ATM machine",
    desc: "A React and Typescript based app to check current balance and withdraw your cash",
    img: "/image/project_07.png",
    tags: ["Typescript"],
    vercel: "https://milestone5-safa.vercel.app/",
    github: "https://github.com/yourusername/restaurant-clone",
  },
  {
    id: 7,
    title: "Number Guessing Game",
    desc: "A React and Typescript based number guessing game",
    img: "/image/project_08.png",
    tags: ["Typescript"],
    vercel: "https://cli-number-guessing-eight.vercel.app/",
    github: "https://github.com/yourusername/restaurant-clone",
  },
  {
    id: 8,
    title: "Static Interactive Resume",
    desc: "HTML, CSS based resume",
    img: "/image/project_09.png",
    tags: ["HTML", "CSS"],
    vercel: "https://live-resume-chi.vercel.app/",
    github: "https://github.com/yourusername/restaurant-clone",
  },
  {
    id: 9,
    title: "Rental E-commerce",
    desc: "A dynamic Rental Car website by using Next.JS",
    img: "/image/Ads 2.png",
    tags: ["NextJS"],
    vercel: "https://second-hackathon-five.vercel.app/",
    github: "https://github.com/yourusername/restaurant-clone",
  },
  {
    id: 10,
    title: "E-commerce web design",
    desc: "E-commerce Web Design - Alibaba Style (Figma Marketplace)",
    img: "/image/figma.png",
    tags: ["NextJS"],
    vercel: "https://internship-ecommerce-web.vercel.app/",
    github: "https://github.com/isafabaig/internship-ecommerceWeb",
  },
  {
    id: 11,
    title: "Library Book Manager",
    desc: "A Streamlit app for managing book records — add, search, and update library books with ease.",
    img: "/image/book.png",
    tags: ["Python", "Streamlit"],
    vercel: "https://library-manager--ui-safaaamir.streamlit.app/",
    github: "https://github.com/isafabaig/library-manager--UI",
  },
  {
    id: 12,
    title: "Password Strength Meter",
    desc: "An interactive password checker that visually shows strength based on complexity and safety rules.",
    img: "/image/password strength.png",
    tags: ["Python", "Streamlit"],
    vercel: "https://password-strength-meter--safaaamir.streamlit.app/",
    github: "https://github.com/isafabaig/Password-strength-meter--python",
  },
  {
    id: 13,
    title: "Unit Converter",
    desc: "A handy Streamlit tool to convert units like length, weight, and temperature in real-time.",
    img: "/image/unit-converter.png",
    tags: ["Python", "Streamlit"],
    vercel: "https://unit-converter-bysafaaamir.streamlit.app/",
    github: "https://github.com/isafabaig/unit-converter",
  },
  {
    id: 14,
    title: "Text Analyzer",
    desc: "Analyze any text with features like word count, sentiment detection, and readability score.",
    img: "/image/textanalyzer.png",
    tags: ["Python", "Streamlit"],
    vercel: "https://text-analyzer-python-safaaamir.streamlit.app/",
    github: "https://github.com/isafabaig/Text-Analyzer-python",
  },
];

const tagColors = {
  HTML: "bg-red-500",
  CSS: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  NextJS: "bg-gray-800",
  Typescript: "bg-sky-600",
  Python: "bg-green-600",
  Streamlit: "bg-orange-500",
};

const tagOptions = ["All", ...Object.keys(tagColors)];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section className="text-blue-600 ">
      <Heading title="See my Projects" />

      <div className="flex justify-center flex-wrap gap-3 mt-8">
        {tagOptions.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full font-semibold transition text-white shadow-md ${
              selectedTag === tag
                ? `${tag === "All" ? "bg-blue-500" : tagColors[tag as keyof typeof tagColors] || "bg-blue-500"}`
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                desc={project.desc}
                img={project.img}
                tags={project.tags}
                vercel={project.vercel}
                github={project.github}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-400">
              No projects found for &quot;{selectedTag}&quot;
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
