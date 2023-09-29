import {
  selectedPopularMovies,
  selectedPopularTVShows,
  selectedTopRatedMovies,
  selectedTopRatedTVShows,
} from '@/redux/slice/mediaSlice';
import {
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  POPULAR_TV_SHOWS,
  TOP_RATED_TV_SHOWS,
} from '@/constants/mediaTypeData';

export const getMediaDataBasedOnPath = {
  [POPULAR_MOVIES]: selectedPopularMovies,
  [TOP_RATED_MOVIES]: selectedTopRatedMovies,
  [POPULAR_TV_SHOWS]: selectedPopularTVShows,
  [TOP_RATED_TV_SHOWS]: selectedTopRatedTVShows,
};
