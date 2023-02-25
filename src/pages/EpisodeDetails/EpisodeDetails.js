import { useParams } from 'react-router-dom';
import PodcastCard from '../../components/PodcastCard';
import PodcastPlayer from '../../components/PodcastPlayer/PodcastPlayer';
import './EpisodeDetails.css';
import useGetPodcastById from '../../hooks/useGetPodcastById';
import useGetPodcastDetails from '../../hooks/useGetPodcastDetails';

const EpisodeDetails = () => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();

  const { podcast } = useGetPodcastById(podcastId);
  const { podcastDetails, loading } = useGetPodcastDetails(podcastId);

  if (!podcast || loading) {
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