import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";

function App() {
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
                <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
