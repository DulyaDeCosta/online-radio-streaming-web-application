import React from 'react';
import StationList from './StationList';
// HeroSection component represents the hero section of the webpage, displaying a list of stations and current song information
const HeroSection = ({ stations, setCurrentStation, currentStation, toggleFavorite }) => {
  return (
    // Section container stations
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
// Export the HeroSection component as the default export
export default HeroSection;