import React from "react";

function Banner() {
  return (
    <div
      className="h-[50vh] md:h-[60vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://shorturl.at/dv1Th)`,
      }}
    >
      <div className="text-white text-2xl text-center bg-gray-900/40 w-full  p-2">
        Avengers Assemble
      </div>
    </div>
  );
}

export default Banner;
