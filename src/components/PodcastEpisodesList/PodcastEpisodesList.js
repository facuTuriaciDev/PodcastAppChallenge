import './PodcastEpisodesList.css';

const PodcastEpisodesList = ({ podcast }) => {

  if (!podcast) {
    return <div>Loading...</div>;
  }

  const episodes = podcast;

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
                <p>{episode.trackName}</p>
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