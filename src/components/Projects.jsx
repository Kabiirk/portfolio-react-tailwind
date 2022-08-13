import React from 'react'
import ProjectCard from '../subcomponents/ProjectCard'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  hidden: { y:50, opacity:0 },
  visible: { y:0, opacity:1, transition:{
    staggerChildren: 0.2,
    duration:1,
  } },
}

const Projects = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);

    const Project_Data = [
        {
          url : "https://github.com/Kabiirk/Smart-health-monitoring-system",
          title: "Smart Health Monitoring System for the Elderly",
          description: "NodeMCU-based project that allows users to monitor vitals via a Blynk Dashboard.",
          stack: ['C++','Blynk','NodeMCU'],
        },
        {
          url : "https://github.com/Kabiirk/Sentiment-Analysis-with-LSTM",
          title: "NLP with LSTMs",
          description: "An end-to-end Project that scrapes user Reviews from Amazon, creates it's own training & testing data to be used by LSTM-NN",
          stack: ['Python','Tensorflow','Seaborn'],
        },
        {
          url : "https://github.com/Kabiirk/IoTomize",
          title: "IoTomize",
          description: "An end-to-end Dashboard to monitor Electrical apliance usage.",
          stack: ['HTML','CSS','JS'],
        },
        {
          url : "https://github.com/Kabiirk/Smart-parking",
          title: "Smart Parking System",
          description: "An embedded systems project done with Atmega16A. Monitors status of parking spaces & Shows status on Blynk App.",
          stack: ['Assembly','C','Blynk'],
        },
        {
          url : "https://github.com/Kabiirk/Sentiment-Analysis",
          title: "Sentiment & Emotion Analysis with Data-Vis",
          description: "Sentiment and Emotion Analysis done on data extracted from e-commerce websites.",
          stack: ['Python','VADER','Syuzhet'],
        },
        {
          url : "https://github.com/Kabiirk/sensor_data_flutter",
          title: "Flutter App for Monitoring Appliance Usage",
          description: "A simple app that allows users to track Sensor Data by connecting to a Firebase instance.",
          stack: ['Flutter','fl_charts','Firebase'],
        },
      ];

  return (
    <div name="Projects" className='w-full h-full text-gray-300 bg-background'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center'>
            <div className='text-center'>
                <p className='text-3xl font-calibre-sb'>Projects</p>
                <p className='font-sf-mono-sb text-xs'>Check out more of my work on <a href="https://github.com/" className='text-highlight'><u>github</u></a> </p>
            </div>

            <motion.div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 p-12'
                        ref={ref}
                        variants={variant}
                        initial='hidden'
                        animate={control}>
                { Project_Data.map( (data, index) =>{
                    return(
                      // Alternative is using forwardref() as per framer documentation
                      <motion.div key={index} variants={variant}>
                        <ProjectCard title={data.title} url={data.url} description={data.description} stack={data.stack} />
                      </motion.div>
                    );
                }
                 )
                }
            </motion.div>
        </div>
    </div>
  )
}

export default Projects