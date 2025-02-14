import React from 'react'
import { Link} from 'react-router-dom'
import AmharicMovieData from '../AmharicMovieData'
import AmharicMovieCard from '../components/AmharicMovieCard'

const AmharicMovies = () => {
  
  return (
    <>
    <div className='border-2 border-white m-5 p-5'>
    <div className="series-list text-white">
      <h2>Amharic Movie List</h2><br></br>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {AmharicMovieData.map((mo) => (
             <Link to={`/AmharicMovie/${mo.id}`} key={mo.id}>
             <AmharicMovieCard
          
             key={mo.id}
             id={mo.id} 
             name={mo.name}
             img={mo.img}
             
             />
           </Link>
        ))}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default AmharicMovies