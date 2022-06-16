import React from 'react'

const Jobs = (props) => {
  return (
    <div className='pt-2 md:pt-0 pr-10'>
        <div className='font-calibre-sb text-xl'>
          <span className='pr-2'>{props.position}</span>
          <span className='text-highlight'> @ {props.org} </span>
        </div>
        <p className='font-sf-mono-re text-xs text-subheading pb-6'>{props.duration}</p>
        <p className={ props.para==='' ? 'hidden' : 'font-calibre-re text-subheading text-base pb-1'} >{props.para}</p>
        <ul className='font-calibre-re text-subheading text-base'>
            { props.points.map( (point, index) =>{
                return(
                    <li key={index} className='styled-bullets pb-1' >{point}</li>
                    );
                }
              )
            }
        </ul>
    </div>
  )
}

export default Jobs