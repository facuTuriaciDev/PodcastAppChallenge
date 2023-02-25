import { useState, useEffect } from 'react';
import { getPodcastDetails } from '../services/podcastApi';
import useSpinner from './useSpinner';

const useGetPodcastDetails = (podcastId) => {
  const [podcastDetails, setPodcastDetails] = useState();
  const [loading, setLoading] = useSpinner();

  useEffect(() => {
    setLoading(true);
    getPodcastDetails(podcastId).then((data) => {
      setPodcastDetails(data);
      setLoading(false);
    });
  }, [podcastId, setLoading]);

  return { podcastDetails, loading};
};

export default useGetPodcastDetails;