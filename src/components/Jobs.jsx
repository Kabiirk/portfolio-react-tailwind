import React from 'react'

const Jobs = (props) => {
  return (
    <div>
        <div className='font-calibre-sb text-xl'>
          <span className='pr-2'>{props.position}</span>
          <span className='text-highlight'> @ {props.org} </span>
        </div>
        <p className='font-sf-mono-sb text-sm'>{props.duration}</p>
        <p className={ props.para==='' ? 'hidden' : 'font-calibre-re text-sm'} >{props.para}</p>
        <ul className='font-calibre-re text-sm'>
            { props.points.map( (point, index) =>{
                return(
                    <li key={index} className='styled-bullets' >{point}</li>
                    );
                }
              )
            }
        </ul>
    </div>
  )
}

export default Jobs