"use client"

import React from 'react'
import { skills } from '../../data/skills'
import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from "motion/react"

const iconSize = 120;

const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .25,
            staggerChildren: 0.15,
            when: "beforeChildren",
        }
    }
}
const childVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.15,
        }
    }
}
 const containVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // controls delay between cards
      },
    },
  };

  const itVariants: Variants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

const SkillsSection = () => {

  return (
    <motion.div
          className="container mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={containVariants}
        >
          <motion.h1
            className="text-center text-3xl sm:text-5xl xl:text-7xl sm:mb-3 mb-1 font-semibold"
            variants={itVariants}
          >
            Skills
          </motion.h1>
    
          <motion.p
            className="text-center px-10 sm:px-36 sm:text-xl text-xs"
            variants={itVariants}
          >
            These are the technologies I&apos;ve learned and used across my classes, projects, and hackathons. 
            Click into them for more information or resources I used to learn them.
          </motion.p>
        {skills.map((category) => (
            <div key={category.category}>
                <motion.h2 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    viewport={{ once: false, amount: 0 }}
                    className='sm:mt-10 sm:mb-8 mt-5 mb-1 text-3xl sm:text-5xl text-center'>
                        {category.category}:
                </motion.h2>
                <motion.ul 
                    className="flex justify-center flex-wrap gap-5"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: false, amount: 0.0 }}
                >
                    {category.skills.map((skill) => (
                        <motion.li key={skill.name} 
                            className='xs:w-35 xs:min-h-44 w-30 p-4 rounded-4xl bg-secondary-500 
                            hover:shadow-lg hover:-translate-y-2 shadow-black transition-all ease-in-out'
                            variants={childVariants}
                        >
                            <Link className='flex justify-between flex-col' href={skill.url}>
                                <Image 
                                    className='bg-white p-2 rounded-3xl' 
                                    src={skill.iconSrc} 
                                    height={iconSize} 
                                    width={iconSize} 
                                    alt={`${skill.name} icon`}
                                />
                                <h3 className=' pt-2 sm:text-md text-sm text-center min-h-15 flex items-center justify-center'>{skill.name}</h3>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        ))}
    </motion.div>
  )
}

export default SkillsSection