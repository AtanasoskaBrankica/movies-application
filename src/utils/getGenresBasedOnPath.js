import {
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  POPULAR_TV_SHOWS,
  TOP_RATED_TV_SHOWS,
} from "@/constants/mediaTypeData";
import {
  selectedMoviesGenres,
  selectedTVShowsGenres,
} from "@/redux/slice/genreSlice";

export const getGenresBasedOnPath = {
  [POPULAR_MOVIES]: selectedMoviesGenres,
  [TOP_RATED_MOVIES]: selectedMoviesGenres,
  [POPULAR_TV_SHOWS]: selectedTVShowsGenres,
  [TOP_RATED_TV_SHOWS]: selectedTVShowsGenres,
};
