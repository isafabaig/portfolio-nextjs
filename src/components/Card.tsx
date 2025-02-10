import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link: string;
}

const tagColors: { [key: string]: string } = {
  HTML: "bg-red-500 text-white",
  CSS: "bg-blue-500 text-white",
  JavaScript: "bg-yellow-500 text-black",
  NextJS: "bg-black text-white",
  Typescript: "bg-indigo-500 text-white",
  All: "bg-gray-500 text-white",
};

const Card: React.FC<CardProps> = ({ title, desc, img, tags, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-sm">
      {/* Project Image */}
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200"
        >
          View Project
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
              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2 mt-2 ${
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
