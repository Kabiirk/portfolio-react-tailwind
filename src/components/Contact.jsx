import React from 'react'
import { ReactComponent as LinkedIn } from '../assets/social_icons/LinkedIn_Rounded.svg';
import { ReactComponent as Github } from '../assets/social_icons/Github_Rounded.svg';
import { ReactComponent as Email } from '../assets/social_icons/Email_Rounded.svg';
import { ReactComponent as Behance } from '../assets/social_icons/Behance_Rounded.svg';

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-6 text-gray-300'>
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full px-10'>
            <div className='text-center'>
                <div>
                    <p className='text-3xl font-calibre-sb'>Get in Touch</p>
                </div>
                <div>
                    <p className='text-1xl inline font-sf-mono-sb text-cyan-400 text-xs'>You can reach me at...</p>
                </div>
            </div>
            {/* Coding Languages */}
            <div className='grid md:grid-cols-4 grid-cols-2 pt-5 mx-auto'>
                <LinkedIn className='h-[100px] py-4 px-10 fill-[#ccd6f6]' />
                <Github className='h-[100px] py-4 px-10 fill-[#ccd6f6]' />
                <Email className='h-[100px] py-4 px-10 fill-[#ccd6f6]' />
                <Behance className='h-[100px] py-4 px-10 fill-[#ccd6f6]' />
            </div>
        </div>
    </div>
  )
}

export default Contact