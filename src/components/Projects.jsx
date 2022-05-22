import React from 'react'

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
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-600'>
                    <div>
                        <span className='text-2xl font-bold text-white tracking-width'>
                            React.js Application 1
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-600'>
                    <div>
                        <span className='text-2xl font-bold text-white tracking-width'>
                            React.js Application 2
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-600'>
                    <div>
                        <span className='text-2xl font-bold text-white tracking-width'>
                            React.js Application 3
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-600'>
                    <div>
                        <span className='text-2xl font-bold text-white tracking-width'>
                            React.js Application 4
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-600'>
                    <div>
                        <span className='text-2xl font-bold text-white tracking-width'>
                            React.js Application 5
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className='group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-600'>
                    <div>
                        <span className='text-2xl font-bold text-white tracking-width'>
                            React.js Application 6
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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