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
          <div className="flex items-center">
            <span className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200 mr-6">
              Mentorship Program
            </span>
            <span className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200 mr-6">
              Events
            </span>
            <span className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200 mr-6">
              Officers
            </span>
            <span className="text-black hover:text-gray-700 no-underline font-sans text-sm font-normal transition-colors duration-200">
              About
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
