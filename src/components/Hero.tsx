"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8 text-center"
        style={{
          backgroundImage: "url('/image/gradient-841143_1280.jpg')",
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl sm:text-6xl font-bold mb-4">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Safa Aamir
            </span>
          </h1>

          <p className="mt-2 text-2xl sm:text-3xl text-gray-300 font-medium">
            <Typewriter
              words={[
                "Front-end Developer",
                "Pixel Perfectionist",
                "Clean Code Advocate",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
