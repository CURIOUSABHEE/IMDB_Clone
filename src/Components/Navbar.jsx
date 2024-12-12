import React from "react";
import Logo from "../image.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-5px">
      <img src={Logo} alt="Movie Logo" className="w-[70px]" />
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 text-3xl font-bold"
      >
        Home
      </Link>
      <Link
        to="/watchlist"
        className="text-blue-500  hover:text-blue-700 text-3xl font-bold"
      >
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
