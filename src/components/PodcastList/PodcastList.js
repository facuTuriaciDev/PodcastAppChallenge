import PodcastBox from '../PodcastBox';
import './PodcastList.css';

const PodcastList = ({filterArray, setFindPodcast}) => {

  if(filterArray.length === 1){
    return (
      <PodcastBox podcast={filterArray[0]} />
    )
  }

  return(
    <div className='podcastList'>
      {filterArray.map(podcast => 
        <PodcastBox podcast={podcast} key={podcast.id.attributes['im:id']}/>)
      }
    </div>
  )
}

export default PodcastList