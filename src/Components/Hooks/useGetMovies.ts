import { useContext } from 'react';
import { MoviesContext } from '../../providers/MoviesContext/MovieContext';

export const useGetMovies = () => {
  const { getMovies } = useContext(MoviesContext);

  return async () => {
    await getMovies();
  };
};

