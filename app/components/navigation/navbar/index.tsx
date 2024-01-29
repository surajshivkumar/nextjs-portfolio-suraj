import Link from 'next/link'
import Logo from './Logo'
const Navbar = ({ toggle }: { toggle: () => void }) => {
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
            <li>
              <p className="cursor-pointer">About</p>
            </li>
            <li>
              <p className="cursor-pointer">Projects</p>
            </li>
            <li>
              <p className="cursor-pointer">Skills</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
