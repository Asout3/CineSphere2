import React from 'react';

import AmharicMovieData from '../AmharicMovieData';
import { useParams } from 'react-router-dom';
import HomeNav from './HomeNav'
import Footer from './Footer'
import AmharicMovieRecomendation from './AmharicMovieRecomendation';


const WatchAmh = () => {
  const { id } = useParams();
  const movie = AmharicMovieData.find((mo) => String(mo.id) === id) ;
  
  if (!movie) {
    return <strong>Movie not found</strong>;
  }
  return (
    <>
    <HomeNav />
    <div className="border-4 bg-gray-900/50 m-10 mx-3 sm:mx-16 p-5 rounded-3xl">
        <div className="border-2 boder-[rgba(255,255,255,0.16)] m-5 p-2 rounded-md">
          <strong>{movie.name}</strong>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={movie.videoUrl}
            style={{ border: 'none' }}
            seamless
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full bg-transparent pointer-events-none"></div>
        </div>
        <div className='border-2 bg-gray-900/50 m-5 p-5 text-center text-white tracking-wide rounded-md'>
          <h1>Title: {movie.name}</h1>
        </div>
      </div>
      
       <AmharicMovieRecomendation movie={movie}/>
      <Footer />
    </>
  )
}

export default WatchAmh;