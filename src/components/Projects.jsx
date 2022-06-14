import React from 'react'
import ProjectCard from '../subcomponents/ProjectCard'

const Projects = () => {
    const Project_Data = [
        {
          id : 1,
          url : "https://tailwindcss.com/",
          title: "Smart Health Monitoring System for the Elderly",
          description: "NodeMCU-based project that allows users to monitor vitals via a Blynk Dashboard.",
          stack: ['C++','Blynk','NodeMCU'],
        },
        {
          id : 2,
          url : "https://tailwindcss.com/",
          title: "NLP with LSTMs",
          description: "An end-to-end Project that scrapes user Reviews from Amazon, creates it's own training & testing data to be used by LSTM-NN",
          stack: ['Python','Tensorflow','Seaborn'],
        },
        {
          id : 3,
          url : "https://tailwindcss.com/",
          title: "IoTomize",
          description: "An end-to-end Dashboard to monitor Electrical apliance usage.",
          stack: ['HTML','CSS','JS'],
        },
        {
          id : 4,
          url : "https://tailwindcss.com/",
          title: "Smart Parking System",
          description: "An embedded systems project done with Atmega16A. Monitors status of parking spaces & Shows status on Blynk App.",
          stack: ['Assembly','C','Blynk'],
        },
        {
          id : 5,
          url : "https://tailwindcss.com/",
          title: "Sentiment & Emotion Analysis with Data-Vis",
          description: "Sentiment and Emotion Analysis done on data extracted from e-commerce websites.",
          stack: ['Python','VADER','Syuzhet'],
        },
        {
          id : 6,
          url : "https://tailwindcss.com/",
          title: "Flutter App for Monitoring Appliance Usage",
          description: "A simple app that allows users to track Sensor Data by connecting to a Firebase instance.",
          stack: ['Flutter','fl_charts','Firebase'],
        },
      ];

  return (
    <div name="Projects" className='w-full md:h-screen text-gray-300 bg-background'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-3xl font-calibre-sb'>Projects</p>
                <p className='font-sf-mono-sb text-xs'>Check out more of my work on <a href="https://github.com/" className='text-highlight'><u>github</u></a> </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 p-12'>
                { Project_Data.map( (data) =>{
                    return(
                        <ProjectCard key={data.id} title={data.title} url={data.url} description={data.description} stack={data.stack} />
                    );
                }
                 )
                }
            </div>
        </div>
    </div>
  )
}

export default Projects