import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PodcastDetails from './pages/PodcastDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
      </Routes>
    </Router>
  );
}

export default App;