// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import StationList from '../components/StationList';

// const HomePage = ({ stations, setCurrentStation, currentStation, toggleFavorite, currentSongMetadata, isPlaying, togglePlayPause }) => {
//   return (
//     <div className="homepage-container">
//       <Header />
//       <div className="content-container">
//         <div className="left-column">
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." />
//             <span className="search-icon">🔍</span>
//           </div>
//           {stations.length === 0 ? (
//             <p>Loading stations...</p>
//           ) : (
//             <StationList 
//               stations={stations} 
//               setCurrentStation={setCurrentStation} 
//               currentStation={currentStation} 
//               toggleFavorite={toggleFavorite} 
//               isPlaying={isPlaying}
//             />
//           )}
//         </div>
//         <div className="right-column">
//           {currentStation && (
//             <div className="current-station">
//               <div className="station-logo">
//                 <img src={currentStation.logo} alt={currentStation.name} />
//               </div>
//               <div className="station-info">
//                 <h2>{currentStation.name}</h2>
//                 <p>{currentSongMetadata.songTitle}</p>
//                 <p>{currentSongMetadata.artist}</p>
//               </div>
//               <div className="station-controls">
//                 <button className="play-pause" onClick={togglePlayPause}>
//                   {isPlaying ? 'Pause' : 'Play'}
//                 </button>
//                 <button className="favorite" onClick={() => toggleFavorite(currentStation.id)}>
//                   {currentStation.isFavorite ? '★' : '☆'}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationList from '../components/StationList';

const HomePage = ({ stations, setCurrentStation, currentStation, toggleFavorite, isPlaying, togglePlayPause }) => {
  const [currentSongMetadata, setCurrentSongMetadata] = useState({
    artist: currentStation?.artist || '',
    songTitle: currentStation?.songTitle || '',
  });

  useEffect(() => {
    if (currentStation) {
      setCurrentSongMetadata({
        artist: currentStation.artist,
        songTitle: currentStation.songTitle,
      });
    }
  }, [currentStation]);

  return (
    <div className="homepage-container">
      <Header />
      <div className="content-container">
        <div className="left-column">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">🔍</span>
          </div>
          {stations.length === 0 ? (
            <p>Loading stations...</p>
          ) : (
            <StationList 
              stations={stations} 
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

export default HomePage;