import { FaCss3Alt, FaHtml5, FaNode, FaPython } from 'react-icons/fa'

import { BiLogoTypescript } from 'react-icons/bi'
import { DiPostgresql } from 'react-icons/di'
import { FaGolang } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import {
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiTableau,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const skills = [
  { icon: FaPython, name: 'Python' },
  { icon: DiPostgresql, name: 'PostgreSQL' },
  { icon: SiTensorflow, name: 'Tensorflow' },
  { icon: SiPytorch, name: 'Pytorch' },
  { icon: SiFlask, name: 'Flask' },
  { icon: SiTableau, name: 'Tableau' },
  { icon: IoLogoJavascript, name: 'JavaScript' },
  { icon: FaHtml5, name: 'HTML5' },
  { icon: FaCss3Alt, name: 'CSS3' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
]

const halfwayIndex = Math.ceil(skills.length / 2)
const skillsColumn1 = skills.slice(0, halfwayIndex)
const skillsColumn2 = skills.slice(halfwayIndex)

export default function Skills() {
  return (
    <section id="Skills" className="section w-full flex justify-around">
      <div className="flex flex-col items-center gap-4">
        {skillsColumn1.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            whileHover={{ x: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-row items-center justify-start gap-4 group"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity w-24 text-white">
              {name}
            </span>
            <Icon className="text-4xl flex-shrink-0 group-hover:text-white" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        {skillsColumn2.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            whileHover={{ x: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-row items-center justify-start gap-4 group"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity w-24 text-white">
              {name}
            </span>
            <Icon className="text-4xl flex-shrink-0 group-hover:text-white" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
