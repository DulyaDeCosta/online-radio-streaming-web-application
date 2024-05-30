import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationList from '../components/StationList';
// FavoritesPage component for store favorite stations
const FavoritesPage = ({ stations, setCurrentStation, currentStation, toggleFavorite, currentSongMetadata }) => {
  // State for storing favorite stations
  const [favoriteStations, setFavoriteStations] = useState([]);

  useEffect(() => {
    setFavoriteStations(stations.filter(station => station.isFavorite));
  }, [stations]);

  return (
    // Main container for the favorites page
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <StationList 
          stations={favoriteStations} 
          setCurrentStation={setCurrentStation} 
          currentStation={currentStation}
          toggleFavorite={toggleFavorite}
          currentSongMetadata={currentSongMetadata} 
        />
      </div>
      <Footer />
    </div>
  );
};
// Export the FavoritesPage component as the default export
export default FavoritesPage;
