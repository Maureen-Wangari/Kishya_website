import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat } from 'lucide-react';
import './index.css';

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
            <header className="headerportfolio">
        <h1>Behind The Mic: Kishya</h1>
        <p>The Pulse Of Progress</p>
      </header>
    
    <div className="podcast-container">
         <div>
        <img src='Images/podcastimage.jpeg' alt='' className='podMic'/>
      </div>
      <div className="podcast-content">
        <h1>LISTEN TO KISHYA INSIGHTS ANYTIME AND ANYWHERE</h1>
        <p>Mind Blowing podcasts that hook you in, makes you learn and makes you laugh.</p>
        <div className="podcast-player">
          <img src="Images/micp.jpg" alt="Podcast cover" className="podcast-cover" />
          <div className="podcast-info">
            <h3>TRADITIONAL VS MODERN RELATIONSHIPS WITH KISHYA</h3>
            <p>Where do you lie?</p>
            <p>Episode 1</p>
          </div>
          <div className="player-controls">
            <button><SkipBack size={24} /></button>
            <button onClick={togglePlay}>
              {isPlaying ? <Pause size={24} /> : <Play size={24}  />}
            </button>
            <button><SkipForward size={24} /></button>
            <button><Repeat size={24} /></button>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <audio 
            ref={audioRef}
            src="https://audio.com/aber-racheal/audio/kishya-audio-podcast"
          />
        </div>
        <a href="https://audio.com/aber-racheal/audio/kishya-audio-podcast" className="subscribe-button">
          Play EP 1 <span>→</span></a>
      </div>
    
    </div>
    </div>
  );
};

export default Podcast;