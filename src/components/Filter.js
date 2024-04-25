import React, { useState } from "react";
import StarRating from "./StarRating";

const Filter = ({ handleFilterChange, handleRatingChange, rating }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setSearchTitle(title);
    handleFilterChange(title);
  };

  const handleRatingClick = (newRating) => {
    handleRatingChange(newRating);
    handleFilterChange(searchTitle, newRating);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={handleTitleChange}
      />
      <StarRating rating={rating} onRatingChange={handleRatingClick} />
    </div>
  );
};

export default Filter;
