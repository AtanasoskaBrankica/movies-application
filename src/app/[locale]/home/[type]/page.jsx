import MediaDataList from '@/app/[locale]/components/MediaDataList';
import {getGenres} from '@/utils/requests';

const page = async () => {
  const moviesGenres = await getGenres('movie');
  const tvShowsGenres = await getGenres('tv');

  return (
    <MediaDataList moviesGenres={moviesGenres} tvShowsGenres={tvShowsGenres} />
  );
};

export default page;
