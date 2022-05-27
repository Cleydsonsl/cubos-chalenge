import axios from 'axios';

const key = 'a9a6bc97baae4f51dd8ed8e36b7a2ca9';

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`
});

