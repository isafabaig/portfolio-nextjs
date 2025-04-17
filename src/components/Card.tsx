import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  vercel: string;
  github?: string;
}

const tagColors: { [key: string]: string } = {
  HTML: "bg-red-500 text-white",
  CSS: "bg-blue-500 text-white",
  JavaScript: "bg-yellow-500 text-black",
  NextJS: "bg-black text-white",
  Typescript: "bg-indigo-500 text-white",
  Python: "bg-yellow-300 text-black",
  Streamlit: "bg-orange-300 text-black",
  All: "bg-gray-500 text-white",
};

const Card: React.FC<CardProps> = ({ title, desc, img, tags, vercel, github }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-sm" data-aos="fade-up">
      {/* Project Image */}
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Hover Overlay with Icons */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title="View Code"
            className="text-gray-300 hover:text-[#6e5494] transform hover:scale-125 transition duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>
        )}
        <a
          href={vercel}
          target="_blank"
          rel="noopener noreferrer"
          title="View Project"
          className="text-gray-300 hover:text-[#000000] transform hover:scale-125 transition duration-300"
        >
          <SiVercel className="text-3xl" />
        </a>
      </div>

      {/* Project Info */}
      <div className="mt-4 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                tagColors[tag] || "bg-gray-500 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
