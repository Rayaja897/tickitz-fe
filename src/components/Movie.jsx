import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  const { poster, title, genres, slug } = props;

  return (
    <div className="image-poster">
      <Link to={`/detail/${slug}`}>
        <img src={poster} width="100%" height="300px" alt="poster" />
      </Link>
      <h5 className="text-center mt-3 single-text">{title}</h5>
      <p
        className="text-muted text-center single-text text-muted-mobile"
        style={{ fontSize: "16px" }}
      >
        {genres?.map((item, key) => (
          <span>{genres.length - 1 === key ? item : `${item}, `}</span>
        ))}
      </p>
      <Link to={`/detail/${slug}`}>
        <div className="d-grid mt-2">
          <button className="btn btn-outline-primary">Details</button>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
