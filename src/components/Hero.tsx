"use client";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
 {/* Navbar */}
 <Navbar />

    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcnhljdnwiXE6a1pnuq6wuGzbOWNhkHbJHshsXg9wKarKh5FM9EMNZZhQQNyb-OKwyXc&usqp=CAU' ) `, 
      }}
    >

      {/* Content Container */}
      <div className="container mx-auto flex items-center justify-center space-x-8">
        {/* Left Side: Name */}
        <div className="text-center lg:text-left ">

          <h1 className="text-[40px] sm:text-[40px] lg:text-[60px] font-bold leading-tight">
      I am <br />
      <span className="text-blue-500">
        <Typewriter
          words={["Safa Aamir", "Front-end Developer"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>

        {/* Profile Picture */}
        <div>
          <Image
          src={"/image/bgimage.png"}
          alt="Profile Picture"
          width={200} height={200}
          className="lg:w-[300px] lg:h-[300px] object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
      </div>
    </div>
</div>

    </div>

  );
}
