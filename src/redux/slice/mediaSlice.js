import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  popularTVShows: [],
  topRatedTVShows: [],
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    STORE_MEDIA_DATA(state, action) {
      state.popularMovies = action.payload.popularMovies.results;
      state.topRatedMovies = action.payload.topRatedMovies.results;
      state.popularTVShows = action.payload.popularTVShows.results;
      state.topRatedTVShows = action.payload.topRatedTVShows.results;
    },
  },
});

export const { STORE_MEDIA_DATA } = mediaSlice.actions;

export const selectedPopularMovies = (state) => state.media.popularMovies;
export const selectedTopRatedMovies = (state) => state.media.topRatedMovies;
export const selectedPopularTVShows = (state) => state.media.popularTVShows;
export const selectedTopRatedTVShows = (state) => state.media.topRatedTVShows;

export default mediaSlice.reducer;
