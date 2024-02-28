import { baseFetch } from "@/api/baseFetch";
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  actorCreditsUrl,
  actorDetailsUrl,
} from "@/api/config";
import { ActorCredits, ActorDetails } from "@/api/types";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { Card } from "@/components/Card/Card";
import { CastInfo } from "@/components/CastInfo/CastInfo";
import { Grid } from "@/components/Grid/Grid";
import { Header } from "@/components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const CastPage = () => {
  const { id } = useParams();

  const detailsEndpoint = actorDetailsUrl(id);
  const creditsEndpoint = actorCreditsUrl(id);

  const {
    data: details,
    isLoading: loadDetails,

    error: errorDetails,
  } = useQuery({
    queryFn: () => baseFetch<ActorDetails>(detailsEndpoint),
    queryKey: ["details"],
    refetchOnWindowFocus: false,
  });
  const {
    data: credits,
    isLoading: loadCredits,

    error: errorCredits,
  } = useQuery({
    queryFn: () => baseFetch<ActorCredits>(creditsEndpoint),
    queryKey: ["credits"],
    refetchOnWindowFocus: false,
  });

  if (errorCredits || errorDetails)
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
          details?.name ? details.name : "Error"
        } | React Film Database`}</title>
      </div>
      <Header />
      {details && credits ? (
        <>
          <Breadcrumb title={details.name} />

          <CastInfo
            thumbUrl={
              details.profile_path && !loadDetails
                ? IMAGE_BASE_URL + POSTER_SIZE + details.profile_path
                : undefined
            }
            backgroundImgUrl={
              credits.cast[0].backdrop_path && !loadDetails
                ? IMAGE_BASE_URL + BACKDROP_SIZE + credits.cast[0].backdrop_path
                : undefined
            }
            biography={details.biography}
            birthday={details.birthday}
            deathday={details.deathday}
            role={details.known_for_department}
            name={details.name}
            gender={details.gender}
            place_of_birth={details.place_of_birth}
          />
          <Grid
            className="px-6 py-6 max-w-screen-xl mx-auto"
            title="Film credits"
          >
            {credits.cast.map((movie) => (
              <Card
                key={movie.id}
                imgUrl={
                  movie.poster_path && !loadCredits
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : ""
                }
                title={movie.title}
                subtitle={movie.character}
                href={`/film/${movie.id}`}
              />
            ))}
          </Grid>
        </>
      ) : null}
    </main>
  );
};

export default CastPage;
