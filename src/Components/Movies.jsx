import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = "a38613200c7f24ebeefc07af5f14cc15";
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        if (Array.isArray(res.data.results)) {
          setMovies(res.data.results);
        } else {
          console.error("Unexpected API response:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="text-2xl text-center mt-5 text-yellow-500 font-bold">
        Trending Movies
      </div>
      <div className="grid grid-cols-8">
        {movies.map((movieObj) => {
          return (
            <Moviecard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              original_title={movieObj.original_title}
            />
          );
        })}
      </div>
    </>
  );
}
//https://api.themoviedb.org/3/movie/popular?api_key=a38613200c7f24ebeefc07af5f14cc15&language=en-US&page=1

export default Movies;
