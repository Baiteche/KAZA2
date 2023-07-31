import React from "react";
import EmptyStar from "./../../assets/empty-star.png";
import FullStar from "./../../assets/full-star.png";
import './ratings.css'

function StarRating({ Rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        className="etoiles"
        key={i}
        src={i <= Rating ? FullStar : EmptyStar}
        alt={i <= Rating ? "full-star" : "Empty-star"}
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default StarRating;