import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, description, posterURL, trailerLink } = movie;

  return (
    <div className="movie-description">
      <div className="content-container">
        <div className="poster-container">
          <img src={posterURL} alt={title} className="poster" />
        </div>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src={trailerLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="trailer"
          ></iframe>
        </div>
      </div>
      <div className="details-container">
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default MovieDescription;
