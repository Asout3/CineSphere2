import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import one from '../Images/one.jpg';
import two from '../Images/two.jpg';
import three from '../Images/three.jpg';
import four from '../Images/four.jpg';
import '../index.css';

const SlideShow = () => {

  const images = [one, two, three, four];
  const [img, setImg] = useState(0);

  useEffect ( () => {
    const interval = setInterval( () => {
      setImg((prvImg) => (prvImg + 1) % images.length);
    }, 6000); return () => clearInterval(setInterval);
  } , [images.length]);
    

  

  return (
    <div className='relative w-full my-10 mx-auto max-w-6xl px-4 md:px-0'>
  <img src={images[img]} alt={`Slide ${img}`} className='w-full block rounded ' /> 
  <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 px-6 text-lg md:text-xl text-center bg-red-950 text-white rounded hover:bg-red-800'>
    <Link to='/Home'>Home</Link>
  </button>
</div>

  );
};

export default SlideShow;
