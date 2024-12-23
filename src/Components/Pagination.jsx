import React from "react";

function Pagination({ pageNo, handlePrev, handleNxt }) {
  return (
    <div className="bg-gray-200 p-4 m-8 flex justify-center gap-10 rounded-md">
      <div>
        <i
          onClick={handlePrev}
          className="fa-solid fa-arrow-left fa-lg py-5 phhover:cursor-pointer hover:text-red-900"
        ></i>
      </div>
      <h3 className="text-2xl  hover:text-red-900  ">{pageNo}</h3>
      <div>
        <i
          onClick={handleNxt}
          className="fa-solid fa-arrow-right fa-lg py-5 hover:cursor-pointer hover:text-red-900"
        ></i>
      </div>
    </div>
  );
}

export default Pagination;
