import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PodcastDetails from './pages/PodcastDetails';
import EpisodeDetails from './pages/EpisodeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;