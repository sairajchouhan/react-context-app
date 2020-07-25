import React, { useContext } from "react";
import "../css/all.css";
import { MovieContext } from "../contexts/MovieContext";

const Movie = ({ name, year, index }) => {
  const [movies, setMovies] = useContext(MovieContext);
  const removeMovie = () => {
    let moviesNow = [...movies];
    moviesNow.splice(index, 1);
    setMovies(moviesNow);
  };
  return (
    <div className="each-movie">
      <div className="movie">
        {name} is released in {year}
      </div>
      <a href="#" onClick={removeMovie}>
        <i class="fas fa-times-circle"></i>
      </a>
    </div>
  );
};

export default Movie;
