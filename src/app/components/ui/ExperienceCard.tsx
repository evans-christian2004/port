"use client";

import { experience } from "@/app/data/experience";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

type ExperienceCardProps = {
  experience: experience;
};

const monthNames = [
  "January","February","March","April","May","June","July","August","September","October","November","December",
];

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [open, setOpen] = useState(false);

  const dateRangeString = experience.endDate
    ? `${monthNames[experience.startDate.getMonth()]} ${experience.startDate.getFullYear()} - 
      ${monthNames[experience.endDate.getMonth()]} ${experience.endDate.getFullYear()}`

    : `${monthNames[experience.startDate.getMonth()]} ${experience.startDate.getFullYear()} - Present`;

  return (
    <article className="bg-[#0a3a4a] border border-primary-500 rounded-4xl shadow-xl p-6 mr-6">
      <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
      <p className="text-primary-300 text-lg">{experience.company}</p>
      <p className="text-sm text-gray-300 italic mb-3">{dateRangeString}</p>
      <p className="text-gray-100">{experience.description}</p>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-4 inline-flex bg-secondary-500 rounded-full w-full justify-center px-2 py-1 items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-white focus:outline-none"
        aria-expanded={open}
      >
        {open ? "Hide Details" : "Show Details"}
        <motion.span
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="inline-block text-lg"
          aria-hidden
        >
          <Image alt="down arrow" src="/icons/arrow.svg" width={15} height={15}/>
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-5">
              <ul className="mx-4">
                {experience.responsibilities.map((text, index) => (
                  <li className="list-disc m-1 text-sm" key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1">
                {experience.tags.map((tag, index) => (
                  <li
                    className="font-semibold text-xs sm:text-md py-1 px-2 rounded-full border-2"
                    key={index}
                  >
                    <p>{tag}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ExperienceCard;
