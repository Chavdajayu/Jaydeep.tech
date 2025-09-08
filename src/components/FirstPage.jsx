// FirstPage.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";



const FirstPage = () => {
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-400 via-pink-300 to-white">
      {/* Centered blurry floating blobs with animation */}
      <motion.div
        animate={{ 
          x: [0, 30, -30, 0], 
          y: [0, -20, 20, 0], 
          scale: [1, 1.1, 0.95, 1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full 
                bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-30 blur-[120px] -z-10"
      />

      <motion.div
        animate={{ 
          x: [0, -30, 30, 0], 
          y: [0, 20, -20, 0], 
          scale: [1, 1.05, 0.9, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/3 w-[35rem] h-[35rem] rounded-full 
                bg-gradient-to-tr from-pink-500 to-red-400 opacity-30 blur-[100px] -z-10"
      />

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-3xl bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-6 py-1.5 shadow-lg">
        {/* Logo */}
        <div className="flex items-center py-2">
          {/* <div className="h-9 w-9 flex items-center justify-center rounded-full bg-black text-white font-bold"> */}
            <img className="h-9 w-9  flex items-center justify-center rounded-full  text-white font-bold" src="./images/logo.png" alt="logo" />
          {/* </div> */}
        </div>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-800">
          <li>
            <a href="#home" className="px-3 py-1 rounded-full bg-purple-600 text-white shadow">
              Home
            </a>
          </li>
          <li><a href="#about" className="hover:text-gray-900">About</a></li>
          <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-900">Skills</a></li>
          <li><a href="#experience" className="hover:text-gray-900">Experience</a></li>
          <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
        </ul>

        {/* Theme toggle */}
        <button className="mr-3 w-[2.5rem] h-[2.5rem] border-opacity-40 flex items-center justify-center hover:scale-[1.3] active:scale-[1.5] transition-all"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"></path></svg></button>
      </nav>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center text-center pt-36 px-6">
        {/* Avatar */}
        <div className="relative">
          <img
            src="./images/Jaydeep.jpg"
            alt="Profile"
            className="h-32 w-32 md:h-36 md:w-36 rounded-full border-[6px] border-white shadow-xl object-cover"
          />
          <span className="absolute -bottom-2 -right-3 text-2xl">👋</span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed font-normal text-gray-800">
          <span className="font-bold">Hi, I&apos;m Jaydeepsinh Chavda</span>, a{" "}
          <span className="font-bold text-gray-900">Job Seaker</span> from India. I
          specialize in{" "}
          <span className="font-bold">Web and Mobile Development Lerner</span>, and
          I&apos;m passionate about{" "}
          <span className="italic">
            transforming ideas into impactful products
          </span>.
        </h1>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#030712] text-white font-medium shadow-md hover:shadow-lg transition"
          >
            Contact me here →
          </a>
          <a
            href="/MukulChughCV.pdf"
            download
            className="px-6 py-3 rounded-full bg-white text-black font-medium shadow-md hover:shadow-lg transition"
          >
            Download CV ↓
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://linkedin.com/in/mukulchugh"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow hover:shadow-lg transition"
          >
            <FaLinkedin className="text-black text-xl" />
          </a>
          <a
            href="https://github.com/mukulchugh"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow hover:shadow-lg transition"
          >
            <FaGithub className="text-black text-xl" />
          </a>
          <a
            href="https://twitter.com/themukulchugh"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow hover:shadow-lg transition"
          >
            <FaTwitter className="text-black text-xl" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;