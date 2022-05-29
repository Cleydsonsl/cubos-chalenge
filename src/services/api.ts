import axios from 'axios';

export const key = 'a9a6bc97baae4f51dd8ed8e36b7a2ca9';

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`
});

export const apiSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?&api_key=${key}`
});

export const apiMovieDetail = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export const apiPage = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false`,
});

