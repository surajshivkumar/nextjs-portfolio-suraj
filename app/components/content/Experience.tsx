'use client'

import { FaArrowRightLong } from 'react-icons/fa6'
import { GrFormView } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const experience = [
    {
      date: 'June 2021 - Jan 2024',
      position: 'Software Engineer',
      company: 'Prodly Inc',
      description: `At Prodly, I significantly improved development efficiency and performance with React and 
      Node.js, leading to a 20% increase in speed and a 15% enhancement in performance metrics. My role involved streamlining 
      customer onboarding and enhancing integration processes, contributing to the advancement of our product's capabilities and the satisfaction of a diverse client base.`,
    },
    {
      date: 'Jan 2022 - April 2016',
      position: 'React Native Engineer',
      company: 'Awesemo',
      description: `As a React Native Contractor at Awesemo, I efficiently engineered multiple app pages in line with design specifications and integrated API endpoints for optimal data management.
      My collaborative efforts with design and API teams facilitated timely app store launches on both Apple and Android platforms, meeting critical deadlines within a 4-month timeframe.`,
    },
    {
      date: 'Sept 2019 - May 2021',
      position: 'Software Engineer',
      company: 'Ambi Inc',
      description: `At Ambi Inc, I embraced diverse roles, from Software Engineer Intern to full Software Engineer specializing in React & Node. I contributed to refining workflows between product and engineering teams, enhancing feature development and prioritization. 
      My work in developing API services and building reusable React components significantly improved user experiences and customer success. Additionally, I was involved in creating tools with Go and React for internal administrative use, improving customer service and sales data analytics. My efforts in mobile app development ensured feature parity with our web application, offering users a seamless cross-platform experience.`,
    },
  ]
  return (
    <div id="Experience" className="section h-fit ">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex flex-row items-center gap-3 hover:text-white w-fit p-2 mb-12"
      >
        <a
          href="/John Aagaard - Software Engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Resume
        </a>
        <GrFormView className="text-2xl" />
      </motion.button>
      <ol className="mb-12">
        {experience.map((exp, index) => (
          <li
            key={exp.date}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`grid grid-cols-[1fr_2fr] gap-2 p-4 rounded-md ${
              hoveredItem !== null && hoveredItem !== index ? 'opacity-50' : ''
            } ${hoveredItem === null ? '' : 'hover:bg-gray-800'}`}
          >
            <motion.div animate={{ y: hoveredItem === index ? '45%' : '0%' }}>
              <div
                className={`${hoveredItem === index ? 'text-sky-500' : 'text-slate-300'} font-thin`}
              >
                {exp.date}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-2">
              <div
                className={`font-semibold ${hoveredItem === index ? 'text-white' : ''} flex items-center w-fit`}
              >
                <div className="w-fit">{exp.position}</div>
                <FaArrowRightLong
                  className={`mx-2 ${hoveredItem === index ? 'text-sky-500' : 'text-white'}`}
                />
                {exp.company}
              </div>
              <div
                className={`font-thin ${hoveredItem === index ? 'text-gray-400' : ''}`}
              >
                {exp.description}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
