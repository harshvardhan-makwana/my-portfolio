import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Navbar"
import ContactSection from "./ContactSection";

function App() {
  const projects = [
    {
      name: "JobBoard",
      desc: "Full-stack MERN job portal with authentication, CRUD operations, and responsive UI. Deployed on Vercel + Render.",
      live: "https://job-board-mern-inky.vercel.app/",
      github: "https://github.com/harshvardhan-makwana/job-board-mern",
    },
    {
      name: "Zerodha UI Clone",
      desc: "Pixel-perfect landing page clone of Zerodha using React + Tailwind. Focus on responsive design and clean UI.",
      live: "https://zerodha-clone-using-react.vercel.app",
      github:
        "https://github.com/harshvardhan-makwana/zerodha-clone-using-react",
    },
  ];
  return (
    <>
    <Navbar/>
    <div className="bg-gray-950">
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black px-6 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] "></div>

        <div className="relative z-10 text-center max-w-6xl">
          <p className="text-blue-400 font-medium mb-4 tracking-wide">
            MERN STACK DEVELOPER
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight opacity-60">
            Hi, I'm <span className="text-blue-500"> Harshvardhan</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
            I build things for <span className="text-blue-500">web</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            I'm a developer focused on building fast, scalable, and
            user-friendly web apps using React, Node, and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="mailto:makwanaharshvardhan338@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="px-6 py-24 max-w-6xl mx-auto bg-gray-950"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {p.name}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed">{p.desc}</p>
              <div className="flex gap-4 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Live Demo →
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-200 font-medium"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactSection/>
      </div>
      
    </>
  );
}

export default App;
