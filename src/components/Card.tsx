import React from "react";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link: string; 
}

const Card: React.FC<CardProps> = ({ title, desc, img, tags, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-sm">
      {/* Project Image */}
      <img
        src={img}
        alt={title}
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
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white-600">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-2">


            

          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-black  bg-gray-200 px-2 py-1 rounded-md"
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



