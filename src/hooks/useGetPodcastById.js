import { useState, useEffect, useContext } from 'react';
import { getPodcastById } from '../services/podcastApi';
import SpinnerContext from '../components/SpinnerContext';

const useGetPodcastById = (podcastId) => {
  const { setLoading } = useContext(SpinnerContext);
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    getPodcastById(podcastId).then((data) => {
      setLoading(true);
      setPodcast(data);
      setLoading(false);
    });
  }, [podcastId, setLoading]);


  return { podcast };
};

export default useGetPodcastById;