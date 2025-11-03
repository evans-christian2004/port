import * as motion from "motion/react-client";
import React from "react";

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "IT Student Technician",
    company: "University of Central Florida",
    date: "2024 — Present",
    description:
      "Provide Tier 1 technical support for UCF’s largest IT zone, assisting 500+ students, faculty, and staff.",
  },
  {
    title: "Front-End Engineer Intern",
    company: "The Startup Life",
    date: "Summer 2024",
    description:
      "Built and deployed responsive landing pages while leading UI/UX design discussions in a small, fast-paced team.",
  },
  {
    title: "Geek Squad Consultation Agent Lead",
    company: "Best Buy",
    date: "2022 — 2024",
    description:
      "Led consultation agents, handled complex troubleshooting, and ensured excellent client experiences.",
  },
];

export default function ExperienceSection() {
  const container: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };
  const seg: any = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.9, ease: "easeInOut" } },
  };
  const item: any = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  /**
   * Geometry:
   * - 4px line sits in the first grid column.
   * - Dot centers over the line:
   *   line center = 2px from right edge of col 1.
   *   dot radius = 8px → dot center 8px from its left edge.
   *   offset = 8px - 2px = 6px => -left-[6px]
   */
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-5xl xl:text-7xl font-semibold mb-4">
        Experience
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="space-y-0"
      >
        {experiences.map((exp, i) => {
          const isFirst = i === 0;
          const isLast = i === experiences.length - 1;
          return (
            <div
              key={i}
              className="grid grid-cols-[4px_1fr] sm:grid-cols-[4px_1fr]"
            >
              {/* Line column (4px wide) */}
              <div className="relative">
                <motion.div
                  variants={seg}
                  className={[
                    "absolute left-0 right-0 mx-auto w-[4px] h-full bg-primary-500 origin-top",
                    isFirst ? "rounded-t-full" : "",
                    isLast ? "rounded-b-full" : "",
                  ].join(" ")}
                />
              </div>

              {/* Card column */}
              <motion.div variants={item} className="relative py-10 pl-8">
                {/* Dot aligned with the line */}
                <span
                  className="absolute top-8 -left-[10px] z-10 block h-4 w-4 rounded-full bg-primary-500 shadow"
                  aria-hidden
                />
                <article className="bg-[#0a3a4a] border border-primary-500 rounded-3xl shadow-xl p-6">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-primary-300 text-lg">{exp.company}</p>
                  <p className="text-sm text-gray-300 italic mb-3">{exp.date}</p>
                  <p className="text-gray-100">{exp.description}</p>
                </article>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
