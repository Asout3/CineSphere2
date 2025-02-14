import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieData from '../MovieData';

const MovieRecommendations = ({ movie }) => {
  const similarMovies = MovieData.filter(
    (m) => m.genre === movie.genre && m.id !== movie.id
  ).slice(0, 9); // Limit to 9 similar movies

  return (
    <>
    <div className="border-2 border-white m-5 p-5 rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <h2 className="text-white text-2xl font-semibold mb-5 text-center">You might also like:</h2>

  {/* Similar Movies Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {similarMovies.map((movie) => (
      <Link to={`/movie/${movie.id}`} key={movie.id} className="flex justify-center">
        <MovieCard
          id={movie.id}
          name={movie.name}
          img={movie.img}
          genre={movie.genre}
        />
      </Link>
    ))}
  </div>
</div>
    </>
  );
};

export default MovieRecommendations;
