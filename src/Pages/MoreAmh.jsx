import React from 'react'
import { Link} from 'react-router-dom'
import AmharicMovieData from '../AmharicMovieData'
import AmharicMovieCard from '../components/AmharicMovieCard'
import HomeNav from '../components/HomeNav'
import Footer from '../components/Footer'

const MoreAmh = () => {
  return (
    <>
    <HomeNav />
    <div className="m-5 p-5 border-2 border-white rounded-lg bg-gray-900/50">
  {/* Section Header */}
  <h2 className="text-2xl font-semibold mb-5 text-center text-white">Amharic Movie List</h2>

  {/* Movie Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {AmharicMovieData.map((mo) => (
      <Link to={`/AmharicMovie/${mo.id}`} key={mo.id} className="flex justify-center">
        <AmharicMovieCard
          id={mo.id}
          name={mo.name}
          img={mo.img}
        />
      </Link>
    ))}
  </div>
</div>
    <Footer />
    </>
  )
}

export default MoreAmh