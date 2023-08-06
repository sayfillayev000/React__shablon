import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../companents/MovieCard/MovieCard";
import { data } from "autoprefixer";
import useEffectData from "../Hook/useEffect";

const Movie = () => {
  const { isfetched, data } = useEffectData(
    "https://api.themoviedb.org/3/movie/popular",
  );
  return (
    <>
      {isfetched ? (
        <div>
          <h1 className="relative top-32  text-3xl font-bold text-black">
            Popular Movies
          </h1>
          <div className=" container mx-auto grid grid-cols-4 p-4">
            {data?.data?.results.map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                reyting={movie.vote_average}
                data={movie.release_date}
                img={`https://themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Movie;
