import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { MovieContextProvider } from "../contexts/MovieContext";
import MovieForm from "../components/MovieForm";

const App = () => {
  return (
    <MovieContextProvider>
      <div>
        <Navbar />
        <MovieForm />
        <MovieList />
      </div>
    </MovieContextProvider>
  );
};

export default App;
