import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = `913469bb1c1eef486d339f6ac122cc37`;

const fetchTrendingsFilms = () => {
  return axios
    .get(`trending/all/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

const fetchSearchFilms = searchQuery => {
  return axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${searchQuery}`,
    )
    .then(({ data }) => data.results);
};

const fetchMovieDetails = movie_id => {
  return axios.get(`movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
};

export { fetchTrendingsFilms, fetchSearchFilms, fetchMovieDetails };
