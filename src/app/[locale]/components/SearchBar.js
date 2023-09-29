"use client";
import { FILTER_BY_SEARCH } from "@/redux/slice/filterSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ data, searchValue }));
  }, [dispatch, data, searchValue]);

  return (
    <form className="d-flex">
      <input
        type="text"
        className="form-control me-2 rounded-pill"
        placeholder="Search by name"
        onChange={(event) => setSearchValue(event?.target?.value)}
        value={searchValue}
      />
      <button type="submit" className="btn  bg-warning text-white rounded-3">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
