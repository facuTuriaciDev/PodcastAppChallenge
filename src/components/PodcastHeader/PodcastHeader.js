import { Link } from 'react-router-dom';
import './PodcastHeader.css';

const PodcastHeader = () => {
  return (
    <div className="app-header">
      <Link className='link' to="/">
        <p>Podcaster</p>
      </Link>
    </div>
  );
};

export default PodcastHeader;