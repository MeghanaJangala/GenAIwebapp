import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const BrainSegmentation = () => <h1>Brain Segmentation</h1>;
const LungSegmentation = () => <h1>Lung Segmentation</h1>;
const ProteinPrediction = () => <h1>Protein Structure Prediction</h1>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/brain">Brain Segmentation</Link></li>
          <li><Link to="/lung">Lung Segmentation</Link></li>
          <li><Link to="/protein">Protein Prediction</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brain" element={<BrainSegmentation />} />
        <Route path="/lung" element={<LungSegmentation />} />
        <Route path="/protein" element={<ProteinPrediction />} />
      </Routes>
    </Router>
  );
}

export default App;
