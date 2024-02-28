export type MoviePartial = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
};

export type Movie = {
  budget: number;
  runtime: number;
  revenue: number;
} & MoviePartial;

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  profile_path: string;
  id: number;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: string;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type ActorDetails = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type ActorCredit = {
  character: string;
  character_id: string;
  order: number;
} & MoviePartial;

export type ActorCredits = {
  cast: ActorCredit[];
};

export type Actor = {
  details: ActorDetails;
  credits: ActorCredits;
};
