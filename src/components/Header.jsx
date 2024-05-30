import React from 'react';
import { FaHome, FaHeart, FaUser, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Lobster', cursive" }}>Audio Heaven</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300 flex items-center">
                <FaHome className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="/favorites" className="hover:text-gray-300 flex items-center">
                <FaHeart className="mr-2" /> Favorites
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-account flex space-x-4">
          <a href="/login" className="hover:text-gray-300 flex items-center">
            <FaSignInAlt className="mr-2" /> Login
          </a>
          <a href="/signup" className="hover:text-gray-300 flex items-center">
            <FaUser className="mr-2" /> Signup
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
