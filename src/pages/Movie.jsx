import React from "react";
import { useParams } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange", runtime: 115 },
  { id: 2, title: "Inception", runtime: 148 },
  { id: 3, title: "The Social Network", runtime: 120 },
  { id: 4, title: "Trolls", runtime: 92 },
];

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.runtime} minutes</p>
    </div>
  );
}