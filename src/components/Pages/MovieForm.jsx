import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieForm() {
  const params = useParams();
  return (
    <div>
      <h2>Movie Form :-</h2> <h3 className="text-primary">{params.id}</h3>
      <Link to="/" className=" p-2 bg-primary text-white rounded mt-1">
        Save
      </Link>
    </div>
  );
}

export default MovieForm;
