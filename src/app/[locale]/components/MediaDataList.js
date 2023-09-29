'use client';
import {useEffect} from 'react';
import Filters from './Filters';
import {useDispatch, useSelector} from 'react-redux';
import {STORE_GENRES} from '@/redux/slice/genreSlice';
import {useParams} from 'next/navigation';
import getTitleByMediaTypePath from '@/utils/getTitleByMediaTypePath';
import MediaTypeData from './MediaTypeData';
import {getMediaDataBasedOnPath} from '@/utils/getMediaDataBasedOnPath';
import {getGenresBasedOnPath} from '@/utils/getGenresBasedOnPath';
import SearchBar from './SearchBar';

const MediaDataList = ({moviesGenres, tvShowsGenres}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const title = getTitleByMediaTypePath(params.type);
  const data = useSelector(getMediaDataBasedOnPath[params.type]);
  const genres = useSelector(getGenresBasedOnPath[params.type]);

  useEffect(() => {
    dispatch(STORE_GENRES({moviesGenres, tvShowsGenres}));
  }, [dispatch, moviesGenres, tvShowsGenres]);

  return (
    <div className="container text-white p-0">
      <div className="row pt-4 d-flex">
        <div className="col-xs-6 col-sm-6 col-lg-3 ">
          <h4>{title}</h4>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-4">
          <SearchBar data={data} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-lg-3">
          <Filters data={data} genres={genres} />
        </div>
        <div className="col">
          <MediaTypeData />
        </div>
      </div>
    </div>
  );
};

export default MediaDataList;
