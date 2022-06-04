import React from 'react'

const Jobs = (props) => {
  return (
    <div>
        <div className='font-calibre-sb text-xl'>{props.position} - {props.org}</div>
        <p className='font-sf-mono-sb text-sm'>{props.duration}</p>
        <p className={ props.para==='' ? 'hidden' : 'font-calibre-re text-sm'} >{props.para}</p>
        <ul className='font-calibre-re text-sm'>
            { props.points.map( (point) =>{
                return(
                    <li>{point}</li>
                    );
                }
              )
            }
        </ul>
    </div>
  )
}

export default Jobs