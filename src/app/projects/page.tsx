import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectDisplay from '../components/ProjectDisplay'

const page = () => {
  const projectsArray = projects
  return (
    <div className='container mx-auto mb-12'>
      <h1 className='text-center text-3xl sm:text-5xl xl:text-7xl sm:mb-12 mb-6 font-semibold'>Projects</h1>
      {projectsArray.map((project, index) => (
        <div key={index} className="sticky top-[2rem] sm:top-[8rem] mb-12">
          <ProjectCard project={project}/>
        </div>
        
      ))}
    </div>
  )
}

export default page