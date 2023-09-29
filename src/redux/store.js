import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import mediaReducer from "./slice/mediaSlice";
import genreReducer from "./slice/genreSlice";
import filterReducer from "./slice/filterSlice";

const reducer = combineReducers({
  auth: authReducer,
  media: mediaReducer,
  genre: genreReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer,
});

export default store;
