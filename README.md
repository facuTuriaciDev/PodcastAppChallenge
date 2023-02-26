# Podcast App Challenge

Mini-application for listening to iTunes music podcasts consisting of three views:

* Main view
* Details of a podcast
* Details of a podcast chapter

## Description of views Scripts

### `Main View`
URL: /

In the main view, a list of the 100 most popular podcasts according to Apple's list is displayed. The user can filter the podcasts by title or by the name of its author. Clicking on a podcast navigates the user to the detail view of the podcast.

### `Details of a podcast`
URL: /podcast/{podcastId}

In the detail view of a podcast, a sidebar is displayed with the podcast image, its title, its author, and its description. In the main section, the number of episodes that the podcast currently has is shown, as well as a list of them indicating their title, publication date and duration. Clicking on an episode navigates the user to the detail view of the episode.

### `Details of an episode`
URL: /podcast/{podcastId}/episode/{episodeId}

In the detail view of an episode, the same sidebar is displayed as in the detail view of the podcast. The main section displays the podcast title, its description, and a basic audio player (HTML5 native) to play the podcast. Episode descriptions that contain HTML are rendered interpreted.

## Scripts

### `npm start`
Run the app in development mode at http://localhost:3000

### npm `run build`
Build the application for production in the build folder.
Optimize the build for best performance.

## Resources
* URL to obtain the list of the 100 most popular podcasts:
https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json
* Service to be able to access external resources that do not provide JSONP or
CORS headers: https://api.allorigins.win
* iTunes API: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/LookupExamples.html

## Languages
* HTML: https://developer.mozilla.org/es/docs/Web/HTML
* SaSS: https://sass-lang.com/
* Javascript: https://developer.mozilla.org/es/docs/Web/JavaScript
* React: https://es.reactjs.org/
* Axios: https://axios-http.com/es/docs/intro
