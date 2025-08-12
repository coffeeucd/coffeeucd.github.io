import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Navbar from './components/Navbar'
//import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        {/* You can add Footer here */}
      </div>
    </Router>
  )
}

export default App
