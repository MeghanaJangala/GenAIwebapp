import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FeatureSection from "./FeatureSection"; // Importing the Feature Section
import "./App.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Gen AI Medical Diagnosis and Drug Design</h1>
      <p>Get all your predictions and diagnoses with cutting-edge AI technology.</p>

      {/* Sections */}
      <div className="section">
        <img src="/images/braintumor.png" alt="Brain Tumor Segmentation" />
        <div className="section-content">
          <h2>Brain Tumor Segmentation</h2>
          <p>Our AI model helps in accurate segmentation of brain tumors for better diagnosis and treatment.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h2>Lung Tumor Segmentation</h2>
          <p>Detect lung tumors effectively using advanced AI segmentation techniques.</p>
        </div>
        <img src="/images/lungtumor.png" alt="Lung Tumor Segmentation" />
      </div>

      <div className="section">
        <img src="/images/Protein Structure.png" alt="Protein Structure Prediction" />
        <div className="section-content">
          <h2>Protein Structure Prediction</h2>
          <p>Predict protein structures with high accuracy to accelerate drug discovery.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h2>Drug Design Tools</h2>
          <p>Utilize AI-driven tools for designing effective drugs for various diseases.</p>
        </div>
        <img src="/images/drug_design.jpg" alt="Drug Design Tools" />
      </div>

      {/* Feature Section (Similar to Codementor) */}
      <FeatureSection />
    </div>
  );
};

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">GenAI Web App</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/brain-segmentation">Brain Segmentation</Link></li>
        <li><Link to="/lung-segmentation">Lung Segmentation</Link></li>
        <li><Link to="/protein-prediction">Protein Prediction</Link></li>
        <li><Link to="/drug-design">Drug Design Tools</Link></li>
      </ul>
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brain-segmentation" element={<h1>Brain Segmentation Page</h1>} />
          <Route path="/lung-segmentation" element={<h1>Lung Segmentation Page</h1>} />
          <Route path="/protein-prediction" element={<h1>Protein Prediction Page</h1>} />
          <Route path="/drug-design" element={<h1>Drug Design Tools Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
