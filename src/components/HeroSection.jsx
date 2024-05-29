import React from 'react';
import StationList from './StationList';

const HeroSection = ({ stations, setCurrentStation, currentStation, toggleFavorite }) => {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="station-selector">
          <StationList 
            stations={stations} 
            setCurrentStation={setCurrentStation} 
            toggleFavorite={toggleFavorite} 
          />
        </div>
      </div>
      {currentStation && (
        <div className="current-song">
          <p>Now playing: {currentStation.artist} - {currentStation.songTitle}</p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;