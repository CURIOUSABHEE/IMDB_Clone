import React from "react";

function Moviecard({ poster_path, original_title }) {
  return (
    <div
      className=" m-3 h-[5vh] md:h-[50vh] w-[20vh] bg-cover bg-center flex items-end rounded-lg hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      }}
    >
      <div className="text-white text-xl text-center bg-gray-900/40 w-full  p-2 rounded-b-lg">
        {original_title}
      </div>
    </div>
  );
}

export default Moviecard;
