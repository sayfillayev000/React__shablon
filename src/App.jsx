import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Movie, People, SingleMovie, SinglePeople, SingleTrending, } from "./pages";
import "./index.css";
import "./assets/style/style.css";
import Header from "./companents/Header/Header";
import SinglePopular from "./pages/SinglePopular";
function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/popular-People" element={<People />} />
        <Route exact path="/single-movie/:singleId" element={<SingleMovie  />} />
        <Route exact path="/popular-People/:singlePeopleId" element={<SinglePeople />} />
        <Route exact path="/trending/:singleTrendingId" element={<SingleTrending />} />
        <Route exact path="/popular/:SinglePopularId" element={<SinglePopular />} />
        {/* <Route exact path="/search-movie/:id" element={<SearchMovie />} /> */}
      </Routes>
    </div>
  );
}

export default App;
