import React from 'react'
import { project } from '../data/projects'
import Image from 'next/image'

type projectCardProps = {
    project: project
}

const ProjectCard = ({project}: projectCardProps) => {
  return (
    <div 
      style={{
        backgroundColor: project.primaryColor, 
        //border: `2px solid ${project.secondaryColor}`,
        color: project.secondaryColor
      }} 
        className="flex flex-col sm:flex-row gap-10 items-center p-10 m-2 rounded-[4rem] shadow-2xla">
        <Image className='object-cover rounded-4xl shadow-2xl h-[32rem] w-[36rem]' src={project.images[0]} width={600} height={450} alt={project.name}/>
        <div className="">
          <h2 className='font-bold text-5xl'>{project.name}</h2>
          <p className='text-2xl my-5'>{project.description}</p>
          <div className="flex flex-wrap gap-1">
              {project.tags.map((name, index) => (
                  <p className={`font-semibold text-xl py-1 px-2 rounded-full border-2 border-[${project.secondaryColor}]`} key={index}>{name}</p>
              ))}
          </div>
              <button
                className='group rounded-full px-10 py-5 my-5 w-full
                  hover:bg-[#e974e7] hover:cursor-pointer transition-all ease-in-out duration-300' 
                style={{background: project.secondaryColor, color: project.primaryColor}}
              >
                <p 
                className='text-2xl xl:text-5xl 2xl:text-6xl font-bold text-background-[B94DA1] 
                  group-hover:mx-3 transition-all ease-in-out duration-300'
                >
                  SEE MORE
                </p>
              </button>
        </div>
        
    </div>

  )
}

export default ProjectCard