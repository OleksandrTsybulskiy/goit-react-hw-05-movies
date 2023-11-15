import axios from 'axios';

axios.defaults.baseURL = 'https://www.themoviedb.org/';
const apiParams = {
  apiKey: '660a25ff0d169be0b577581da30e5eff',
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  const { data } = axios.get(`trending/all/week?${apiParams}`);
  return data.results;
};

export const getMovieByName = async query => {
  const { data } = axios.get(`/search/movie?${apiParams}&query=${query}`);
  return data.results;
};

export const getMovieDetails = async movie_id => {
  const { data } = axios.get(`movie/${movie_id}?${apiParams}`);
  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = axios.get(`/movie/${movie_id}/credits?${apiParams}`);
  return data.cast;
};

export const getMovieRewies = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews?${apiParams}`);
  return data.results;
};
