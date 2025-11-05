import * as motion from "motion/react-client";
import React from "react";
import { experiences } from "../data/experience";
import ExperienceCard from "../components/ui/ExperienceCard";

const experiencesArray = experiences

export default function ExperienceSection() {
  const container: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.20 } },
  };
  const seg: any = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };
  const item: any = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // controls delay between cards
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  /*
   * Geometry:
   * - 4px line sits in the first grid column.
   * - Dot centers over the line:
   *   line center = 2px from right edge of col 1.
   *   dot radius = 8px → dot center 8px from its left edge.
   *   offset = 8px - 2px = 6px => -left-[6px]
   */
  return (
    <section className="container mx-auto">
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
          Experience
        </motion.h1>
  
        <motion.p
          className="text-center px-6 sm:px-36 sm:text-xl text-sm sm:mb-8 mb-3"
          variants={itemVariants}
        >
          Every role I've taken—whether in IT, front-end development, or student leadership—has taught me the importance of teamwork, communication, and initiative. I've worked across university departments, hackathons, and student organizations to solve problems, collaborate, and build technology that connects people.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
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
              {/* Line column */}
              <div className="relative">
                <motion.div
                  variants={seg}
                  className={[
                    "absolute left-0 right-0 mx-auto w-[2px] h-full bg-white origin-top",
                    isFirst ? "rounded-t-full" : "",
                    isLast ? "rounded-b-full" : "",
                  ].join(" ")}
                />
              </div>

              {/* Card column */}
              <motion.div variants={item} className="relative py-10 pl-8">
                {/* Dot */}
                <span
                  style={{background: exp.primaryColor}}
                  className="absolute top-8 -left-[10px] block h-4 w-4 rounded-full shadow"
                  aria-hidden
                />
                <ExperienceCard experience={exp}/>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
