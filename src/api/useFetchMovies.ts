import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchMovies";
import type { Movies } from "./types";

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(
    {
      
      queryFn: ({ pageParam = 1 }) => fetchMovies(search, pageParam),
      queryKey:["movies", search],
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        } else return undefined;
      },
      refetchOnWindowFocus: false,
      initialPageParam: undefined,
    }
  );
};
