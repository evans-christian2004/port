import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const page = () => {
  const projectsArray = projects
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl xl:text-7xl mb-12 font-semibold'>Projects</h1>
      {projectsArray.map((project, index) => (
        <ProjectCard key={index} project={project}/>
      ))}
    </div>
  )
}

export default page