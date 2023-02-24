import './PodcastPlayer.css';

const PodcastPlayer = ({ podcast }) => {

  if (!podcast) {
    return <div>Loading...</div>;
  }

  let episode = podcast;

  return (
    <div>
      <div className={'episodesListContainer'}>
        <div className={'podcastPlayer-list'}>
          <div className={'episode-title'}>
            <div>{podcast.trackName}</div>
          </div>

          <div>
            <p />{podcast.description}<p />
          </div>

          <hr className={'podcastPlayer-divider'}></hr>

          <div className={'episode-player'}>
            <audio controls controlsList="nodownload noplaybackrate">
              <source src={episode.previewUrl} type="audio/mpeg" />
            </audio>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PodcastPlayer;