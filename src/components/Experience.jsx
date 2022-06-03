import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
// import Tabs from '../components/Tabs'

const Experience = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-1'>
            <div className='text-center pb-8 pl-4'>
              <p className='text-3xl inline font-calibre-sb'>
                Experience
              </p>
            </div>
          </div>

          {/* Should be Tabs */}
          <div className='max-w-[1000px] w-full grid md:grid-cols-4 grid-col-1 gap-8 px-10'>
              <div className='text-left md:flex-col flex sm:items-stretch overflow-x-scroll gap-2 col-span-1 sm:col-span-1 font-sf-mono-re'>
                  <div className='bg-red-400'>PwC India</div>
                  <div className='bg-red-500'>IIT-Roorkee</div>
                  <div className='bg-red-600'>IBM</div>
                  <div className='bg-red-700'>Deloitte</div>
                  <div className='bg-red-800'>Microsoft SP</div>
                  <div className='bg-red-900'>CSI-VIT</div>
              </div>

              <div className='font-calibre-re md:col-span-3 col-span-1'>
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