import Logo from './Logo'
import { NavigationProps } from '..'
import { motion } from 'framer-motion'

const Navbar = ({ currentSection }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return
    const sectionElement = document.getElementById(sectionId)
    const sectionRect = sectionElement?.getBoundingClientRect()
    if (!sectionRect) return
    const topPosition = window.scrollY + sectionRect.top
    let offsetPosition = topPosition

    // Adjust the offset based on the section
    if (sectionId === 'About') {
      document.getElementById(sectionId)?.scrollTo(0, 0)
    } else if (sectionId === 'Experience') {
      // Scroll to the middle of the page
      offsetPosition =
        topPosition - window.innerHeight / 2 + sectionRect?.height / 2
    } else if (sectionId === 'Skills') {
      // Scroll to the bottom of the page
      offsetPosition = topPosition - window.innerHeight + sectionRect?.height
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navBarItems = [
    { value: 'About' },
    { value: 'Experience' },
    { value: 'Skills' },
  ]
  return (
    <div className="w-full h-20sticky top-0 text-sky-500">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col h-full">
          <div className="flex flex-row items-center gap-x-5">
            <h1 className=" text-5xl font-semibold">John Aagaard</h1>
            <Logo />
          </div>
          <h2 className="text-2xl mt-3 font-normal">Software Engineer</h2>
          <p className="mt-3">
            Crafting innovative solutions with code, one line at a time
          </p>
          <ul className="hidden md:flex flex-col mt-16 gap-y-10 text-xl text-sky-500">
            {navBarItems.map((item) => (
              <li key={item.value}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className={`hover:text-white cursor-pointer ${item.value === currentSection ? 'text-white' : ''}`}
                  onClick={() => scrollToSection(item.value)}
                >
                  {item.value}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
