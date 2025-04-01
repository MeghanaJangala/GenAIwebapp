import React from "react";
import "./App.css";

const features = [
  {
    image: "/images/brain-icon.png",
    title: "AI-Powered Diagnosis",
    description: "Leverage cutting-edge AI models for medical diagnosis with high precision.",
  },
  {
    image: "/images/lung-icon.png",
    title: "Expert-Validated",
    description: "Our models are trained and verified by top medical professionals.",
  },
  {
    image: "/images/protein.png",
    title: "User-Friendly Tools",
    description: "Seamlessly integrate AI tools with an easy-to-use interface.",
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.image} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
