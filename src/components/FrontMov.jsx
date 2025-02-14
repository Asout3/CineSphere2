import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'; 
import MovieData from '../MovieData';

const FrontMov = () => { 
    const little = MovieData.slice(0,10);
  return (
    <>
   <div className="border-2 border-white m-5 p-5 rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <div className="series-list text-white">
    <h2 className="text-2xl font-semibold mb-5 text-center">Movie List</h2>

    {/* Movies Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {little.map((mo) => (
        <Link to={`/movie/${mo.id}`} key={mo.id} className="flex justify-center">
          <MovieCard
            key={mo.id}
            id={mo.id}
            name={mo.name}
            img={mo.img}
          />
        </Link>
      ))}
    </div>
  </div>

  {/* View Full Button */}
  <Link to="/Movies/see_more">
    <div className="mt-6 bg-black text-white py-2 px-4 rounded-lg text-center cursor-pointer ">
      See more
    </div>
  </Link>
</div>
    </>
  )
}

export default FrontMov