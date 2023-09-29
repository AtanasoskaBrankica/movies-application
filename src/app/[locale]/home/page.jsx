import MediaData from '@/app/[locale]/components/MediaData';
import {getMediaData} from '@/utils/requests';

const Home = async () => {
  const popularMovies = await getMediaData('movie', 'popular');
  const topRatedMovies = await getMediaData('movie', 'top_rated');
  const popularTVShows = await getMediaData('tv', 'popular');
  const topRatedTVShows = await getMediaData('tv', 'top_rated');

  return (
    <main className="h-auto mt-5 text-white">
      <MediaData
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        popularTVShows={popularTVShows}
        topRatedTVShows={topRatedTVShows}
      />
    </main>
  );
};

export default Home;
