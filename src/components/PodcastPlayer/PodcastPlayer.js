import './PodcastPlayer.scss';

const PodcastPlayer = ({ podcast }) => {
  if (!podcast) {
    return <div></div>;
  }

  let episode = podcast;
  const formattedDescription = podcast.description.replace(
    /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(?:[^\s]+\.(?:com|net|org|edu|gov|es|ar))/g,
    '<a href="$&">$&</a>'
  );

  return (
    <div>
      <div className='episodesListContainer'>
        <div className='podcastPlayer-list'>
          <div className='episode-title'>
            <div>{podcast.trackName}</div>
          </div>

          <div className='episodeDescription'>
            <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
          </div>

          <hr className='podcastPlayer-divider' />

          <div className='episode-player'>
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