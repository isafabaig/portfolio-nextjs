"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
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

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  // Map tags to specific colors
  const tagColors = {
    HTML: "bg-orange-400 text-white",
    CSS: "bg-blue-400 text-white",
    JavaScript: "bg-yellow-400 text-black",
    NextJS: "bg-gray-800 text-white",
    Typescript: "bg-indigo-400 text-white",
    All: "bg-gray-300 text-black", // For the "All" button
  };

  // Filter data based on the selected tag
  const filteredData =
    selectedTag === "All"
      ? data
      : data.filter((project) => project.tags.includes(selectedTag));

  return (
    <div id="projects" className="pt-12">
      {/* Heading with blue gradient */}
      <Heading
        title={
          <>
            <h1 className="font-bold text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              See My <span className="text-purple-500">Projects</span>
            </h1>
          </>
        }
      />

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8 mt-6">
        {["All", ...Object.keys(tagColors).filter((tag) => tag !== "All")].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                selectedTag === tag
                  ? `${tagColors[tag]} scale-105`
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filteredData.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2 mt-2 ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
}
