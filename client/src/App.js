import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import CSS for dark mode styling

// Components for different sections
const Home = () => <h1>Home Page</h1>;
const BrainSegmentation = () => <h1>Brain Segmentation</h1>;
const LungSegmentation = () => <h1>Lung Segmentation</h1>;
const ProteinPrediction = () => <h1>Protein Structure Prediction</h1>;
const DrugDesignTools = () => <h1>Drug Design Tools</h1>;

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="logo">GenAI Web App</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/brain">Brain Segmentation</Link></li>
            <li><Link to="/lung">Lung Segmentation</Link></li>
            <li><Link to="/protein">Protein Prediction</Link></li>
            <li><Link to="/drug-design">Drug Design Tools</Link></li>
          </ul>
          {/* Dark mode toggle */}
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brain" element={<BrainSegmentation />} />
          <Route path="/lung" element={<LungSegmentation />} />
          <Route path="/protein" element={<ProteinPrediction />} />
          <Route path="/drug-design" element={<DrugDesignTools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
