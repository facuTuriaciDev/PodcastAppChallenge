import axios from "axios";

const TOP_PODCASTS_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
const CACHE_KEY_PREFIX = 'podcasts';
const CACHE_DURATION_MS = 86400000; // 24 hours en milliseconds

function getCacheKey(key) {
  return `${CACHE_KEY_PREFIX}_${key}`;
}

function getFromCache(key) {
  const cachedData = localStorage.getItem(getCacheKey(key));
  const cachedTimestamp = localStorage.getItem(getCacheKey(`${key}_timestamp`));
  const currentTime = new Date().getTime();

  if (cachedData && cachedTimestamp && currentTime - cachedTimestamp < CACHE_DURATION_MS) {
    console.log('Cache hit');
    return JSON.parse(cachedData);
  } else {
    console.log('Cache miss');
    return null;
  }
}

function saveToCache(key, data) {
  localStorage.setItem(getCacheKey(key), JSON.stringify(data));
  localStorage.setItem(getCacheKey(`${key}_timestamp`), new Date().getTime());
}

export async function getTopPodcasts() {
  const cachedData = getFromCache('top'); //top is just a key

  if (cachedData) {
    return cachedData;
  } else {
    try {
      const response = await axios.get(TOP_PODCASTS_URL);
      const responseData = response.data.feed.entry;
    
      saveToCache('top', responseData);
    
      return responseData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export async function getPodcastDetails(podcastId) {
  const cacheKey = `details_${podcastId}`;
  const cachedData = getFromCache(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData).results;
  } else {
    try {
      const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=2`)}`); // CROSS_ORIGIN
      const responseData = response.data.contents;
    
      saveToCache(cacheKey, responseData);
    
      return JSON.parse(responseData).results;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export async function getPodcastById(podcastId) {
  const podcasts = await getTopPodcasts();
  return podcasts.find(podcast => podcast.id.attributes['im:id'] === podcastId) || null;
}