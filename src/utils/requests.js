const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMediaData = async (mediaType, type) => {
  const res = await fetch(
    `${BASE_URL}/${mediaType}/${type}?api_key=${API_KEY}&language=en-US`
  );

  return res.json();
};

export const getGenres = async (mediaType) => {
  const res = await fetch(
    `${BASE_URL}/genre/${mediaType}/list?api_key=${API_KEY}&language=en-US`
  );

  return res.json();
};
