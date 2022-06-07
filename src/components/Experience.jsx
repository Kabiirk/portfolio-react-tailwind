import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
// import Tabs from '../components/Tabs'
import { useState } from 'react'
import Jobs from './Jobs';

const Experience = () => {
  const [togglestate, settogglestate] = useState(1);

  const toggleTab = (index) => {
    settogglestate(index);
  }

  const Job_Data = [
    {
      id:1,
      position: "Assosciate, OneCyber",
      org:"PriceWaterhouseCoopers, India",
      tabname:'PwC India',
      duration: "July 2021 - Present",
      para:'',
      points: [
          'Responsible to evaluate &deliver Cyber Security services comprising of ‘As-Is & To-Be’ risk assessment strategies, governance & practices and their compliance.',
          'BlynkThis leads to implementation of Security technologies, applications & infrastructure to acheive the goal of enterprise-wide Cyber Security.',
        ],
    },
    {
      id:2,
      position: "Intern, Dept. of Earth Sciences",
      org:"IIT-Roorkee",
      tabname:'IIT-Roorkee',
      duration: "Jan 2021 - June 2021",
      para:'',
      points: [
          'Project entailed development of PRIME-a GIS Application of IIT-R for the O&G industry by utilizing well log data & it’s aggregation and perform analytics using Machine Learning.',
          'Involved development of Code Editor, GUI, Data Visualization & Representationas graphs leading to enhanced user experience(UX).',
        ],
    },
    {
      id:3,
      position: "Intern, Data Engineering",
      org:"IBM",
      tabname:'IBM',
      duration: "April 2020 - June 2020",
      para:'As IoT Solution data-architect of "Smart-Surveillance" Project that IBM implemented for London HQ’ed Security Services MNC, I worked on',
      points: [
          'ETL process to design a Python-based scalable data-transport service for real-time video-feeds using IBM Visual Insight (IVI) Analytics Platform Insights.',
          'Services Solution using decentralized SOA and Secure Data-streaming.',
          'Devising a Solution that included creation of raw datasets, training-&- testing of the surveillance model, &',
          'Leverage Kafka, Kubernetes and Docker etc.',
        ],
    },
    {
      id:4,
      position: "Intern, Data Analytics",
      org:"Deloitte",
      tabname:'Deloitte',
      duration: "May 2019 - July 2019",
      para:'As an Analyst, my Project "Buyer Sentiment Analysis"- implemented for a global FMCG leader, involved :',
      points: [
          'NLP-based analytics applied to soap-related sales data extracted from sites like Amazon & Flipkart,',
          'Leveraging PowerBI as a Data Visualization tool.',
          'Project\'s outcome was to highlight the inherent business opportunities w.r.t. that category of soaps, using results of Python-based Analytics engine applied on the data collected.',
        ],
    },
    {
      id:5,
      position: "Microsoft Student Partner",
      org:"VIT Knowledge Community",
      tabname:'Microsoft SP',
      duration: "August 2019 - August 2021",
      para:'',
      points: [
          'As a part of the MSP community, I evangeliz eMicrosoft Technologies by conducting workshops for peers & juniors.',
        ],
    },
    {
      id:6,
      position: "Head, University Affairs",
      org:"Computer Society of India, VIT Student Branch",
      tabname:'CSI-VIT',
      duration: "July 2019 - July 2020",
      para:'',
      points: [
          'Led the creative content design team as a Board member of the Chapter, I mentored my juniors in creative content design and have been organizing one of South India\'s biggest annual Tech Conference DEVSPACE for the past 2 years.',
        ],
    },
  ];

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[800px] w-full grid grid-cols-1'>
            <div className='text-center pb-8 pl-4'>
              <p className='text-3xl inline font-calibre-sb'>
                Experience
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className='max-w-[800px] w-full grid md:grid-cols-4 grid-col-1 px-10 text-xs'>
              <div className='text-left md:flex-col flex sm:items-stretch overflow-x-scroll col-span-1 sm:col-span-1 font-sf-mono-re custom-scroll mr-10'>
                  {/* <div className={ togglestate===1 ? 'bg-blue-500' : 'bg-red-400'} onClick={() => toggleTab(1)}>PwC India</div>
                  <div className={ togglestate===2 ? 'bg-blue-500' : 'bg-red-500'} onClick={() => toggleTab(2)}>IIT-Roorkee</div>
                  <div className={ togglestate===3 ? 'bg-blue-500' : 'bg-red-600'} onClick={() => toggleTab(3)}>IBM</div>
                  <div className={ togglestate===4 ? 'bg-blue-500' : 'bg-red-700'} onClick={() => toggleTab(4)}>Deloitte</div>
                  <div className={ togglestate===5 ? 'bg-blue-500' : 'bg-red-800'} onClick={() => toggleTab(5)}>Microsoft SP</div>
                  <div className={ togglestate===6 ? 'bg-blue-500' : 'bg-red-900'} onClick={() => toggleTab(6)}>CSI-VIT</div> */}
                  { Job_Data.map( (data) =>{
                    return(
                      // <div className={ togglestate===data.id ? 'bg-cyan-200 bg-opacity-20 text-cyan-400 cursor-pointer border-l-[3px] border-cyan-400 px-4 py-2 flex-shrink-0' : 'cursor-pointer border-l-2 px-4 py-2 hover:bg-cyan-200 hover:bg-opacity-20 hover:duration-200 flex-shrink-0'} onClick={() => toggleTab(data.id)}>{data.tabname}</div>
                      <div className={ togglestate===data.id ? 'active' : 'not-active'} onClick={() => toggleTab(data.id)}>{data.tabname}</div>
                    )
                  }
                  )

                  }
              </div>

              {/* Tab Content */}
              <div className='font-calibre-re md:col-span-3 col-span-1  min-h-[300px]'>
                { Job_Data.map( (data) =>{
                return(
                    <div className= { togglestate ===data.id ? '' : 'hidden'}>
                      <Jobs
                        position={data.position} 
                        org={data.org}
                        duration={data.duration}
                        para={data.para}
                        points={data.points}
                      />
                    </div>
                    );
                    }
                  )
                }
              </div>
            </div>

        </div>
      </div>
  )
}

export default Experience