// FirstPage.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
    
/**
 * FirstPage.jsx
 * - TailwindCSS required
 * - react-icons recommended (npm i react-icons)
 *
 * Replace name, image src, CV link and social URLs below.
 */

const FirstPage = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Large blurred gradient blobs (background) */}
      <div
        aria-hidden
        className="absolute -left-80 -top-40 w-[60rem] h-[60rem] rounded-full
                   bg-gradient-to-br from-purple-400 via-violet-300 to-transparent
                   opacity-95 filter blur-[90px] pointer-events-none -z-10"
      />
      <div
        aria-hidden
        className="absolute right-[-6rem] top-[-8rem] w-[56rem] h-[56rem] rounded-full
                   bg-gradient-to-br from-pink-300 via-rose-200 to-transparent
                   opacity-95 filter blur-[90px] pointer-events-none -z-10"
      />

      {/* NAVBAR (centered pill) */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                   w-[92%] max-w-4xl flex items-center justify-between
                   bg-white/80 backdrop-blur-md border border-white/40
                   shadow-lg rounded-full px-6 py-3"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="h-9 w-9 rounded-full bg-black text-white font-bold flex items-center justify-center">
            M
          </div>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-sm">
          <li>
            <a
              href="#home"
              className="px-3 py-1 rounded-full bg-white shadow-sm text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-900">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-900">
              Skills
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-900">
              Blog
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-900">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>

        {/* Theme toggle (placeholder) */}
        <button
          className="ml-4 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Toggle theme"
        >
          ☀️
        </button>
      </nav>

      {/* HERO (centered) */}
      <main className="flex flex-col items-center justify-start text-center pt-36 px-6">
        {/* Avatar */}
        <div className="relative">
          <img
            src="https://ik.imagekit.io/kooxhdceru/portfolio/mukul.webp?updatedAt=1682213515842"
            alt="Profile"
            className="h-40 w-40 md:h-44 md:w-44 lg:h-48 lg:w-48 rounded-full
                       object-cover border-8 border-white shadow-2xl"
          />
          {/* small emoji on bottom-right of avatar like screenshot */}
          <span className="absolute -bottom-2 -right-2 text-3xl">👏</span>
        </div>

        {/* Headline - split to closely match lines in screenshot */}
        <h1
          className="mt-8 max-w-[56rem] font-medium text-gray-900
                     text-[22px] md:text-[34px] lg:text-[44px] leading-tight"
          style={{ lineHeight: 1.12 }}
        >
          <span className="font-extrabold">Hi, I&apos;m Mukul Chugh</span>
          <span className="hidden md:inline">, </span>
          <span className="">a </span>
          <span className="font-extrabold">software engineer</span>
          <span className="block mt-4 md:mt-2 font-medium text-[20px] md:text-[28px] lg:text-[34px]">
            India. I specialize in{" "}
            <span className="font-extrabold">Web and Mobile Development</span>,
          </span>
          <span className="block italic mt-3 md:mt-4 font-medium text-[20px] md:text-[28px] lg:text-[34px]">
            and I&apos;m passionate about <span>transforming ideas into</span>
            <span className="block">impactful products</span>
          </span>
        </h1>

        {/* CTAs + Socials */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {/* Dark CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full
                       shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            <span className="text-sm font-medium">Contact me here</span>
            {/* small arrow svg */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* White CV pill */}
          <a
            href="/MukulChughCV.pdf"
            download
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-white/60
                       hover:shadow-lg transition"
          >
            <span className="text-sm font-medium">Download CV</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3v12M7 8l5 5 5-5M5 21h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Social icons (circular) */}
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <a
              href="https://linkedin.com/in/mukulchugh"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-full bg-white shadow flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-700" />
            </a>

            <a
              href="https://github.com/mukulchugh"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-full bg-white shadow flex items-center justify-center"
              aria-label="Github"
            >
              <FaGithub className="text-gray-700" />
            </a>

            <a
              href="https://twitter.com/themukulchugh"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-full bg-white shadow flex items-center justify-center"
              aria-label="X / Twitter"
            >
              <FaTwitter className="text-gray-700" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;



// // Hero.jsx
// import React from "react";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="mb-28 max-w-[52rem] text-center sm:mb-0 scroll-mt-[100rem] mx-auto"
//     >
//       {/* Profile Image */}
//       <div className="flex items-center justify-center">
//         <div className="relative">
//           <img
//             src="https://ik.imagekit.io/kooxhdceru/portfolio/mukul.webp?updatedAt=1682213515842"
//             alt="Your Name"
//             className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
//           />
//           <span className="absolute bottom-0 right-0 text-4xl">👋</span>
//         </div>
//       </div>

//       {/* Intro Text */}
//       <h1 className="mb-10 mt-4 px-4 font-medium leading-relaxed text-xl md:text-3xl">
//         <span className="font-bold">Hi, I&apos;m Your Name</span>, a{" "}
//         <span className="font-bold">software engineer</span>. I specialize in{" "}
//         <span className="font-bold">Web and Mobile Development</span>, and I&apos;m
//         passionate about{" "}
//         <span className="italic">transforming ideas into impactful products</span>.
//       </h1>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
//         <a
//           href="#contact"
//           className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
//           focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
//         >
//           Contact me here
//           <svg
//             className="opacity-70 group-hover:translate-x-1 transition"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//             width="20"
//             height="20"
//           >
//             <path
//               fillRule="evenodd"
//               d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
//               0 0 1 .708-.708l4 4a.5.5 
//               0 0 1 0 .708l-4 4a.5.5 
//               0 0 1-.708-.708L13.293 8.5H1.5A.5.5 
//               0 0 1 1 8"
//             />
//           </svg>
//         </a>

//         <a
//           href="/YourCV.pdf"
//           download
//           className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
//           focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border 
//           dark:bg-white/10"
//         >
//           Download CV
//           <svg
//             className="opacity-60 group-hover:translate-y-1 transition"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             width="20"
//             height="20"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 17a1 1 0 011-1h12a1 1 0 
//               110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 
//               0 011.414 0L9 10.586V3a1 1 0 
//               112 0v7.586l1.293-1.293a1 1 0 
//               111.414 1.414l-3 3a1 1 0 
//               01-1.414 0l-3-3a1 1 0 
//               010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </a>

//         {/* Socials */}
//         <div className="flex gap-2 mt-2 sm:mt-0">
//           <a
//             href="https://linkedin.com/in/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white md:w-14 md:h-14 p-2 md:p-4 text-gray-700 hover:text-gray-950 
//             flex items-center justify-center rounded-full focus:scale-[1.15] 
//             hover:scale-[1.15] active:scale-105 transition cursor-pointer border 
//             dark:bg-white/10 dark:text-white/60"
//           >
//             {/* LinkedIn Icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" width="20" height="20">
//               <path d="M100.28 448H7.4V148.9h92.88zM53.79..."></path>
//             </svg>
//           </a>

//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white md:w-14 md:h-14 p-2 md:p-4 text-gray-700 hover:text-gray-950 
//             flex items-center justify-center rounded-full focus:scale-[1.15] 
//             hover:scale-[1.15] active:scale-105 transition cursor-pointer border 
//             dark:bg-white/10 dark:text-white/60"
//           >
//             {/* GitHub Icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="20" height="20">
//               <path d="M8 0C3.58 0 0 3.58..."></path>
//             </svg>
//           </a>

//           <a
//             href="https://twitter.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white md:w-14 md:h-14 p-2 md:p-4 text-gray-700 hover:text-gray-950 
//             flex items-center justify-center rounded-full focus:scale-[1.15] 
//             hover:scale-[1.15] active:scale-105 transition cursor-pointer border 
//             dark:bg-white/10 dark:text-white/60"
//           >
//             {/* Twitter Icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="20" height="20">
//               <path d="M12.6.75h2.454l-5.36..."></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
