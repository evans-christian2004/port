import { experience } from '@/app/data/experience'
import React from 'react'

type ExperienceCardProps = {
    experience: experience,
}
const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "September", "October", "November", "December",]

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    let dateRangeString = experience.endDate ? 
    `${monthNames[experience.startDate.getMonth()]} ${experience.startDate.getFullYear()} - ${monthNames[experience.endDate.getMonth()]} ${experience.endDate.getFullYear()}` : 
    `${monthNames[experience.startDate.getMonth()]} ${experience.startDate.getFullYear()} - Present`
  return (
    <article className="bg-[#0a3a4a] border border-primary-500 rounded-3xl shadow-xl p-6 mr-6">
        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
        <p className="text-primary-300 text-lg">{experience.company}</p>
        <p className="text-sm text-gray-300 italic mb-3">{dateRangeString}</p>
        <p className="text-gray-100">{experience.description}</p>
        <ul className='mx-4'>
            {experience.responsibilities.map((text, index) => (
                <li className='list-disc m-1 text-sm' key={index}>
                    <p>{text}</p>
                </li>
            ))}
        </ul>
        <ul className='flex flex-wrap gap-1 mt-5'>
            {experience.tags.map((tag, index) => (
                <li className='font-semibold text-xs sm:text-md py-1 px-2 rounded-full border-2' key={index}>
                    <p>{tag}</p>
                </li>
            ))}
        </ul>

    </article>
  )
}

export default ExperienceCard