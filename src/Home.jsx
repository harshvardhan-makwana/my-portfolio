import React from 'react'

export default function Home() {
  return (
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
      </div>
  )
}
