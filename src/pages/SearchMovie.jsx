import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../companents/MovieCard/MovieCard";
import { data } from "autoprefixer";
import { useParams } from "react-router-dom";
import useEffectData from "../Hook/useEffect";

const Popular = () => {
  const { isfetched, data } = useEffectData(
    "https://api.themoviedb.org/3/tv/popular",
  );
  return (
    <>
      {isfetched ? (
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
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default SearchMovie;
