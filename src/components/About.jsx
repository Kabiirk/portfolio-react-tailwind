import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
            <div className='text-center pb-8 pl-4'>
              <p className='text-3xl inline font-calibre-sb'>
                About Me
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='content-right'>
                <img src={Name_Logo} alt="My pic" className='mx-auto'/>
              </div>
              <div className='font-calibre-re'>
                <p>
                    I am passionate about building excellent software that improves
                    the lives of those around me. I specialize in creating software
                    for clients ranging from individuals and small-businesses all the
                    way to large enterprise corporations. What would you do if you had
                    a software expert available at your fingertips?
                </p>
                <br />
                <p>
                    I am passionate about building excellent software that improves
                    the lives of those around me. I specialize in creating software
                    for clients ranging from individuals and small-businesses all the
                    way to large enterprise corporations.
                </p>
                <br />
                <button className='border-2 rounded-md px-3 py-2 text-sm font-sf-mono-re justified-center text-cyan-400 border-cyan-400 hover:bg-cyan-200 hover:bg-opacity-20 hover:duration-200'>Download my Resume !</button>
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About