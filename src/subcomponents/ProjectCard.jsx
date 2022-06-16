import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const ProjectCard = (props) => {
  var tech_stack = props.stack.map((item,index) => <div key={index}>{item}</div> )
  return (
    <div className='group rounded bg-card py-[2rem] px-[1.75rem] transition ease-in hover:translate-y-[-0.25rem] hover:duration-200'>
      {/*
        Why rel="noopener noreferrer" ?
        Ref.:
          https://stackoverflow.com/questions/17711146/how-to-open-link-in-a-new-tab-in-html
          https://dev.to/ben/the-targetblank-vulnerability-by-example
          https://support.detectify.com/support/solutions/articles/48001048981-external-links-using-target-blank-
      */}
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className='h-full w-full flex flex-col'>
            <img alt='Project Icon' src={Name_Logo} className='w-10 pb-4'/>
            <p className='font-calibre-sb text-lg leading-6 group-hover:text-highlight group-hover:duration-200'>{props.title}</p>
            <p className='font-calibre-regular grow text-xs text-subheading'>{props.description}</p>
            <div className='bottom-0 flex gap-3 font-sf-mono-re text-[0.6rem] text-subheading pt-5'>
                {tech_stack}
            </div>
        </div>
        </a>
    </div>
  )
}

export default ProjectCard