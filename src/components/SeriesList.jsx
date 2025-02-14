import React from 'react';
import { Link } from 'react-router-dom';
import SeriesMovieData from '../SeriesMovieData'; // Make sure the path is correct
import SeriesListCard from './SeriesListCard';

const SeriesList = () => {
  // Extract unique series names and associated data from SeriesMovieData
  const uniqueSeries = Array.from(new Set(SeriesMovieData.map((series) => series.Sname)))
  .map((Sname) => SeriesMovieData.find((series) => series.Sname === Sname))
  .filter((series) => series !== undefined);

  return (
    <div className="border-2 border-white m-5 p-5 rounded-lg bg-gray-900/50">
      <div className="series-list text-white">
        <h2 className="text-2xl font-semibold mb-5 text-center">Series List</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {uniqueSeries.map((series) => (
            <Link to={`/series/${series.Sname}`} key={series.id} className="flex justify-center">
              <SeriesListCard
                name={series.Sname}
                img={series.img}  // Ensure the image path is correctly passed
                id={series.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesList;
