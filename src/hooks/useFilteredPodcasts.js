import { useState, useEffect } from 'react';
import { getTopPodcasts } from '../services/podcastApi';

const useFilteredPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchPodcast, setsearchPodcast] = useState('');

  useEffect(() => {
    getTopPodcasts().then((data) => {
      setPodcasts(data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const handlesearchPodcast = (event) => {
    setsearchPodcast(event.target.value);
  };

  const filteredPodcasts = podcasts.filter((podcast) => {
    const title = podcast["im:name"].label.toLowerCase();
    const artist = podcast["im:artist"].label.toLowerCase();
    return title.includes(searchPodcast) || artist.includes(searchPodcast);
  });

  return [filteredPodcasts, searchPodcast, handlesearchPodcast];
};

export default useFilteredPodcasts;