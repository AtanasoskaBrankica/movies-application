"use client";
import { SORT_BY_GENRE } from "@/redux/slice/filterSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SortByGenres = ({ genres, data }) => {
  const [sortByGenre, setSortByGenre] = useState("");
  const dispatch = useDispatch();

  const filterByGenre = (id) => {
    setSortByGenre(id);

    dispatch(SORT_BY_GENRE({ data, sortByGenre }));
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h6>Sort By Genres</h6>
        </div>
      </div>
      <div className="row mt-2">
        {genres?.map((genre) => (
          <div key={genre?.id} className="col-5 pb-2">
            <button
              type="button"
              className={`rounded-pill text-white border border-1 fs-6 ${
                sortByGenre === genre?.id ? "bg-primary" : "bg-transparent"
              }`}
              onClick={() => filterByGenre(genre?.id)}
            >
              {genre?.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortByGenres;
