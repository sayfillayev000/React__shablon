import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "autoprefixer";
import PopularCard from "../companents/MovieCard/PopularCard";
import useEffectData from "../Hook/useEffect";

const Popular = () => {
  const { isfetched, data } = useEffectData(
    "https://api.themoviedb.org/3/tv/popular",
  );
 return (
    <>
      {isfetched ? (
        <div>
          <h1 className="relative top-36  text-3xl font-bold text-black">
            Popular
          </h1>
          <div className=" container relative top-36 mx-auto   flex h-[40rem] overflow-scroll p-4">
            {data?.data?.results.map((movie) => (
              <PopularCard
                id={movie.id}
                key={movie.id}
                title={movie.name}
                reyting={movie.vote_average}
                data={movie.first_air_date}
                img={`https://themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
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

export default Popular;
