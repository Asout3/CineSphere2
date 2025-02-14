import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardForTop = () => {
    const navigate = useNavigate();
   
    function euphoria() {
        navigate("/movie/1");1
    }

    function euphoria() {
        navigate("/movie/1");2
    }

    function euphoria() {
        navigate("/movie/1");3
    }

    function euphoria() {
        navigate("/movie/1");4
    }

    function euphoria() {
        navigate("/movie/1");5
    }

    function euphoria() {
        navigate("/movie/1");6
    }

    function euphoria() {
        navigate("/movie/1");7
    }

    function euphoria() {
        navigate("/movie/1");8
    }

    function euphoria() {
        navigate("/movie/1");9
    }

    function euphoria() {
        navigate("/movie/1");10
    }


  return (
    <>
    <div className='border-4 border-white m-10 mx-3 sm:mx-16 p-5 bg-gray-900/50 rounded-xl'>
        <div className='border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white bg-gray-900 rounded'>
            this is top movies we really recomend you to Watch
        </div>

    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={euphoria} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Breaking Bad</h1>
            <h1 className="text-right">9/10</h1>
        </div>        
    </button> 
    
    <br></br>

    
        
         
        
        
    </div>
    
    </>
  )
}

export default CardForTop  