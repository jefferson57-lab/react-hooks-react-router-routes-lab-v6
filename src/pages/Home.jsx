import React from "react";

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Inception" },
  { id: 3, title: "The Social Network" },
  { id: 4, title: "Trolls" },
];

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <a href={`/movie/${movie.id}`}>View Info</a>
          </li>
        ))}
      </ul>
    </div>
  );
}