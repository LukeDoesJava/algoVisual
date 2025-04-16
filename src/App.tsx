// App.tsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import PathfindingVisualizer from './pages/Pathfinding/PathfindingVisualizer';
import SortingVisualizer from './pages/Sorting/SortingVisualizer';
import { Github, MapPinned, HomeIcon, Layers } from "lucide-react"; // Import icons

function App() {
  return (
    <>
    {/* Hero Section */}
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r-8 border-white z-45">
      <div className="p-6">
      <h1 
      className="text-2xl bg-primary font-bold uppercase tracking-tight cursor-pointer text-white mb-8" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
      ALGO//VISUAL
      </h1>
      <nav>
      <ul className="flex flex-col gap-6">
        {[
      { href: "/", label: "HOME", icon: <HomeIcon className="w-5 h-5" />, color: "hover:bg-white hover:text-gray-900" },
      { href: "/pathfinding-visualizer", label: "PATHFINDING", icon: <MapPinned className="w-5 h-5" />, color: "hover:bg-red-900" },
      { href: "/sorting-visualizer", label: "SORTING", icon: <Layers className="w-5 h-5" />, color: "hover:bg-green-400 hover:text-gray-900" },
      { href: "https://github.com/LukeDoesJava/algoVisualizer", label: "CODE", icon: <Github className="w-5 h-5" />, color: "hover:bg-black" },
        ].map(({ href, label, icon, color }) => (
      <a
        key={label}
        href={href}
        className={`px-4 py-3 text-white rounded flex items-center gap-3 hover:font-semibold ${color}`}
      >
        <span className="flex items-center justify-center w-6 h-6">{icon}</span>
        <span className="flex-1">{label}</span>
      </a>
        ))}
      </ul>
      </nav>
      </div>
    </div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathfinding-visualizer" element={<PathfindingVisualizer />} />
        <Route path="/sorting-visualizer" element={<SortingVisualizer />} />
      </Routes>
      </Router>

      {/* Footer */}
      <footer className="border-t-8 border-white bg-gray-900 text-white font-mono">
      <div className="mx-auto max-w-6xl p-6 py-8">
        <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-bold">ALGO//VISUAL</h4>
          <p className="mt-2">© 2025 Luke Edwards, made with React + TS</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2">
          <a href="https://github.com/LukeDoesJava" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/luke-edwards-670181270/" className="hover:underline">LinkedIn</a>
          <a href="mailto:luke0edwardss@gmail.com" className="hover:underline">Email me</a>
          <a href="https://www.lukepe.com" className="hover:underline">Website & Resume</a>
        </div>
        </div>
      </div>
      </footer>
    </>
  );
}

export default App;