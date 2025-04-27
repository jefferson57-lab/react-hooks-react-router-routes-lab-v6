import React from "react";

const directors = [
  { name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] },
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar"] },
  { name: "Mike Mitchell", movies: ["Shrek Forever After", "Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] },
  { name: "Edward Zwick", movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"] },
];

export default function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}