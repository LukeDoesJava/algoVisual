// App.tsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import PathfindingVisualizer from './pages/Pathfinding/PathfindingVisualizer';
import SortingVisualizer from './pages/Sorting/SortingVisualizer';
import SideNavBar from './components/SideNavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/">
      <SideNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathfinding-visualizer" element={<PathfindingVisualizer />} />
        <Route path="/sorting-visualizer" element={<SortingVisualizer />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;