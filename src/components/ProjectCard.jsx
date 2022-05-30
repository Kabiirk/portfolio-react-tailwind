import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const ProjectCard = (props) => {
    var tech_stack = props.stack.map(item=> <div>{item}</div> )
  return (
    <div className='group container rounded-md bg-[#112240] flex flex-col'>
        <div className='bg-emerald-500 m-5 flex-end'>
            <img alt='Project Icon' src={Name_Logo} className='pb-2 bg-red-300'/>
            <p className='font-calibre-sb text-2xl bg-red-400'>{props.title}</p>
            <p className='font-calibre-regular text-sm bg-red-600'>{props.description}</p>
            <div className='flex gap-3 font-sf-mono-re text-xs bg-red-800'>
                {tech_stack}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard