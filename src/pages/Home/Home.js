import PodcastFilter from '../../components/PodcastFilter';
import PodcastList from '../../components/PodcastList';
import useFilteredPodcasts from '../../hooks/useFilteredPodcasts';

const Home = () => {
  const [filteredPodcasts, searchPodcast, handlesearchPodcast] = useFilteredPodcasts();

  return (
    <div>
      <PodcastFilter customText={'Filter podcasts...'} elementFiltered={searchPodcast} handle={handlesearchPodcast} ElementFilteredCount={filteredPodcasts.length} />

      <PodcastList filterArray={filteredPodcasts} setsearchPodcast={handlesearchPodcast} />
    </div>
  );
};

export default Home;