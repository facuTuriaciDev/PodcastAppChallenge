import { useState, useEffect } from 'react';
import { getTopPodcasts } from '../services/podcastApi';

const useTopPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    getTopPodcasts().then((data) => {
      setPodcasts(data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return podcasts;
};

export default useTopPodcasts;