'use client'

import useMousePosition from '@/hooks/useMousePosition'
import Image from 'next/image'
import Footer from './components/footer'
import Navigation from './components/navigation'

export default function Home() {
  const { x, y } = useMousePosition()

  const startOfCareer = new Date('2019-03')
  const today = new Date()
  const timeDifference = today.getTime() - startOfCareer.getTime()
  const yearsOfExp = timeDifference / (1000 * 60 * 60 * 24 * 365.25)
  const formattedExperience = yearsOfExp.toFixed(1)

  const gradientStyle = {
    background: `radial-gradient(800px at ${x}px ${y}px, rgba(30, 58, 138, 0.3) 0%, transparent 25%)`,
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0" style={gradientStyle}></div>
      <div
        className="h-[100%] grid grid-cols-2 gap-4 px-24 mx-auto max-w-[1280px] "
      >
        <header className="h-[100%] flex flex-col justify-between py-24">
          <Navigation />
          <Footer />
        </header>
        <div className="px-4 container text-sky-500 py-24">
          <div className="flex flex-row align-items justify-between items-center">
            <div className="">
              <h1 className="text-7xl w-[80%]">Hello world! I&apos;m John!</h1>
              <h2 className="text-2xl w-[75%]">
                I&apos;m a software engineer with {formattedExperience} years of
                experience
              </h2>
              <p className="text-l w-[70%]">
                I excel in creating polished digital products, ensuring
                accessibility across diverse platforms. My strength lies in
                simplifying complex challenges, delivering refined and effective
                solutions. Let&apos;s collaborate to achieve exceptional
                results.
              </p>
            </div>
            <div className="relative">
              <div className="h-[auto] w-[auto] relative overflow-hidden rounded-full z-10">
                <Image
                  src="/images/main.png"
                  alt="main"
                  height={500}
                  width={500}
                />
              </div>
              <div className="absolute inset-0 h-[50%] w-[50%] bg-sky-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
