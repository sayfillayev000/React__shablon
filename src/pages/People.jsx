import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "autoprefixer";
import PeopleCard from "../companents/MovieCard/PeopleCard";
import useEffectData from "../Hook/useEffect";

const People = () => {
  const { isfetched, data } = useEffectData(
    "https://api.themoviedb.org/3/person/popular",
  );
   return (
    <>
      {isfetched ? (
        <div>
          <h1 className="relative top-32 text-3xl font-bold text-black">
            Popular Movies
          </h1>
          <div className=" container mx-auto grid grid-cols-4 p-4">
            {data?.data?.results.map(
              (movie) => (
                (
                  <PeopleCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.name}
                    reyting={movie.popularity}
                    data={movie.known_for[0].original_title}
                    img={`https://www.themoviedb.org/t/p/w235_and_h235_face${movie.profile_path}`}
                  />
                )
              ),
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default People;
