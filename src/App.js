import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './HomePage';
import LoomVideos from './LoomVideos';
import WritingSection from './WritingSection';
import Portfolios from './PortfolioPage';
import Podcast from './Podcast';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Landing/>
      <Portfolios/>
      <LoomVideos/>
      <Podcast/>
      <WritingSection/>
    </Router>
  );
};

export default App;