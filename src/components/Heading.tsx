"use client";
import React from "react";

interface PropsType {
  title: React.ReactNode;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div
      id="projects"
      className="font-bold text-6xl flex justify-center items-center pt-24 scroll-mt-20"
    >
      <p className="border-b-4 border-gray-500 inline-block pb-4">{title}</p>
    </div>
  );
};

export default Heading;
