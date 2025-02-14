import React from 'react'
import { Link } from 'react-router-dom';
import AmharicMovieData from '../AmharicMovieData'
import AmharicMovieCard from './AmharicMovieCard'

const AmharicMovieRecomendation = ({movie}) => {
    if (!movie) {
        return <div>No movie data available</div>;
    }

    const similarMovies = (AmharicMovieData || [])
        .filter((m) => m.genre?.toLowerCase() === movie.genre?.toLowerCase() && m.id !== movie.id)
        .slice(0, 10);
  return (
    <>
    <div className="m-5 p-5 border-2 border-white rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <h2 className="text-2xl font-semibold mb-5 text-center text-white">You Might Also Like:</h2>

  {/* Similar Movies Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {similarMovies.map((movie) => (
      <Link to={`/AmharicMovie/${movie.id}`} key={movie.id} className="flex justify-center">
        <AmharicMovieCard
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
  )
}

export default AmharicMovieRecomendation