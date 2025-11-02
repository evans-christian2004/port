"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { project } from "../data/projects";
import Image from "next/image";

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

  if (!open || !isMounted) return null;

  const modalId = `project-modal-${project.name.replace(/\s+/g, "-").toLowerCase()}`;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-10 sm:px-6">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-lg transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        style={{
          background: project.primaryColor ?? "#101010",
          color: project.secondaryColor ?? "#F5F5F5",
        }}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2.5rem] border border-current/20 p-6 sm:p-10 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalId}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-4 transition hover:translate-y-0.5 hover:opacity-80 hover:cursor-pointer"
        >
          <Image src="/icons/x.svg" width={20} height={20} alt="close"/>
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
          </header>

          <section>
            <h3 className="text-sm uppercase tracking-[0.4em] opacity-60">
              Tags
            </h3>
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
            <h3 className="text-sm uppercase tracking-[0.4em] opacity-60">
              Overview
            </h3>
            <p className="mt-3 whitespace-pre-line text-base sm:text-lg leading-loose">
              {project.bodyText?.trim() || "Detailed project write-up coming soon."}
            </p>
          </section>

          <section className="flex flex-wrap gap-3">
            {project.repository && (
              <Link
                style={{
                  background: project.secondaryColor ?? "#F5F5F5",
                  color: project.primaryColor ?? "#101010",
                }}
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
      </div>
    </div>,
    document.body
  );
};

export default ProjectDisplay;
