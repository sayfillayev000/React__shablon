import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useEffectData from "../Hook/useEffect";

const SingleMovie = () => {
  const { singleId } = useParams();
  const { isfetched, data } = useEffectData(
    `https://api.themoviedb.org/3/movie/${singleId}`,
  );
  return (
    <div className=" mt-32 container mx-auto grid grid-cols-4 p-4">
      {isfetched ?   <div
        className=" relative m-4 p-5 overflow-hidden rounded-lg flex w-[700px] gap-9 bg-blue-200"
        key={data?.data?.id}
      >
        <img
          className=" rounded-lg shadow-lg" 
          src={`https://themoviedb.org/t/p/w220_and_h330_face/${data?.data?.backdrop_path}`}
          alt="img"
        />
       <div>
       <h2 className=" mt-4 text-2xl font-bold text-purple-500">
          {data?.data?.title}
        </h2> 
        <svg className=" w-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>
        <span className=" text-lg text-gray-600">{data?.data?.release_date}</span>
        <p className=""> <span className=" font-bold">overview</span> <br /> {data?.data?.overview}</p>

        <span className=" absolute right-0 top-0 rounded-tl-lg bg-green-500 p-2 text-white">
          {data?.data?.vote_average}
        </span>
       </div>
      </div> : <h1>Looding...</h1>}
    
    </div>
  );
};
export default SingleMovie;
