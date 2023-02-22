import PodcastBox from '../PodcastBox';

const PodcastList = ({filterArray, setFindPodcast}) => {

  const podcastListStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gridGap: '20px',
      justifyItems: 'center',
  }

  if(filterArray.length === 1){
    return (
      <PodcastBox podcast={filterArray[0]} />
    )
  }

  return(
    
    <div style={podcastListStyle}>
      {filterArray.map(podcast => 
        <PodcastBox podcast={podcast} key={podcast.id.attributes['im:id']}/>)
      }
    </div>
  )
}

export default PodcastList