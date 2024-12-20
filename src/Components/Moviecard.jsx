import React from "react";

function Moviecard({
  poster_path,
  original_title,
  movieObj,
  watchlist,
  handleAddtoWatchList,
  handleRemoveFromWatchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="relative m-3 h-[20vh] md:h-[50vh] w-[30vh] bg-cover bg-center flex flex-col justify-end rounded-lg hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      }}
    >
      {/* Star in the top-right corner */}
      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchlist(movieObj);
          }}
          className="absolute top-2 right-2 flex justify-center items-center h-8 w-8 bg-gray-900/70 rounded-full text-yellow-400"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchList(movieObj);
          }}
          className="absolute top-2 right-2 flex justify-center items-center h-8 w-8 bg-gray-900/70 rounded-full text-yellow-400"
        >
          &#11088;
        </div>
      )}

      {/* Title section */}
      <div>
        <div className="text-white text-xl text-center bg-gray-900/40 w-full p-2 rounded-b-lg">
          {original_title}
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
