import Navbar from './navbar'

export type NavigationProps = {
  currentSection: string | null
}

const Navigation = ({ currentSection }: NavigationProps) => {
  return (
    <div>
      <Navbar currentSection={currentSection} />
    </div>
  )
}

export default Navigation
