import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardForTop = () => {
    const navigate = useNavigate();
   
    function bb() {
        navigate("/series/Breaking Bad");  //1
    }

    function Mr() {
        navigate("/series/Mr. Robot"); //2
    }

    function Br() {
        navigate("/movie/1");  //3
    }

    function Fl() {
        navigate("/movie/4");  //4
    }

    function IN() {
        navigate("/movie/5"); //5
    }

    function Gor() {
        navigate("/movie/8"); //6
    }

    function Ar() {
        navigate("/series/Arcane"); //7
    }

    function Gla2() {
        navigate("/movie/7"); //8
    }

    function Ave() {
        navigate("/movie/3"); //9
    }

    function FF() {
        navigate("/movie/2"); //10
    }


  return (
    <>
    <div className='border-4 border-white m-10 mx-3 sm:mx-16 p-5 bg-gray-900/50 rounded-xl'>
        <div className='border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white bg-gray-900 rounded'>
            this is top movies we really recomend you to Watch
        </div>

    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={bb} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Breaking Bad</h1>
            <h1 className="text-right">9/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Mr} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Mr. Robot</h1>
            <h1 className="text-right">8.5/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Ar} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Arcane</h1>
            <h1 className="text-right">9/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Br} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">The Brutalist</h1>
            <h1 className="text-right">8.1/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Fl} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Flow</h1>
            <h1 className="text-right">7.2/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={IN} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">We Live in Time</h1>
            <h1 className="text-right">7.0/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Gor} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">The Gorge</h1>
            <h1 className="text-right">6.7/10</h1>
        </div>        
    </button> 
    
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Gla2} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Gladiator II</h1>
            <h1 className="text-right">6.6/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={Ave} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Avengement</h1>
            <h1 className="text-right">6.6/10</h1>
        </div>        
    </button> 
    <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={FF} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Fight or Flight</h1>
            <h1 className="text-right">6.4/10</h1>
        </div>        
    </button> 
    {/* <button className="w-4/5 block m-0 mx-auto relative rounded" onClick={euphoria} > 
        <div className="border-2 border-white m-2 my-3 sm:mx-4 p-3 text-white flex justify-between rounded-md bg-gray-700">
            <h1 className="text-left">Breaking Bad</h1>
            <h1 className="text-right">9/10</h1>
        </div>        
    </button>  */}
    
    <br></br> 
    </div>
    
    </>
  )
}

export default CardForTop  