import type { Movies } from './types';
import { baseFetch } from './baseFetch';
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from './config';



export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  const endpoint = search
? `${SEARCH_BASE_URL}/${search}&page=${page}`
: `${POPULAR_BASE_URL}&page=${page}`;
  return await baseFetch<Movies>(endpoint);
};
