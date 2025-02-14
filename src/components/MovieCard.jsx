import React from 'react';

const MovieCard = ({ id , name , img}) => {
  return (
    <>
  
  <div
  key={id}
  className="bg-[rgba(255,255,255,0.16)] border border-gray-700 rounded-lg shadow-lg overflow-hidden w-36 h-72 sm:w-40 sm:h-80 md:w-44 md:h-96 lg:w-48 lg:h-[22rem] flex flex-col"
>
  {/* Movie Poster */}
  <img
    src={img}
    alt={name}
    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
  />
  {/* Movie Title */}
  <div className="p-3 flex-grow flex items-center justify-center">
    <h3 className="text-sm sm:text-base font-semibold text-center text-white truncate">
      {name}
    </h3>
  </div>
</div>


 
    </>
    
  );
};

export default MovieCard;
