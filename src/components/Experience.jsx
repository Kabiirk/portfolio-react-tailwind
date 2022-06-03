import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
// import Tabs from '../components/Tabs'

const Experience = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
          <div className='max-w-[1000px] w-full grid grid-cols-1'>
            <div className='text-center pb-8 pl-4'>
              <p className='text-3xl inline font-calibre-sb'>
                Experience
              </p>
            </div>
          </div>

          {/* Should be Tabs */}
          <div className='max-w-[750px] w-full grid sm:grid-cols-2 gap-8 px-4 bg-blue-500'>
              <div className='text-center md:flex-col lg:felx-col flex pl-10 bg-emerald-400'>
                  <div className='bg-red-400'>A</div>
                  <div className='bg-red-500'>B</div>
                  <div className='bg-red-600'>C</div>
                  <div className='bg-red-700'>D</div>
              </div>

              <div className='font-calibre-re'>
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
              </div>
            </div>

        </div>
      </div>
  )
}

export default Experience