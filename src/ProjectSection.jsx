import React from "react";

export default function ProjectSection() {
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
    <div className="bg-gray-950">
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Featured <span className="text-blue-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">{p.name}</h3>
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
    </div>
  );
}
