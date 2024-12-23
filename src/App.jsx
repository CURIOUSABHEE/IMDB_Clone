import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  // let handleAddtoWatchList = (movieObj) => {
  //   let newWatchlist = [...watchlist, movieObj];
  //   localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
  //   setWatchlist(newWatchlist);
  //   console.log(newWatchlist);
  // };

  let handleAddtoWatchList = (movieObj) => {
    console.log("Adding movie:", movieObj);
    if (!watchlist.some((movie) => movie.id === movieObj.id)) {
      let newWatchlist = [...watchlist, movieObj];
      setWatchlist(newWatchlist);
      localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
      console.log("Watchlist updated:", newWatchlist);
    } else {
      console.log("Movie already in watchlist:", movieObj);
    }
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    setWatchlist(filteredwatchlist);
  };

  useEffect(() => {
    try {
      let moviesFromLocalStorage = localStorage.getItem("movieApp");
      if (moviesFromLocalStorage) {
        setWatchlist(JSON.parse(moviesFromLocalStorage));
      }
    } catch (error) {
      console.error("Error parsing localStorage data", error);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
