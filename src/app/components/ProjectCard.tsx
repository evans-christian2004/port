import React from 'react'
import { project } from '../data/projects'
import Image from 'next/image'

type projectCardProps = {
    project: project
}

const ProjectCard = ({project}: projectCardProps) => {
  return (
    <div className="">
        <Image src={project.images[0]} width={30} height={20} alt={project.name}/>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="">
            {project.tags.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
        </div>
    </div>

  )
}

export default ProjectCard