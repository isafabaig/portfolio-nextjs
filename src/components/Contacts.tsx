"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUser, FaRegCommentDots } from "react-icons/fa";

const Contacts = () => {
  return (
    <div id="contact" className="pt-10" data-aos="fade-up">
      <h1 className="text-blue-500 font-bold text-5xl text-center pb-10">Get In Touch</h1>

      <div className="pt-12 grid sm:grid-cols-2 gap-16 p-6 mx-auto max-w-6xl bg-white/60 backdrop-blur-sm rounded-xl shadow-xl">
        {/* Left Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-gray-800 text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-sm">
              Have an idea, project, or just want to chat about tech? Reach out and I'll get back to you as soon as possible!
            </p>

            {/* Email */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaEnvelope size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Email</p>
                <a href="mailto:aamirsafa9@gmail.com" className="text-blue-600 hover:underline text-sm">
                  aamirsafa9@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <p className="text-gray-800 font-semibold mb-3">Social Profiles</p>
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/safa-aamir-823b582b1/" target="_blank" rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform">
                  <FaLinkedin size={28} className="text-blue-700" />
                </a>
                <a href="https://github.com/isafabaig" target="_blank" rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform">
                  <FaGithub size={28} className="text-gray-800" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 py-3 rounded-md bg-gray-100 text-sm text-gray-700 outline-blue-500 focus:bg-white"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 py-3 rounded-md bg-gray-100 text-sm text-gray-700 outline-blue-500 focus:bg-white"
              required
            />
          </div>

          <div className="relative">
            <FaRegCommentDots className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Subject"
              className="w-full pl-10 py-3 rounded-md bg-gray-100 text-sm text-gray-700 outline-blue-500 focus:bg-white"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-sm text-gray-700 outline-blue-500 focus:bg-white"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
