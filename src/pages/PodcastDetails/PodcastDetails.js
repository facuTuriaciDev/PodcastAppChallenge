import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastById, getPodcastDetails } from '../../services/podcastApi';
import PodcastCard from '../../components/PodcastCard';
import PodcastEpisodesList from '../../components/PodcastEpisodesList';
import './PodcastDetails.css';

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [podcastDetails, setPodcastDetails] = useState(null);

  useEffect(() => {
    getPodcastById(podcastId).then((data) => {
      setPodcast(data);
    });
  }, [podcastId]);

  useEffect(() => {
    getPodcastDetails(podcastId).then((data) => {
      setPodcastDetails(data);
    });
  }, [podcastId]);

  if (!podcast || !podcastDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={'container'}>
      <div className={'container-left'}>
        <PodcastCard podcast={podcast} />
      </div>
      <div className={'container-right'}>
        <PodcastEpisodesList podcast={podcastDetails} />
      </div>
    </div>
  );
};

export default PodcastDetails;