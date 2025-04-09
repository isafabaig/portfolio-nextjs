"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" w-full top-0 left-0 overflow-x-hidden bg-gradient-to-r from-black to-gray-700 text-white shadow-lg rounded-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-6">

        <div className="flex items-center px-6 py-4 font-4xl font-bold ">
          <h1>
            PORT<span className="text-yellow-500">FOLIO</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-lg">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className={`transition duration-300 ${index === 0
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-400"
                  }`}
              >
                {item}
              </a>
              {index !== 0 && (
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-900 text-white shadow-md">
          <ul className="flex flex-col items-center gap-5 py-5">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block text-lg py-2 transition duration-300 ${index === 0
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "hover:text-yellow-400"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
