import React from 'react'
import SeriesMovieData from '../SeriesMovieData';
import { useParams, Link } from 'react-router-dom';


const mainseries = () => {

    const { Sname } = useParams();
  const series = SeriesMovieData.find((series) => series.Sname === Sname);

  if (!series) {
    return <div>Series not found </div>
  }

  return (
    <>
    <div className='border-4 bg-gray-900/50 m-2 p-2 sm:m-5 sm:p-5 rounded'>
    <div className="series-details  p-4">
      <h2>{Sname}</h2>
      {series.Seasons.map((season) => (
        <div key={season.seasonNumber}>
          <h3 className='m-2 text-white'>Season {season.seasonNumber}</h3>
          {season.episodes.map((episode) => (
            <Link to={`/series/${Sname}/season/${season.seasonNumber}/episode/${episode.id}`} key={episode.id}>
              <div className="episode-box text-xs sm:text-sm p-1 m-1 text sm:m-2 sm:p-2 hover:bg-gray-600">
                {episode.name}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
   
    </div>
    </>
  )
}

export default mainseries