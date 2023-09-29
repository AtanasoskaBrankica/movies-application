"use client";
import { useEffect } from "react";
import MediaGallery from "./MediaGallery";
import { useDispatch, useSelector } from "react-redux";
import {
  STORE_MEDIA_DATA,
  selectedPopularMovies,
  selectedPopularTVShows,
  selectedTopRatedMovies,
  selectedTopRatedTVShows,
} from "@/redux/slice/mediaSlice";
import {
  POPULAR_MOVIES,
  POPULAR_TV_SHOWS,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "@/constants/mediaTypeData";

const MediaData = ({
  popularMovies,
  topRatedMovies,
  popularTVShows,
  topRatedTVShows,
}) => {
  const dispatch = useDispatch();
  const fetchedPopularMovies = useSelector(selectedPopularMovies);
  const fetchedTopRatedMovies = useSelector(selectedTopRatedMovies);
  const fetchedPopularTVShows = useSelector(selectedPopularTVShows);
  const fetchedTopRatedTVShows = useSelector(selectedTopRatedTVShows);

  useEffect(() => {
    dispatch(
      STORE_MEDIA_DATA({
        popularMovies,
        topRatedMovies,
        popularTVShows,
        topRatedTVShows,
      })
    );
  }, [
    dispatch,
    popularMovies,
    topRatedMovies,
    popularTVShows,
    topRatedTVShows,
  ]);

  return (
    <>
      <MediaGallery
        sectionTitle="Popular Movies"
        mediaData={fetchedPopularMovies}
        type={`/${POPULAR_MOVIES}`}
      />
      <MediaGallery
        sectionTitle="Top Rated Movies"
        mediaData={fetchedTopRatedMovies}
        type={`/${TOP_RATED_MOVIES}`}
      />
      <MediaGallery
        sectionTitle="Popular TV Shows"
        mediaData={fetchedPopularTVShows}
        type={`/${POPULAR_TV_SHOWS}`}
      />
      <MediaGallery
        sectionTitle="Top Rated TV Shows"
        mediaData={fetchedTopRatedTVShows}
        type={`/${TOP_RATED_TV_SHOWS}`}
      />
    </>
  );
};

export default MediaData;
