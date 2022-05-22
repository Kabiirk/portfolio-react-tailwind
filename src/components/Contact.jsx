import React from 'react'
import { ReactComponent as LinkedIn } from '../assets/social_icons/LinkedIn_Rounded.svg';
import { ReactComponent as Github } from '../assets/social_icons/Github_Rounded.svg';
import { ReactComponent as Email } from '../assets/social_icons/Email_Rounded.svg';
import { ReactComponent as Behance } from '../assets/social_icons/Behance_Rounded.svg';

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300'>
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full px-10'>
            <div className='text-center'>
                <div>
                    <p className='text-3xl font-bold inline border-b-4 border-pink-600'>Get in Touch !</p>
                </div>
                <div>
                    <p className='text-1xl inline'>You can reach me at...</p>
                </div>
            </div>
            {/* Coding Languages */}
            <div className='grid md:grid-cols-4 grid-cols-2 py-4 mx-1  bg-red-200'>
                <LinkedIn className='h-[100px] py-4 mx-auto bg-red-300' />
                <Github className='h-[100px] py-4 mx-auto bg-red-400' />
                <Email className='h-[100px] py-4 mx-auto bg-red-500' />
                <Behance className='h-[100px] py-4 mx-auto bg-red-600' />
            </div>
        </div>
    </div>
  )
}

export default Contact