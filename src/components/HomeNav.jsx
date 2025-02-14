import React , { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      
    };


  return (
    <nav className="bg-gray-900/50 p-4 z-50 relative m-5 rounded-2xl border-4  shadow-slate-200">
    <div className="container mx-auto flex justify-between items-center">
      <Link to='/'>
      <div className="text-2xl font-bold">CineSphere</div>
      </Link>
      
      <div
        className={`absolute md:static top-16 right-0 w-full md:w-auto bg-[rgba(3,3,32)] md:bg-transparent rounded border-2 md:border-0 md:flex ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-start transition-all ease-in-out duration-200 ">


          <li>
            <button className="block px-4 py-2 md:py-0 hover:bg-stone-200 md:hover:bg-stone-200   rounded md:hover:bg-transparent">
              <Link to='/Home'>Home</Link>
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 md:py-0 hover:bg-stone-200 md:hover:bg-stone-200   rounded md:hover:bg-transparent">
              <Link to='/Top'>Top</Link>
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 md:py-0 hover:bg-stone-200 md:hover:bg-stone-200   rounded md:hover:bg-transparent">
              <Link to='/Gener'>Genera</Link>
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 md:py-0 hover:bg-stone-200 md:hover:bg-stone-200  rounded md:hover:bg-transparent">
              <Link to='/ContactUs'>Contact Us</Link>
            </button>
          </li>
          
        </ul>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="block md:hidden focus:outline-none "
      >
        <div className="w-6 h-1 bg-[#c0b4b4] mb-1"></div>
        <div className="w-6 h-1 bg-[#c0b4b4] mb-1"></div>
        <div className="w-6 h-1 bg-[#c0b4b4]"></div>
      </button>
    </div>
  </nav>
  )
}

export default HomeNav