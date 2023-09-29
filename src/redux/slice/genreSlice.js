import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesGenres: [],
  tvShowsGenres: [],
};

const genresSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    STORE_GENRES(state, action) {
      state.moviesGenres = action.payload.moviesGenres.genres;
      state.tvShowsGenres = action.payload.tvShowsGenres.genres;
    },
  },
});

export const { STORE_GENRES } = genresSlice.actions;

export const selectedMoviesGenres = (state) => state.genre.moviesGenres;
export const selectedTVShowsGenres = (state) => state.genre.tvShowsGenres;

export default genresSlice.reducer;
