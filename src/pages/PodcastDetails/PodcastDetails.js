import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastById } from '../../services/podcastApi';
import PodcastCard from '../../components/PodcastCard';

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    getPodcastById(podcastId).then((data) => {
      setPodcast(data);
    });
  }, [podcastId]);

  if (!podcast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PodcastCard podcast={podcast}/>
    </div>
  );
};

export default PodcastDetails;