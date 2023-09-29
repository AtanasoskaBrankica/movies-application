import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredMediaData: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SORT(state, action) {
      const { data, sort } = action.payload;
      let tempData = [];
      if (sort === "popularity-descending") {
        tempData = data.slice().sort((a, b) => {
          return b.popularity - a.popularity;
        });
      }

      if (sort === "popularity-ascending") {
        tempData = data.slice().sort((a, b) => {
          return a.popularity - b.popularity;
        });
      }
      if (sort === "rating-descending") {
        tempData = data.slice().sort((a, b) => {
          return b.vote_average - a.vote_average;
        });
      }
      if (sort === "rating-ascending") {
        tempData = data.slice().sort((a, b) => {
          return a.vote_average - b.vote_average;
        });
      }

      if (sort === "a-z") {
        tempData = data.slice().sort((a, b) => {
          return (
            a?.title.localeCompare(b?.title) || a.name.localeCompare(b?.name)
          );
        });
      }
      if (sort === "z-a") {
        tempData = data.slice().sort((a, b) => {
          return (
            b?.title.localeCompare(a?.title) || b.name.localeCompare(a?.name)
          );
        });
      }

      state.filteredMediaData = tempData;
    },

    SORT_BY_GENRE(state, action) {
      const { data, sortByGenre } = action.payload;
      const tempData = data.filter((item) =>
        item.genre_ids.includes(sortByGenre)
      );
      state.filteredMediaData = tempData;
    },

    FILTER_BY_SEARCH(state, action) {
      const { data, searchValue } = action.payload;
      const tempData = data.filter(
        (item) =>
          item?.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
          item?.name?.toLowerCase().includes(searchValue.toLowerCase())
      );
      state.filteredMediaData = tempData;
    },
  },
});

export const { SORT, SORT_BY_GENRE, FILTER_BY_SEARCH } = filterSlice.actions;

export const selectedFilteredMediaData = (state) =>
  state.filter.filteredMediaData;

export default filterSlice.reducer;
