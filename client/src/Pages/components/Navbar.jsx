import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/" className="flex items-center">
                        <span className="text-blue-500 mr-1">Gani</span> Pedia
                    </Link>
                </div>
                <ul className="flex space-x-4 items-center">
                    <li className="hover:text-blue-500">
                        <Link to="/setting" className="flex items-center">
                            <FaCog className="mr-1" />
                            
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
