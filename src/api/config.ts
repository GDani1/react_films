
const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = "9831c50c82e69ff7f61db3e0e6b834af";

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;

const creditsUrl = (id?: string) =>
  `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;
// for single actor
const actorDetailsUrl = (id?: string) =>
  `${API_URL}person/${id}?api_key=${API_KEY}`;
const actorCreditsUrl = (id?: string) =>
  `${API_URL}person/${id}/movie_credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE: string = 'w1280';

const POSTER_SIZE: string = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  movieUrl,
  creditsUrl,
  actorDetailsUrl,
  actorCreditsUrl,
};
