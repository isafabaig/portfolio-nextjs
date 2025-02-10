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
    link: "https://restaurant-clone-topaz.vercel.app/",
  },
  {
    id: 1,
    title: "Pakola Clone Website",
    desc: "A Pakola clone website by using HTML and CSS",
    img: "/image/project_02.png",
    tags: ["HTML", "CSS"],
    link: "https://pakola-web-clone.vercel.app/",
  },
  {
    id: 2,
    title: "Tech Force Pakistan Clone Website",
    desc: "A clone website by using HTML, CSS and JavaScript",
    img: "/image/project_03.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://tech-force-pakistan-chi.vercel.app/#",
  },
  {
    id: 3,
    title: "Figma Template Website",
    desc: "A pixel-perfect Figma template building design",
    img: "/image/project_04.png",
    tags: ["NextJS"],
    link: "https://milestone5-safa.vercel.app/",
  },
  {
    id: 4,
    title: "Countdown Timer",
    desc: "A HTML, CSS and JS based stop watch app",
    img: "/image/project_05.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://stop-watch-js-one.vercel.app/",
  },
  {
    id: 5,
    title: "Todo List",
    desc: "HTML, CSS and JS based Todo List for managing and organizing regular work",
    img: "/image/project_06.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://to-do-list-seven-theta-16.vercel.app/",
  },
  {
    id: 6,
    title: "ATM machine",
    desc: "A React and Typescript based app to check current balance and withdraw your cash",
    img: "/image/project_07.png",
    tags: ["Typescript"],
    link: "https://milestone5-safa.vercel.app/",
  },
  {
    id: 7,
    title: "Number Guessing Game",
    desc: "A React and Typescript based number guessing game",
    img: "/image/project_08.png",
    tags: ["Typescript"],
    link: "https://cli-number-guessing-eight.vercel.app/",
  },
  {
    id: 8,
    title: "Static Interactive Resume",
    desc: "HTML, CSS based resume",
    img: "/image/project_09.png",
    tags: ["HTML", "CSS"],
    link: "https://live-resume-chi.vercel.app/",
  },
  {
    id: 9,
    title: "Rental E-commerce",
    desc: "A dynamic Rental Car website by using Next.JS",
    img: "/image/Ads 2.png",
    tags: ["NextJS"],
    link: "https://second-hackathon-five.vercel.app/",
  },
];
const tagOptions = ["All", "HTML", "CSS", "JavaScript", "NextJS", "Typescript"];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // Filter projects based on selected tag
  const filteredProjects = selectedTag === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <section className=" text-blue-600 py-16">
      {/* Section Heading */}
      <Heading title="My Projects" />

      {/* Tag Filter Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        {tagOptions.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              selectedTag === tag ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
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
                link={project.link}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-400">No projects found for "{selectedTag}"</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;