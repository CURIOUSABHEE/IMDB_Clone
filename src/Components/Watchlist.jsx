import React from "react";
import { useState } from "react";

function Watchlist({ watchlist, setWatchlist }) {
  const [search, setSearch] = useState(" ");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };
  return (
    <>
      <div className="flex justify-center m-5 gap-10">
        <div className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:text-black">
          All Genres
        </div>
        <div className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:text-black">
          Action
        </div>
        <div className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:text-black">
          Crime
        </div>
        <div className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:text-black">
          Horror
        </div>
      </div>

      <div className="flex justify-center m-10">
        <input
          onChange={handleSearch}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-sm w-half p-2 "
          type="text"
          placeholder="Search Movies"
        />
      </div>

      <div className="relative overflow-x-auto m-5">
        <table className="w-full text-sm text-left  text-gray-800 dark:text-gray-400">
          <thead className="text-xs text-gray-600 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  <i
                    onClick={sortIncreasing}
                    className="fa-solid fa-arrow-up"
                  ></i>
                  <h3>Rating</h3>
                  <i
                    onClick={sortDecreasing}
                    className="fa-solid fa-arrow-down"
                  ></i>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Popularity
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      scope="row"
                      className="flex items-center gap-5 px-6 py-4 pt font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                        alt="Poster"
                        style={{ width: "70px", height: "70px" }}
                      />
                      <h3>{movieObj.original_title}</h3>
                    </td>

                    <td class="px-6 py-4">
                      <div class="flex justify-center items-center gap-2">
                        <i class="fa-solid fa-star"></i>
                        {movieObj.vote_average}
                      </div>
                    </td>
                    <td className="px-6 py-4">{movieObj.popularity}</td>
                    <td className="px-6 py-4">Actions</td>
                    <td className="px-6 py-4 text-red-600 "> Delete </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
