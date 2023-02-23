import './PodcastBox.css';

const PodcastBox = ({ podcast }) => {

  return (
  <div className='podcastBoxContainer' key={podcast.id.attributes['im:id']}> 
    <img className='podcastBoxImage' src={podcast["im:image"][2].label} alt="flag" width="200" height="200"/>
    <p>{podcast["im:name"].label}</p>
    <label>Author: {podcast["im:artist"].label}</label>
  </div>
  )
}

export default PodcastBox
