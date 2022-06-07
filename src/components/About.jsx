import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
          <div className='max-w-[800px] w-full grid grid-cols-1'>
            <div className='text-center pb-8 pl-4'>
              <p className='text-3xl inline font-calibre-sb'>
                About Me
              </p>
            </div>
          </div>
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-4 px-4'>
              <div className='content-right'>
                <img src={Name_Logo} alt="My pic" className='mx-auto'/>
              </div>
              <div className='font-calibre-re text-base'>
                <p>
                  A 2021 B.Tech graduate, seeking opportunities in domains like
                  (A).Automation with IoT, (B).Cyber Security,(C).Strategies to integrate
                  disruptive automation technologies to achieve higher degree of
                  intelligence, integrity & interactivity during Data-acquisition,
                  Processing-&-Analytics phases.
                </p>
                <br />
                <p>
                  Currently, I’m a full-time CyberSec consultant who does Data-
                  Engineering on the side. I also like develop applications & websites.
                  In my free time, I like to code & do graphic design.
                </p>
                <br />
                <button className='border-2 rounded-md px-5 py-4 text-sm font-sf-mono-re justified-center text-cyan-400 border-cyan-400 hover:bg-cyan-200 hover:bg-opacity-20 hover:duration-200'>Download my Resume !</button>
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About