import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'; 
import MovieData from '../MovieData';


const Movies = () => {
  
  return (
    <div className="border-2 border-white m-5 p-5 rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <div className="series-list text-white">
    <h2 className="text-2xl font-semibold mb-5 text-center">Movie List</h2>

    {/* Movies Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {MovieData.map((mo) => (
        <Link
          to={`/movie/${mo.id}`}
          key={mo.id}
          className="flex justify-center"
        >
          <div className="bg-[rgba(255,255,255,0.16)] border border-gray-700 rounded-lg shadow-lg overflow-hidden w-36 h-72 sm:w-40 sm:h-80 md:w-44 md:h-96 lg:w-48 lg:h-[22rem] flex flex-col ">
            {/* Movie Poster */}
            <img
              src={mo.img}
              alt={mo.name}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
            {/* Movie Title */}
            <div className="p-3 flex-grow flex items-center justify-center">
              <h3 className="text-sm sm:text-base font-semibold text-center text-white truncate">
                {mo.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
};

export default Movies;

