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
      <LoomVideos/>
      <Portfolios/>
      <Podcast/>
      <WritingSection/>
      {/* <Routes>
      <Route path='/' element= {<Landing/>}></Route>
      <Route path='/loom' element= {<LoomVideos/>}></Route>
      <Route path='/blogs' element= {<WritingSection/>}></Route>
      <Route path='/portfolio' element= {<Portfolios/>}></Route>
      <Route path='/podcast' element= {<Podcast/>}></Route>
      </Routes> */}
    </Router>
  );
};

export default App;