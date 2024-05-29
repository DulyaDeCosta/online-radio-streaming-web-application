import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationList from '../components/StationList';

const FavoritesPage = ({ stations, setCurrentStation, currentStation, toggleFavorite, currentSongMetadata }) => {
  const [favoriteStations, setFavoriteStations] = useState([]);

  useEffect(() => {
    setFavoriteStations(stations.filter(station => station.isFavorite));
  }, [stations]);

  return (
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

export default FavoritesPage;
