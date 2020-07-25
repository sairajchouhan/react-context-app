import React, { useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import "../css/all.css";

const MovieForm = () => {
  const [movieName, setMovieName] = useState();
  const [year, setYear] = useState();
  const [err, setErr] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName && year) {
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          name: movieName,
          year: year,
          id: movies.length + Math.floor(Math.random() * 999999999),
        },
      ]);
      setMovieName("");
      setYear("");
      setErr("");
    } else {
      setErr("**fill all the fields");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        name="movie-name"
        placeholder="Movie Name"
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        name="year"
        placeholder="Release Year"
      />
      <div className="err">{err}</div>
      <button>Add</button>
    </form>
  );
};

export default MovieForm;
