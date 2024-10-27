"use client";

import { Projects_data } from "@/app/constants";
import ProjectCard from "@/app/components/sub/ProjectCard";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("webservice");

  return (
    <div
      className="flex flex-col items-center justify-center pb-40 md:py-20"
      id="projects"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-5">
        My Projects
      </h2>
      <div className="mx-auto w-1/2 h-40 md:h-20 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mb-6 md:mb-5">
        <button
          onClick={() => setSelectedCategory("webservice")}
          className={`z-20 text-white rounded-2xl border border-white px-5 py-1 ${
            selectedCategory === "webservice" ? "bg-gray-600" : ""
          }`}
        >
          Web Services
        </button>
        <button
          onClick={() => setSelectedCategory("website")}
          className={`z-20 text-white rounded-2xl border border-white px-5 py-1 ${
            selectedCategory === "website" ? "bg-gray-600" : ""
          }`}
        >
          Web Sites
        </button>
        <button
          onClick={() => setSelectedCategory("design")}
          className={`z-20 text-white rounded-2xl border border-white px-5 py-1 ${
            selectedCategory === "design" ? "bg-gray-600" : ""
          }`}
        >
          UI/UX Design
        </button>
      </div>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10 min-h-80">
        {Projects_data.filter((project) =>
          project.types.includes(selectedCategory)
        ).map((project) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            title={project.title}
            descriptions={project.descriptions}
            link={project.link}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
