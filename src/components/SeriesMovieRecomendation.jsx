import React from 'react';
import { Link } from 'react-router-dom';
import SeriesListCard from './SeriesListCard';
import SeriesMovieData from '../SeriesMovieData';

const SeriesMovieRecommendation = ({ movie }) => {
   

    if (!movie || !movie.Genre) {
        return <div>No movie data available.</div>;
    }

    const similarMovies = SeriesMovieData.filter(
        (m) => m.Genre === movie.Genre && m.id !== movie.id
    ).slice(0, 9);

    return (
        <>
            <div className="m-5 p-5 border-2 border-white rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <h2 className="text-2xl font-semibold mb-5 text-center text-white">You might also like:</h2>

  {/* Series Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {similarMovies.map((series) => (
      <Link to={`/series/${series.Sname}`} key={series.id} className="flex justify-center">
        <SeriesListCard
          name={series.Sname}
          img={series.Seasons[0]?.episodes[0]?.img || "default_image_url"}
          id={series.id}
        />
      </Link>
    ))}
  </div>
</div>
        </>
    )
}

export default SeriesMovieRecommendation;
