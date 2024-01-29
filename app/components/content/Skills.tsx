import { DiMysql, DiPostgresql } from 'react-icons/di'
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from 'react-icons/fa'

import { BiLogoTypescript } from 'react-icons/bi'
import { FaGolang } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const skills = [
  { icon: FaHtml5, name: 'HTML5' },
  { icon: FaCss3Alt, name: 'CSS3' },
  { icon: FaReact, name: 'React' },
  { icon: FaNode, name: 'Node.js' },
  { icon: DiMysql, name: 'MySQL' },
  { icon: DiPostgresql, name: 'PostgreSQL' },
  { icon: FaGolang, name: 'Golang' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: BiLogoTypescript, name: 'TypeScript' },
  { icon: TbBrandNextjs, name: 'Next.js' },
]

const halfwayIndex = Math.ceil(skills.length / 2)
const skillsColumn1 = skills.slice(0, halfwayIndex)
const skillsColumn2 = skills.slice(halfwayIndex)

export default function Skills() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-4">
        {skillsColumn1.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            whileHover={{ x: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="text-4xl" />
            <span className="opacity-0 hover:opacity-100 transition-opacity">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        {skillsColumn2.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            whileHover={{ x: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="text-4xl" />
            <span className="opacity-0 hover:opacity-100 transition-opacity">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
