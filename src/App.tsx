// App.tsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PathfindingVisualizer from './pages/PathfindingVisualizer';
import SortingVisualizer from './pages/SortingVisualizer';
import { Linkedin, Github, Mail } from "lucide-react"; // Import icons

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pathfinding-visualizer" element={<PathfindingVisualizer />} />
          <Route path="/sorting-visualizer" element={<SortingVisualizer />} />
        </Routes>
      </Router>
      <footer className="bg-grey h-24 py-14 flex flex-col items-center justify-center space-y-3">
          <p className="text-gray-500 mb-2">
            © {new Date().getFullYear()} Luke Edwards
          </p>
          <div className="flex gap-4 space-x-24 text-gray-500">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/luke-edwards-670181270/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="hover:text-blue-600" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/LukeDoesJava"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} className="hover:text-white" />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:luke0edwardss@gmail.com"
              aria-label="Email"
            >
              <Mail size={24} className="hover:text-red-600" />
            </a>
          </div>
        </footer>
    </>
  );
}

export default App;