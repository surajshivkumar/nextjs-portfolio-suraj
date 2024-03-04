import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className=" text-sky-500 sticky bottom-0 flex flex-row justify-between max-w-[200px] w-full items-center text-3xl mt-4">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://github.com/surajshivkumar"
      >
        <FaGithub className="cursor-pointer hover:text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.linkedin.com/in/suraj-shivakumar/"
      >
        <FaLinkedin className="cursor-pointer hover:text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.instagram.com/shotbysuri/"
      >
        <FaInstagram className="cursor-pointer hover:text-white" />
      </motion.a>
    </div>
  )
}
