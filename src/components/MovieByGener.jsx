
import React, { useState } from 'react';

import MovieData from '../MovieData';
import { Link } from 'react-router-dom'

const MoviesByGenre = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = ['All', ...new Set(MovieData.map(mo => mo.genre)) ];

  const filteredMovies = selectedGenre === 'All'
    ? MovieData
    : MovieData.filter(movie => movie.genre === selectedGenre)
    
  


  return (
    <div className='border-2 border-white m-5 p-5 rounded-lg bg-gray-900/50'> 
     <div className="series-list text-white">
     <div className="mb-5 flex items-center space-x-4">
  <select
    value={selectedGenre}
    onChange={(e) => setSelectedGenre(e.target.value)}
    className="p-2 text-white rounded outline-none w-36 bg-[rgba(255,255,255,0.16)]"
  > 
    {genres.map((genre, index) => (
      <option key={index} value={genre} className="bg-[rgba(255,255,255,0.16)] text-black">
        {genre}
      </option>
    ))}
  </select>

  <h2 className="ml-auto">
    <Link to="/Gener/Series">
      <button className="text-white border-2 border-white rounded px-4 py-2 ">
      filter Series Movie
      </button>
    </Link>
  </h2>
</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredMovies.map((mo ) => (
          
          <Link to={`/movie/${mo.id}`} key={mo.id} className='flex justify-center'>
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

export default MoviesByGenre;
