import PodcastBox from '../PodcastBox';
import './PodcastList.css';
import { Link } from 'react-router-dom';

const PodcastList = ({filterArray}) => {
  return(
    <div className='podcastList'>
        {filterArray.map(podcast => (
        <Link key={podcast.id.attributes['im:id']} to={`/podcast/${podcast.id.attributes['im:id']}`}>
          <PodcastBox podcast={podcast}/>
        </Link>      
        ))}
    </div>
  )
}

export default PodcastList