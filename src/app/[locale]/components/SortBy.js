'use client';
import {SORT} from '@/redux/slice/filterSlice';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

const SortBy = ({data}) => {
  const [sort, setSort] = useState('popularity-descending');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SORT({data, sort}));
  }, [dispatch, data, sort]);

  return (
    <>
      <div className="row mb-2">
        <div className="col-xs-12">
          <h6>Sort Results By</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <select
            value={sort}
            onChange={event => setSort(event?.target?.value)}
            className="p-1 rounded-pill"
          >
            <option value="popularity-descending">Popularity Descending</option>
            <option value="popularity-ascending">Popularity Ascending</option>
            <option value="rating-descending">Rating Descending</option>
            <option value="rating-ascending">Rating Ascending</option>
            <option value="a-z">Title (A-Z)</option>
            <option value="z-a">Title (Z-A)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortBy;
