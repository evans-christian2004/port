import React from "react";
import { project } from "../data/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      style={{
        backgroundColor: project.primaryColor,
        color: project.secondaryColor,
      }}
      className="flex flex-col lg:flex-row gap-10 items-center p-4 sm:p-10 m-2 rounded-[4rem] shadow-2xl"
    >
      {/* Image wrapper */}
      <div className="relative w-full sm:w-[36rem] h-[12rem] sm:h-[24rem] lg:h-[30rem] rounded-4xl sm:rounded-4xl overflow-hidden shadow-2xl flex-shrink-0">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover rounded-4xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
        />
      </div>

      {/* Info section */}
      <div className="flex-1">
        <h2 className="font-bold text-3xl sm:text-5xl">{project.name}</h2>
        <p className="text-sm sm:text-lg md:text-xl my-5">{project.description}</p>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((name, index) => (
            <p
              key={index}
              className="font-semibold text-sm sm:text-xl py-1 px-2 rounded-full border-2"
              style={{ borderColor: project.secondaryColor }}
            >
              {name}
            </p>
          ))}
        </div>

        <button
          className="group relative rounded-full px-10 py-5 my-5 w-full overflow-hidden transition-colors duration-300 hover:cursor-pointer"
          style={{
            background: project.secondaryColor,
            color: project.primaryColor,
          }}
        >
          <span className="relative z-10 text-2xl xl:text-5xl 2xl:text-6xl font-bold">
            SEE MORE
          </span>
          <span
            className="pointer-events-none absolute inset-0 bg-current mix-blend-difference opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
