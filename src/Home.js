import { useState, useEffect } from 'react'
import { getTopPodcasts }  from './services/podcastApi';
import PodcastFilter from './components/PodcastFilter';
import PodcastList from './components/PodcastList';

const Home = () => {
  const [podcasts, setPodcasts] = useState([])
  const [findPodcast, setfindPodcast] = useState('')
  
  const filterArray = findPodcast.length === 0 ? podcasts 
  : podcasts.filter(e=>e["im:name"].label.toLowerCase().includes(findPodcast.toLowerCase()) || e["im:artist"].label.toLowerCase().includes(findPodcast.toLowerCase()))

  useEffect(() => {
    getTopPodcasts().then((data) => {
      setPodcasts(data);
    });
  }, []);
  
  const handlefindPodcast = (event) => {
    setfindPodcast(event.target.value)
  }

  return (
    <div>
      <PodcastFilter customText={'Filter podcasts...'} elementFiltered={findPodcast} handle={handlefindPodcast} ElementFilteredCount={filterArray.length} />

      {
        <PodcastList filterArray={filterArray} setfindPodcast={setfindPodcast} />
      }
      
    </div>
  )
}

export default Home