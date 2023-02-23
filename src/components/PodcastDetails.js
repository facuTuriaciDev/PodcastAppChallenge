import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastById } from '../services/podcastApi';

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
      <h2>{podcast['im:name'].label}</h2>
      <img src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />
      <p>{podcast['im:artist'].label}</p>
    </div>
  );
};

export default PodcastDetails;