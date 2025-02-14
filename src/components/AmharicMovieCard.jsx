import React from 'react'

const AmharicMovieCard = ({id ,name ,img}) => {
  return (
    <>
    <div key={id} className="bg-[rgba(255,255,255,0.16)] border rounded-lg shadow-lg overflow-hidden w-32 h-64 sm:w-36 sm:h-72 md:w-40 md:h-80 lg:w-44 lg:h-96">
  <img
    src={img}
    alt={name}
    className="w-full h-5/6 object-cover"
  />
  <div className="p-3">
    <h3 className="text-base font-semibold text-white">{name}</h3>
  </div>
</div>

    </>
  )
}

export default AmharicMovieCard