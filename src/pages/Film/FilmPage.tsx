import { baseFetch } from "@/api/baseFetch";
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  creditsUrl,
  movieUrl,
} from "@/api/config";
import { Credits, Movie } from "@/api/types";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { Card } from "@/components/Card/Card";
import { FilmInfo } from "@/components/FilmInfo/FilmInfo";
import { Grid } from "@/components/Grid/Grid";
import { Header } from "@/components/Header/Header";

import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const FilmPage = () => {
  const { id } = useParams();
  const movieEndPoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const {
    data: movie,
    isLoading: loadMovie,
    error: errorMovie,
  } = useQuery({
    queryFn: () => baseFetch<Movie>(movieEndPoint),
    queryKey: ["movie"],
    refetchOnWindowFocus: false,
  });
  const {
    data: credits,
    isLoading: loadCredits,
    error: errorCredits,
  } = useQuery({
    queryFn: () => baseFetch<Credits>(creditsEndpoint),
    queryKey: ["credits"],
    refetchOnWindowFocus: false,
  });

  const directors = credits?.crew.filter((member) => member.job === "Director");

  const cast = credits?.cast;
  if (errorCredits || errorMovie)
    return (
      <div className="px-6">
        <p className="mt-12 mb-4">
          Oops! Sorry, there was a problem getting the movie details.
        </p>
        <p>
          Please try going back{" "}
          <Link to="/" className="underline">
            home
          </Link>
          .
        </p>
      </div>
    );

  return (
    <main>
      <div>
        <title>{`${
          movie?.title ? movie.title : "Error"
        } | React Film Database`}</title>
      </div>
      <Header />

      {movie && directors && cast ? (
        <>
          <Breadcrumb title={movie.title} />
          <FilmInfo
            thumbUrl={
              movie.poster_path && !loadMovie
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : "/no_image.jpg"
            }
            rating={movie.vote_average}
            year={movie.release_date.split("-")[0]}
            title={movie.title}
            backgroundImgUrl={
              movie.backdrop_path && !loadMovie
                ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
                : "/no_image.jpg"
            }
            summary={movie.overview}
            directors={directors}
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
          <Grid className="px-6 py-6 max-w-screen-xl mx-auto" title="Cast">
            {cast.map((actor) => (
              <Card
                key={actor.credit_id}
                imgUrl={
                  actor.profile_path && !loadCredits
                    ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
                    : ""
                }
                title={actor.name}
                subtitle={actor.character}
                href={`/cast/${actor.id}`}
              />
            ))}
          </Grid>
        </>
      ) : null}
    </main>
  );
};

export default FilmPage;
