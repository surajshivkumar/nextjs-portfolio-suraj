'use client'

import About from './components/content/About'
import Experience from './components/content/Experience'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Skills from './components/content/Skills'
import useMousePosition from '@/hooks/useMousePosition'

export default function Home() {
  const { x, y } = useMousePosition()

  const gradientStyle = {
    background: `radial-gradient(800px at ${x}px ${y}px, rgba(30, 58, 138, 0.3) 0%, transparent 25%)`,
  }

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={gradientStyle}
      ></div>
      <div className="h-screen grid grid-cols-2 gap-4 px-24 mx-auto z-50 max-w-screen overflow-auto">
        <header className="sticky top-0 self-start h-screen flex flex-col justify-between items-center py-24 w-full max-w-[1280px] mx-auto">
          <Navigation />
          <Footer />
        </header>
        <div className="px-4 container text-sky-500 py-24 grid grid-cols-1 gap-7 w-full max-w-[700px] mx-auto">
          <About />
          <Experience />
          <Skills />
        </div>
      </div>
    </>
  )
}
