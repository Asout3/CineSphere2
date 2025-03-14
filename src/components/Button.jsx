import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="flex justify-center items-center h-80">
            <Link to="/Home">
                <button className="px-6 py-3 text-white bg-gray-500 rounded-lg shadow-lg">
                    Watch ->
                </button>
            </Link>
        </div>
    );
};

export default Button;
