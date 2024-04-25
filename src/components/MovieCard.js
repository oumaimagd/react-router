import { Button } from "react-bootstrap";

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "./StarRating";
import EditMovie from "./EditMovie";

const MovieCard = ({ movie, functionDelete, handleEdit }) => {
  const { id, title, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <Card style={{ margin: "20px" }} id="carte">
        <Card.Img variant="top" src={posterURL} className="img" />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
        </Card.Body>
        <Link
          to={`/movie/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="info">Info</Button>
        </Link>
      </Card>
    </div>
  );
};

export default MovieCard;
