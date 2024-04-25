import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (value) => {
    onRatingChange(value);
  };

  const renderStars = () => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      starArray.push(
        <span
          key={i}
          style={{
            color: i <= rating ? "gold" : "black",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return starArray;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
