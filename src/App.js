import { useState, useEffect } from 'react'
import axios from 'axios'
import PodcastFilter from './components/PodcastFilter';
import PodcastList from './components/PodcastList';

const App = () => {
  const [podcasts, setPodcasts] = useState([])
  const [findPodcast, setfindPodcast] = useState('')

  
  const filterArray = findPodcast.length === 0 ? podcasts 
  : podcasts.filter(e=>e["im:name"].label.toLowerCase().includes(findPodcast.toLowerCase()) || e["im:artist"].label.toLowerCase().includes(findPodcast.toLowerCase()))
  
  useEffect(() => {
    axios
      .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').then(response => {
        setPodcasts(response.data.feed.entry)
      })
  }, [])

  
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

export default App