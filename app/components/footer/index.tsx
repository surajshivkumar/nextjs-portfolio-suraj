import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className="text-sky-500 sticky bottom-0 flex flex-row justify-between max-w-[200px] w-full items-center text-3xl">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://github.com/jaagaard01"
      >
        <FaGithub className="cursor-pointer hover:text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.linkedin.com/in/john-aagaard/"
      >
        <FaLinkedin className="cursor-pointer hover:text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://twitter.com/john_aagaard"
      >
        <FaTwitter className="cursor-pointer hover:text-white" />
      </motion.a>
    </div>
  )
}
