import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Link to="/Home">
                <button className="px-6 py-3 h-4 text-white bg-gray-100 rounded-lg shadow-lg hover:bg-blue-700 transition">
                    HOME
                </button>
            </Link>
        </div>
    );
};

export default Button;
