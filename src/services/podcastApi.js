import axios from "axios";

const API_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
const CACHE_KEY = 'topPodcastsCache';

export async function getTopPodcasts() {
  // Clear cache for testing purposes
  //localStorage.removeItem(CACHE_KEY);

  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
  const currentTime = new Date().getTime();

  /*If cache exists and is less than a day old, return cached data

  Change the miliseconds to change the cache time for testing purposes
  · 86400000 = 24 hours
  · 5000 miliseconds = 5 seconds
  */

  let cacheExpirationTime = 86400000;

  if (cachedData && cachedTimestamp && currentTime - cachedTimestamp < cacheExpirationTime) {
    //console.log('cache hit');
    return JSON.parse(cachedData)
  } 

  //console.log('cache miss');
  
  // Fetch data from API if cache is non-existent
  const response = await axios.get(API_URL);
  const responseData = response.data.feed.entry;

  // Update cache with new data and timestamp
  localStorage.setItem(CACHE_KEY, JSON.stringify(responseData));
  localStorage.setItem(`${CACHE_KEY}_timestamp`, currentTime);

  return responseData;
}

export async function getPodcastById(podcastId) {
  const podcasts = await getTopPodcasts();
  let getPodcastById = podcasts.find((podcast) => podcast.id.attributes['im:id'] === podcastId);
  return getPodcastById;
}

export async function getPodcastDetails(podcastId) {
  try {
    const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=20`)}`)
    const episodes = response.data.contents.slice(1); // el primer elemento es la información del podcast
    return JSON.parse(episodes);
  } catch (error) {
    console.error(error);
  }
}