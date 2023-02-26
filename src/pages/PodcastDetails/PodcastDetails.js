import { useParams } from 'react-router-dom';
import PodcastCard from '../../components/PodcastCard';
import PodcastEpisodesList from '../../components/PodcastEpisodesList';
import './PodcastDetails.scss';
import useGetPodcastById from '../../hooks/useGetPodcastById';
import useGetPodcastDetails from '../../hooks/useGetPodcastDetails';

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { podcast } = useGetPodcastById(podcastId);
  const { podcastDetails } = useGetPodcastDetails(podcastId);

  if (!podcast || !podcastDetails) {
    return <div></div>;
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