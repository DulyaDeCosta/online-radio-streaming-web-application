import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold">Online Radio</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/stations" className="hover:text-gray-300">Stations</a>
            </li>
            <li>
              <a href="/favorites" className="hover:text-gray-300">Favorites</a>
            </li>
          </ul>
        </nav>
        <div className="user-account">
          <a href="/login" className="hover:text-gray-300">Login</a>
          <a href="/signup" className="hover:text-gray-300">/ Signup</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
