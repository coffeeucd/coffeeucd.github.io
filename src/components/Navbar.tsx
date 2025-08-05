import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-xl font-bold text-black">
            Your Logo
          </div>

          {/* Navigation links on the right */}
          <div className="flex items-center gap-x-8">
            <Link
              to="/mentorship"
              className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200"
            >
              Mentorship Program
            </Link>
            <Link
              to="/events"
              className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              to="/officers"
              className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200"
            >
              Officers
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
