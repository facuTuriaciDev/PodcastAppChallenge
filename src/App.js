import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PodcastDetails from './pages/PodcastDetails';
import EpisodeDetails from './pages/EpisodeDetails';
import PodcastHeader from './components/PodcastHeader';
import SpinnerContext from './components/SpinnerContext';

function App() {
  const [isLoading, setLoading] = useState(false);
  const value = { isLoading, setLoading };

  return (
    <SpinnerContext.Provider value={value}>
      <Router>
        <div> 
          <PodcastHeader/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} />
          </Routes>
        </div>
      </Router>
    </SpinnerContext.Provider>
  );
}

export default App;