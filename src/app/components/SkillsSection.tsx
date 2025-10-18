import React from 'react'
import { skills } from '../data/skills'
import Link from 'next/link'
import Image from 'next/image'

const iconSize : number = 120;

const SkillsSection = () => {
  return (
    <div className='container mx-auto p-10 min-h-screen'>
        <h1 className='text-6xl'>Skills:</h1>
        {skills.map((category) => (
            <div key={category.category}>
                <h2 className='mt-10 mb-8'>{category.category}</h2>
                <ul className="flex flex-wrap gap-5">
                    {category.skills.map((skill) => (
                        <li key={skill.name} className='w-9 h-9 p-2 bg-secondary-500'>
                            <Link href={skill.url}>
                                <Image src={skill.iconSrc} height={iconSize} width={iconSize} alt={`${skill.name} icon`}/>
                                <h3>{skill.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default SkillsSection