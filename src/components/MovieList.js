import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  deleteFunction,
  handleEdit,
  handleRatingChange,
}) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          functionDelete={deleteFunction}
          handleEdit={handleEdit}
          onRatingChange={handleRatingChange}
        />
      ))}
    </div>
  );
};

export default MovieList;
