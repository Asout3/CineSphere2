// please man make sure the div box is improved like good and and responsive as possible


import React from 'react'
import { Link } from 'react-router-dom'
import AmharicMovieData from '../AmharicMovieData'
import AmharicMovieCard from '../components/AmharicMovieCard'

const FrontAmh = () => {
    const little = AmharicMovieData.slice(0,10);
  return (
    <>
    <div className="m-5 p-5 border-2 border-white rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <h2 className="text-2xl font-semibold mb-5 text-center text-white">Amharic Movie List with Addition</h2>

  {/* Movie Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {little.map((mo) => (
      <Link to={`/AmharicMovie/${mo.id}`} key={mo.id} className="flex justify-center">
        <AmharicMovieCard
          id={mo.id}
          name={mo.name}
          img={mo.img}
        />
      </Link>
    ))}
  </div>

  {/* View More Link */}
  <Link to='/AmharicMovie/see_more'>
    <div className='items-center m-1 p-2 bg-black mt-4 rounded relative text-center text-white'>
      See more
    </div>
  </Link>
</div>
    
    </>
  )
}

export default FrontAmh