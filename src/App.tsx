import { HashRouter as Router, Routes, Route } from "react-router-dom"; // HashRouter is safest on GitHub Pages
import Home from "./pages/Home";
import Mentorship from "./pages/Mentorship";
import Events from "./pages/Events";
//import Officers from "./pages/Officers";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
