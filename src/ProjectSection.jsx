import React from "react";

export default function ProjectSection() {
  const projects = [
    {
      name: "Wanderlust - Airbnb Clone",
      desc: "Full-stack MERN Airbnb clone built with MVC architecture and REST APIs. Features JWT auth, complete CRUD for listings and reviews with authorization, and cloudinary image upload",
      live: "https://wanderlust-mern-nine.vercel.app/",
      github: "https://github.com/harshvardhan-makwana/wanderlust-MERN", 
    },
    {
      name: "JobBoard",
      desc: "Full-Stack MERN job portal with JWT auth, role based access (Recruiter/Seeker), complete CRUD for jobs & applications, RESTful APIs with MVC architecture. Deployed on Vercel + Render",
      live: "https://job-board-mern-inky.vercel.app/",
      github: "https://github.com/harshvardhan-makwana/job-board-mern",
    },
  ];
  return (
    <div className="bg-gray-950">
      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-500">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{p.name}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <div className="flex gap-4">
                <a href={p.live} target="_blank" className="text-blue-500">Live Demo →</a>
                <a href={p.github} target="_blank" className="text-blue-500">GitHub →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}