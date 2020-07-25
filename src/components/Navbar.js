import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Navbar = () => {
  const [totalMovies] = useContext(MovieContext);
  return (
    <nav>
      <h2>The Movie App</h2>
      <div>
        total movies: <span>{totalMovies.length}</span>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
