import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const Project_Data = [
        {
          title: "Smart Health Monitoring System for the Elderly",
          description: "NodeMCU-based project that allows users to monitor vitals via a Blynk Dashboard.",
          stack: ['C++','Blynk','NodeMCU'],
        },
        {
          title: "NLP with LSTMs",
          description: "An end-to-end Project that scrapes user Reviews from Amazon, creates it's own training & testing data to be used by LSTM-NN",
          stack: ['Python','Tensorflow','Seaborn'],
        },
        {
          title: "IoTomize",
          description: "An end-to-end Dashboard to monitor Electrical apliance usage.",
          stack: ['HTML','CSS','JS'],
        },
        {
          title: "Smart Parking System",
          description: "An embedded systems project done with Atmega16A. Monitors status of parking spaces & Shows status on Blynk App.",
          stack: ['Assembly','C','Blynk'],
        },
        {
          title: "Sentiment & Emotion Analysis with Data-Vis",
          description: "Sentiment and Emotion Analysis done on data extracted from e-commerce websites.",
          stack: ['Python','VADER','Syuzhet'],
        },
        {
          title: "Flutter App for Monitoring Appliance Usage",
          description: "A simple app that allows users to track Sensor Data by connecting to a Firebase instance.",
          stack: ['Flutter','fl_charts','Firebase'],
        },
      ];

  return (
    <div name="Projects" className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-10 text-center'>
                <p className='text-3xl font-calibre-sb'>Projects</p>
                <p className='font-sf-mono-sb text-xs'>Check out more of my work on <a href="https://github.com/" className='text-cyan-400'><u>github</u></a> </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* { Project_Data.map( (data, key) =>{
                    return(
                        <ProjectCard title={data.title} description={data.description} stack={data.stack} />
                    );
                }
                 )
                } */}
                {/* Card */}
                <ProjectCard title={Project_Data[0].title} description={Project_Data[0].description} stack={Project_Data[0].stack}/>
                {/* Card */}
                <ProjectCard title={Project_Data[1].title} description={Project_Data[1].description} stack={Project_Data[1].stack}/>
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