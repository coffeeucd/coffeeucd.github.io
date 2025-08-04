function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center">
              {/* <Coffee className="w-6 h-6 text-white" /> */}
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Mentorship Program</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Events</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Officers</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 tracking-wide">
            C.O.F.F.E.E.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Club for Future Femme Electrical Engineers
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              About
            </button>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              Events
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Do</h2>
            <p className="text-gray-600">Community + Fun + More</p>
          </div>
          
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex-none w-72 h-48 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"></div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Social */}
            <div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xs font-bold">LOGO</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {/* <Instagram className="w-5 h-5" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {/* <Youtube className="w-5 h-5" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {/* <Linkedin className="w-5 h-5" /> */}
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home