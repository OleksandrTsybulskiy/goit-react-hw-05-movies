import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  api_key: '3fbc168df42f34d24dcb5c096192698e',
  language: 'en-US',
});

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/week?${searchParams}`);
  return data.results;
};

export const getMovieByName = async query => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${query}`
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?${searchParams}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?${searchParams}`
  );
  return data.cast;
};

export const getMovieRewies = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?${searchParams}`
  );
  return data.results;
};
