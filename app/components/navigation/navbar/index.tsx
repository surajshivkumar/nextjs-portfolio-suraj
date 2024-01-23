import Link from "next/link";
import Logo from "./Logo";
const Navbar =  ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-zinc-900 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p className="text-sky-500 font-sans">About me</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p  className="text-sky-500">Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p  className="text-sky-500">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar