import './PodcastEpisodesList.scss';
import { Link } from 'react-router-dom';

const PodcastEpisodesList = ({ podcast }) => {

  if (!podcast) {
    return <div></div>;
  }

  const episodes = podcast.slice(1);

  const COLLECTION_ID = episodes[0].collectionId;

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return (
    <div>
      <div className={'episodesListContainer'}>

        <div className={'header'}>
          <h3>{`Episodes: ${episodes.length}`}</h3>
        </div>

        <div className={'list'}>
          <div className={'episode episodeHeader'}>
            <div>Title</div>
            <div>Date</div>
            <div>Duration</div>
          </div>
          {episodes.map((episode) => (
            <div key={episode.trackId} className={'episode'}>

              <div className={'episodeTitle'}>
                <Link key={episode.trackId} to={`/podcast/${COLLECTION_ID}/episode/${episode.trackId}`}>
                  <p>{episode.trackName}</p>
                </Link>  
              </div>

              <div className={'episodeDetails'}>
                <p>{new Date(episode.releaseDate).toLocaleDateString()}</p>
              </div>
              <div className={'episodeDetails'}>
                <p>{(formatTime(episode.trackTimeMillis))}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PodcastEpisodesList;