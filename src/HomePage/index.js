import React from 'react';
import './index.css';

function Landing() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="title">Explore the beauty of Knowledge with Kishya and Within Kishya</h1>
        <p className="subtitle">A place where learning and adventure find a uniting voice</p>
      </header>

      <div className="image-container">
        <img src="/Images/homePage.jpg" alt="Azores landscape" className="home-image" />
      </div>

      <div className="scroll-prompt">
        <p>Scroll down</p>
        <div className="scroll-icon"></div>
      </div>
    </div>
  );
}

export default Landing;