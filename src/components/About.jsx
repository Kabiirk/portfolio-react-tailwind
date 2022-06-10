import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
import profile from '../assets/profile.jpg'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-background text-heading'>
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
                {/* <img src={Name_Logo} alt="My pic" className='mx-auto'/> */}
                {/* <svg className='w-[16%] mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M5,0H45a5,5,0,0,1,5,5V45a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" fill="#64ffda" fill-rule="evenodd"/><g style={{isolation:"isolate"}}><g style={{isolation:"isolate"}}><path d="M21.33,23.92l8.08-9.67h5.43l-8.19,9.63,8.5,11.87H29.73L23.36,27l-2,2.42v6.37H16.85V14.25h4.48Z" fill="#0a192f"/></g></g></g></g></svg> */}
                <img src={profile} alt="Me !" className='mx-auto rounded-md w-[85%]'/>
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
                <div className='flex sm:justify-start justify-center'>
                <button className='border-2 rounded-md px-5 py-4 text-sm font-sf-mono-re justified-center text-highlight border-highlight hover:bg-cyan-200 hover:bg-opacity-20 hover:duration-200'>Download my Resume !</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About