'use client'

import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const experience = [
    {
      date: 'Jan 2014 - Aug 2016',
      position: 'Software Engineer',
      company: 'Prodly',
      description: `My main focus these days is building products and leading projects for our clients at Upstatement. I most enjoy building software in the sweet spot where design and engineering meet — things 
      that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.`,
    },
    {
      date: 'jan 2011 - aug 2016',
      position: 'software engineer',
      company: 'Prodly',
      description: `My main focus these days is building products and leading projects for our clients at Upstatement. I most enjoy building software in the sweet spot where design and engineering meet — things 
        that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.`,
    },
  ]
  return (
    <ol className="mb-12 ">
      {experience.map((exp, index) => (
        <div
          key={exp.date}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          className={`mb-12 grid grid-cols-2 gap-2 p-4 rounded-md ${
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
              className={`font-bold ${hoveredItem === index ? 'text-white' : ''} flex items-center`}
            >
              {exp.position}
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
        </div>
      ))}
    </ol>
  )
}
