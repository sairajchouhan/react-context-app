import React, { useContext } from "react";
import Movie from "./Movie";
import "../css/all.css";
import { MovieContext } from "../contexts/MovieContext";

const MovieList = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <div className="movie-list">
        {movies.map((eachMovie, index) => (
          <Movie
            key={eachMovie.id}
            name={eachMovie.name}
            year={eachMovie.year}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
