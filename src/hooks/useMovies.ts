import { useState } from "react";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: Date;
  overview: string;
  genre_ids: [];
  vote_average: string;
}

export function useMovies(pageLimit: number) {
  const [movie, setMovie] = useState('');

  // function getMovies(page: number) {
  //   const virtualPage = ()
  // }

  return
}