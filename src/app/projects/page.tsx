
import type { Metadata } from "next";
import * as motion from "motion/react-client";
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import type { Variants } from "motion";

export const metadata: Metadata = {
  title: "Projects | Christian Evans",
  description:
    "Browse Christian Evans' software projects—from hackathon builds to production-ready web apps—covering Next.js, TypeScript, AI workflows, and UI engineering.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Projects | Christian Evans",
    description:
      "Selected projects by Christian Evans highlighting Next.js, TypeScript, AI integrations, and UI engineering.",
  },
  twitter: {
    card: "summary",
    title: "Projects | Christian Evans",
    description:
      "Selected projects by Christian Evans highlighting Next.js, TypeScript, AI integrations, and UI engineering.",
  },
};

const page = () => {
  const projectsArray = projects;

  // Define animation variants for the container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // controls delay between cards
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container mx-auto mb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-center text-3xl sm:text-5xl xl:text-7xl sm:mb-6 mb-3 font-semibold"
        variants={itemVariants}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-center px-6 sm:px-36 sm:text-lg text-sm sm:mb-8 mb-3"
        variants={itemVariants}
      >
        I see every project as a chance to learn something new. Whether it&apos;s
        practicing with new libraries and framworks, collaborating in hackathons, or just building tools
        that make life easier. Here&apos;s a look at the projects that have helped me
        grow as a developer.
      </motion.p>

      {projectsArray.map((project, index) => (
        <div
          key={index}
          className="sticky top-[2rem] sm:top-[8rem] mb-12 animate-fade-down"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </motion.div>
  );
};

export default page;
