"use client"

import React, { useRef } from 'react'
import { skills } from '../data/skills'
import Link from 'next/link'
import Image from 'next/image'
import { easeInOut, motion } from "motion/react"

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

const SkillsSection = () => {

  return (
    <div className='container mx-auto px-6 py-12 lg:px-12 lg:py-24 min-h-screen'>
        <h1 className='text-5xl xl:text-8xl font-semibold'>Skills:</h1>
        {skills.map((category) => (
            <div key={category.category}>
                <h2 className='mt-10 mb-8 text-5xl text-center'>{category.category}:</h2>
                <motion.ul 
                    className="flex justify-center flex-wrap gap-5"
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {category.skills.map((skill) => (
                        <motion.li key={skill.name} 
                            className='xs:w-35 xs:min-h-44 w-full p-4 rounded-4xl bg-secondary-500 
                            hover:shadow-lg hover:-translate-y-2 shadow-black transition-all ease-in-out'
                            variants={childVariants}
                        >
                            <Link className='flex justify-between xs:flex-col' href={skill.url}>
                                <Image 
                                    className='bg-white p-2 rounded-3xl' 
                                    src={skill.iconSrc} 
                                    height={iconSize} 
                                    width={iconSize} 
                                    alt={`${skill.name} icon`}
                                />
                                <h3 className='m-auto p-3 xs:p-0 text-center min-h-15 flex items-center justify-center'>{skill.name}</h3>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        ))}
    </div>
  )
}

export default SkillsSection