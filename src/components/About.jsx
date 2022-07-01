import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
import profile from '../assets/profile.jpg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  hidden: { y:50, opacity:0 },
  visible: { y:0, opacity:1, transition:{delay:0.2, duration:0.5} },
}

const About = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);

    return (
      <div name='about' className='w-full h-screen flex-col bg-background p-4 text-heading'>
        <motion.div className='max-w-[800px] mx-auto flex flex-col justify-center items-center'
                    ref={ref}
                    variants={variant}
                    initial='hidden'
                    animate={control}>
          <div className='max-w-[800px] grid grid-cols-1'>
            <div className='text-center pb-8 pl-4'>
              <p className='text-3xl inline font-calibre-sb'>
                About Me
              </p>
            </div>
          </div>
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-4 px-4'>
              <div className='content-right'>
                <img src={profile} width="1001" height="1075" alt="Me !" title="Me !" className='mx-auto rounded-md w-[85%]'/>
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
                <button className='border-2 rounded-md px-6 py-3 text-sm font-sf-mono-re justified-center text-highlight border-highlight hover:bg-[#64ffda] hover:bg-opacity-10 hover:duration-200'>Download my Resume !</button>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    );
  };

export default About