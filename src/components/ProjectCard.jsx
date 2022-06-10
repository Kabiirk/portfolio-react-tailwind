import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const ProjectCard = (props) => {
    var tech_stack = props.stack.map(item=> <div>{item}</div> )
  return (
    <div className='group rounded-md bg-card py-[2rem] px-[1.75rem] '>
        <div className='h-full w-full flex flex-col'>
            <img alt='Project Icon' src={Name_Logo} className='w-12 pb-2'/>
            <p className='font-calibre-sb text-lg leading-6 pb-2'>{props.title}</p>
            <p className='font-calibre-regular grow text-xs'>{props.description}</p>
            <div className='bottom-0 flex gap-3 font-sf-mono-re text-xs pt-5'>
                {tech_stack}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard