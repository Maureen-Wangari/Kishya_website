import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
      <Routes>
      <Route path='/loom' element= {<LoomVideos/>}></Route>
      <Route path='/blogs' element= {<WritingSection/>}></Route>
      <Route path='/portfolio' element= {<Portfolios/>}></Route>
      <Route path='/podcast' element= {<Podcast/>}></Route>

      </Routes>A
    </Router>
  );
};

export default App;