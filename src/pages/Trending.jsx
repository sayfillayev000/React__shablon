import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "autoprefixer";
import TrendingCard from "../companents/MovieCard/TrendingCard";
import useEffectData from "../Hook/useEffect";

const Trending = () => {
  const { isfetched, data } = useEffectData(
    "https://api.themoviedb.org/3/trending/all/day",
  );
  return (
    <>
      {isfetched ? (
        <div>
          <h1 className="relative top-36 text-3xl font-bold text-black">
            Trending
          </h1>
          <div className=" container relative top-36 mx-auto   flex h-[40rem] overflow-scroll p-4">
            {data?.data?.results.map((movie) => (
              <TrendingCard
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

export default Trending;
