import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationList from '../components/StationList';
// HomePage component represents the home page of the application
const HomePage = ({ stations, setCurrentStation, currentStation, toggleFavorite, isPlaying, togglePlayPause }) => {
  // State for current song metadata and search query
  const [currentSongMetadata, setCurrentSongMetadata] = useState({
    artist: currentStation?.artist || '',
    songTitle: currentStation?.songTitle || '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (currentStation) {
      setCurrentSongMetadata({
        artist: currentStation.artist,
        songTitle: currentStation.songTitle,
      });
    }
  }, [currentStation]);// Dependency array ensures this effect runs when currentStation changes
  // Handler for updating search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // Filter stations based on search query
  const filteredStations = stations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // Main container for the home page
    <div className="homepage-container">
      <Header />
      <div className="content-container">
        <div className="left-column">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
            <span className="search-icon">🔍</span>
          </div>
          {stations.length === 0 ? (
            <p>Loading stations...</p>
          ) : (
            <StationList 
              stations={filteredStations} 
              setCurrentStation={setCurrentStation} 
              currentStation={currentStation} 
              toggleFavorite={toggleFavorite} 
              isPlaying={isPlaying}
            />
          )}
        </div>
        <div className="right-column">
          {currentStation && (
            <div className="current-station">
              <div className="station-logo">
                <img src={currentStation.logo} alt={currentStation.name} />
              </div>
              <div className="station-info">
                <h2>{currentStation.name}</h2>
                <p>{currentSongMetadata.songTitle}</p>
                <p>{currentSongMetadata.artist}</p>
              </div>
              <div className="station-controls">
                <button className="play-pause" onClick={togglePlayPause}>
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button className="favorite" onClick={() => toggleFavorite(currentStation.id)}>
                  {currentStation.isFavorite ? '★' : '☆'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
// Export the HomePage component as the default export
export default HomePage;
