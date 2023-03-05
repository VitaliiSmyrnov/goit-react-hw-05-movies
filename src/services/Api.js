import axios from 'axios';

const API_KEY = '5cbb87aef27f9b4333ebebc944ad48bd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchMovieTrendingList = async signal => {
  const response = await axios.get('/trending/movie/day', { signal });

  return response.data.results;
};

export const fetchMovieSearch = async (q, signal) => {
  const response = await axios.get(`/search/movie?query=${q}`, { signal });

  return response.data.results;
};

export const fetchMovieDetails = async (id, signal) => {
  const response = await axios.get(`/movie/${id}`, { signal });

  return response.data;
};

export const fetchMovieCast = async (id, signal) => {
  const response = await axios.get(`/movie/${id}/credits`, { signal });

  return response.data.cast;
};

export const fetchMovieReviews = async (id, signal) => {
  const response = await axios.get(`/movie/${id}/reviews`, { signal });

  return response.data.results;
};
