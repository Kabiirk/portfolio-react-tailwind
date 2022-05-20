import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const Projects = () => {
  return (
    <div name="Projects" className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-6'>Check out more of my work on <a href="https://github.com/">github</a> </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Card */}
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button>Button 1</button>
                            </a>
                            <a href="/">
                                <button>button 2</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects