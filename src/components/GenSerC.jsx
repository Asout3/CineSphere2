import React, { useState } from 'react'
import SeriesMovieData from '../SeriesMovieData'
import SeriesListCard from './SeriesListCard'
import {Link} from 'react-router-dom'

const GenSerC = () => {

  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = ['All', ...new Set(SeriesMovieData.map(mo => mo.Genre)) ];

  const filteredMovies = selectedGenre === 'All'
    ? SeriesMovieData
    : SeriesMovieData.filter(movie => movie.Genre === selectedGenre)

  return (
    <>
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
    <Link to="/Gener">
      <button className="text-white border-2 border-white rounded px-4 py-2 hover:bg-white hover:text-black transition-all">
        Halo
      </button>
    </Link>
  </h2>
</div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredMovies.map((mo) => (
          <Link to={`/series/${mo.Sname}`} key={mo.id} className="flex justify-center">
          <SeriesListCard
            key={mo.id}
            id={mo.id}
            name={mo.Sname}
            img={mo.img}
            genre={mo.Genre}
          />
          </Link>
        ))}

      </div>
    </div>
    </div>
    </>
  )
}

export default GenSerC