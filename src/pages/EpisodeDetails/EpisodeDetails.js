import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastById, getPodcastDetails } from '../../services/podcastApi';
import PodcastCard from '../../components/PodcastCard';
import PodcastPlayer from '../../components/PodcastPlayer/PodcastPlayer';
import './EpisodeDetails.css';

const EpisodeDetails = () => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();

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

  let filterEpisode = podcastDetails.filter((episode) => { 
    return episode.trackId === parseInt(episodeId);
  });

  return (
    <div className={'container'}>
      <div className={'container-left'}>
        <PodcastCard podcast={podcast} />
      </div>
      <div className={'container-right'}>
        <PodcastPlayer podcast={filterEpisode[0]} />
      </div>
    </div>
  );
};

export default EpisodeDetails;