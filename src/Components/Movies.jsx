import React from "react";
import Moviecard from "./Moviecard";

function Movies() {
  return (
    <>
      <div className="text-2xl text-center mt-5 text-yellow-500 font-bold">
        Trending Movies
      </div>
      <div className="flex flex-row justify-around">
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
      </div>
    </>
  );
}

export default Movies;
