'use client'

import { useEffect, useState } from 'react'

import About from './components/content/About'
import Experience from './components/content/Experience'
import Works from './components/content/Works'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Skills from './components/content/Skills'
import useMousePosition from '@/hooks/useMousePosition'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string | null>('About')

  const { x, y } = useMousePosition()

  const gradientStyle = {
    background: `radial-gradient(800px at ${x}px ${y}px, rgba(30, 58, 138, 0.3) 0%, transparent 25%)`,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: [0.8] }
    ) // Adjust threshold as needed

    // Observe each section
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={gradientStyle}
      ></div>
      <div className="h-fit md:h-screen grid grid-cols-1 md:grid-cols-2 gap-4 md:px-24 md:mx-auto z-50 max-w-screen overflow-auto">
        <header className="md:sticky top-0 self-start md:h-screen flex flex-col md:justify-between items-center md:py-24 w-full max-w-[1280px] mx-auto">
          <Navigation currentSection={currentSection} />
          <Footer />
        </header>
        <div className="px-4 container text-sky-500 md:py-24 grid grid-cols-1 gap-7 w-full max-w-[700px] mx-auto">
          <About />
          <Experience />
          <Works />
          <Skills />
        </div>
      </div>
    </>
  )
}
