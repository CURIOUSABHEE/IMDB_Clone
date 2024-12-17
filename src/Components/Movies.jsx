import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handlePrev() {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  }

  function handleNxt() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    const apiKey = "a38613200c7f24ebeefc07af5f14cc15";
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
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
  }, [pageNo]);

  return (
    <>
      <div className="text-2xl text-center m-5 text-yellow-500 font-bold">
        Trending Movies
      </div>
      <div className="grid grid-cols-5 ml-5">
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

      <Pagination
        pageNo={pageNo}
        handleNxt={handleNxt}
        handlePrev={handlePrev}
      />
    </>
  );
}
//https://api.themoviedb.org/3/movie/popular?api_key=a38613200c7f24ebeefc07af5f14cc15&language=en-US&page=1

export default Movies;
