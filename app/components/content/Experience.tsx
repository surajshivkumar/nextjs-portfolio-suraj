'use client'

import { FaArrowRightLong } from 'react-icons/fa6'
import { GrFormView } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const experience = [
    {
      date: 'Sep 2023 - Present',
      position: 'Graduate Research Assistant',
      company: 'University of South Florida',
      description: [
        "Exploring the intersection of cyber security and NLP, applying computational techniques to decode complex patterns; significantly contributed to Tampa Bay's State of the Region Report, highlighting key community indicators through analytical skills.",
      ],
    },
    {
      date: 'Jan 2023 - Aug 2023',
      position: 'Jr. Data Scientist',
      company: 'Yulu Bikes',
      description: [
        'Developed a dynamic performance scorecard, optimizing HR processes. Also worked on a machine learning model for bike demand prediction, resulting in a 20% increase in fleet utilization and improved customer satisfaction.',
      ],
    },
    {
      date: 'May 2022 - Jan 2023',
      position: 'Associate Data Analyst',
      company: 'Fleek',
      description: [
        'Collaborated with the Growth and Marketing team to predict customer churn using XGBoost, boosting Return on Ad Spend by 12%. Managed a PostgreSQL database and established a version-controlled code repository, enhancing team efficiency and reducing data processing time by half.',
      ],
    },
    {
      date: 'Aug 2021 - May 2022',
      position: 'Data Analyst',
      company: 'Findability Sciences',
      description: [
        'Created a Deep Q Learning model for Real-Time Bidding, reducing costs by 5%. Utilized unsupervised learning techniques for customer segmentation, improving marketing strategies and customer engagement.',
      ],
    },
  ]
  return (
    <section id="Experience" className="h-fit ">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex flex-row items-center gap-3 hover:text-white w-fit p-2 mb-12"
      >
        <a
          href="/Suraj_Resume_Analytics.pdf"
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
              <ul
                className={`font-thin ${hoveredItem === index ? 'text-gray-400' : ''}`}
              >
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
