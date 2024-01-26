'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from './Button'

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0)

  const updateWidth = () => {
    const newWidth = window.innerWidth
    setWidth(newWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    updateWidth()
  }, [])

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false)

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavButton)
  }, [])

  return (
    <>
      <Link href="/" style={{ display: showButton ? 'none' : 'block' }}>
        <div className="group h-[60px] w-[60px] [perspective:1000px] flex flex-row">
          <div className="h-[60px] w-[60px] rounded-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <Image
                className="h-[60px] w-[60px] rounded-full"
                src="/images/closeup.jpg"
                alt="Closeup"
                width={width < 1024 ? '150' : '60'}
                height={width < 1024 ? '45' : '60'}
              />
            </div>
            <div className="absolute inset-0 h-[60px] w-[60px] rounded-full bg-black/80 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-black">
              <div className="flex h-[60px] w-[60px] rounded-full flex-col items-center justify-center">
                <h1 className="font-bold text-sm text-sky-500">HIRE ME</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div
        style={{
          display: showButton ? 'block' : 'none',
        }}
      >
        <Button />
      </div>
    </>
  )
}

export default Logo
