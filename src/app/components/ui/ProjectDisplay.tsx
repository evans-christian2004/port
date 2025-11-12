"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { project } from "../../data/projects";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

type ProjectDisplayProps = {
  project: project;
  open: boolean;
  onClose: () => void;
};

const ProjectDisplay = ({ project, open, onClose }: ProjectDisplayProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!open || !isMounted) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open, isMounted]);

  if (!isMounted) return null;

  const modalId = `project-modal-${project.name.replace(/\s+/g, "-").toLowerCase()}`;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-10 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-lg"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            style={{
              background: project.primaryColor ?? "#101010",
              color: project.secondaryColor ?? "#F5F5F5",
            }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2.5rem] border border-current/20 p-6 sm:p-10 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalId}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute sm:right-3 sm:top-3 right-0.5 top-0.5 rounded-full p-4 transition hover:translate-y-0.5 hover:opacity-80 hover:cursor-pointer"
            >
              <Image src="/icons/x.svg" width={20} height={20} alt="close" />
            </button>

            <div className="space-y-8">
              <header>
                <h2
                  id={modalId}
                  className="text-3xl sm:text-4xl font-semibold tracking-tight"
                >
                  {project.name}
                  {project.subtext ? `: ${project.subtext}` : ""}
                </h2>
                {project.description && (
                  <p className="mt-4 text-base sm:text-lg leading-relaxed opacity-80">
                    {project.description}
                  </p>
                )}
                <div>
                  <ImageCarousel images={project.images} />
                </div>
              </header>

              <section>
                <h3 className="text-sm opacity-60">Tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-current px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg">Overview</h3>
                {project.bodyText ? (
                  <div
                    className="prose prose-invert leading-tight mt-3 mx-auto text-base sm:text-lg"
                    dangerouslySetInnerHTML={{ __html: project.bodyText }}
                    style={{color: project.secondaryColor}}
                  />
                ) : (
                  <p className="mt-3 whitespace-pre-line text-base sm:text-lg leading-loose">
                    Detailed project write-up coming soon.
                  </p>
                )}
              </section>

              <section className="flex flex-wrap gap-3">
                {project.repository && (
                  <Link
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-current px-5 py-3 text-xs font-semibold transition hover:translate-y-0.5 hover:opacity-80"
                  >
                    Repository
                  </Link>
                )}
                {project.demo && (
                  <Link
                    style={{
                      background: project.secondaryColor ?? "#F5F5F5",
                      color: project.primaryColor ?? "#101010",
                    }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-current px-5 py-3 text-xs font-semibold transition hover:-translate-y-0.5 hover:opacity-80"
                  >
                    Demo
                  </Link>
                )}
                {project.devPost && (
                  <Link
                    style={{
                      background: project.secondaryColor ?? "#F5F5F5",
                      color: project.primaryColor ?? "#101010",
                    }}
                    href={project.devPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-current px-5 py-3 text-xs font-semibold transition hover:-translate-y-0.5 hover:opacity-80"
                  >
                    Devpost
                  </Link>
                )}
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectDisplay;
