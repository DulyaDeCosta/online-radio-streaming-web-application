// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import './styles/style.css';
// import HomePage from './pages/HomePage';
// import FavoritesPage from './pages/FavoritesPage';
// import LandingPage from './pages/LandingPage';


// const App = () => {
//   const [stations, setStations] = useState([]);
//   const [currentStation, setCurrentStation] = useState(null);
//   const [currentSongMetadata, setCurrentSongMetadata] = useState({
//     artist: '',
//     songTitle: '',
//   });
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audio, setAudio] = useState(null);

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem('favorites');
//     if (storedFavorites) {
//       setStations(JSON.parse(storedFavorites));
//     } else {
//       fetchStations();
//     }
//   }, []);

//   useEffect(() => {
//     if (currentStation && isPlaying) {
//       if (audio) {
//         audio.pause();
//       }
//       const newAudio = new Audio(currentStation.streamUrl);
//       setAudio(newAudio);
//       newAudio.play();
//     } else if (audio) {
//       audio.pause();
//     }
//   }, [currentStation, isPlaying]);

//   const fetchStations = async () => {
//     try {
//       const response = await fetch('https://de1.api.radio-browser.info/json/stations/topclick/50');
//       const data = await response.json();
//       const formattedData = data.map((station, index) => ({
//         id: index + 1,
//         name: station.name,
//         streamUrl: station.url_resolved,
//         logo: station.favicon || 'default-logo.png',
//         artist: '',
//         songTitle: '',
//         isFavorite: false,
//       }));
//       setStations(formattedData);
//     } catch (error) {
//       console.error('Error fetching stations:', error);
//     }
//   };

//   const toggleFavorite = (stationId) => {
//     const updatedStations = stations.map(station =>
//       station.id === stationId ? { ...station, isFavorite: !station.isFavorite } : station
//     );
//     localStorage.setItem('favorites', JSON.stringify(updatedStations));
//     setStations(updatedStations);
//   };

//   const handleCurrentStationChange = (station) => {
//     if (currentStation?.id === station.id) {
//       setIsPlaying(!isPlaying);
//     } else {
//       setCurrentStation(station);
//       setIsPlaying(true);
//     }
//     fetchCurrentSongMetadata(station.streamUrl);
//   };

//   const fetchCurrentSongMetadata = async (streamUrl) => {
//     try {
//       const apiKey = '4ddea3fe7dmsh074f5fe4070f242p13a055jsndd0dd2fdc404';
//       const response = await fetch(`https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/getTopByCountry?query=france`, {
//         headers: {
//           'X-RapidAPI-Key': apiKey,
//           'X-RapidAPI-Host': 'radio-world-50-000-radios-stations.p.rapidapi.com',
//         }
//       });
//       const data = await response.json();
//       console.log(data); // Log the entire response to inspect its structure

//       const { artist, title } = data.results[0]?.track || {};
//       setCurrentSongMetadata({ artist, songTitle: title });
//     } catch (error) {
//       console.error('Error fetching current song metadata:', error);
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/home"
//           element={
//             <HomePage
//               stations={stations}
//               setCurrentStation={handleCurrentStationChange}
//               currentStation={currentStation}
//               toggleFavorite={toggleFavorite}
//               currentSongMetadata={currentSongMetadata}
//               isPlaying={isPlaying}
//             />
//           }
//         />
//         <Route
//           path="/favorites"
//           element={
//             <FavoritesPage
//               stations={stations.filter(station => station.isFavorite)}
//               setCurrentStation={handleCurrentStationChange}
//               currentStation={currentStation}
//               toggleFavorite={toggleFavorite}
//               currentSongMetadata={currentSongMetadata}
//               isPlaying={isPlaying}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);




import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './styles/style.css';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);
  const [currentSongMetadata, setCurrentSongMetadata] = useState({
    artist: '',
    songTitle: '',
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setStations(JSON.parse(storedFavorites));
    } else {
      fetchStations();
    }
  }, []);

  useEffect(() => {
    if (currentStation && isPlaying) {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(currentStation.streamUrl);
      setAudio(newAudio);
      newAudio.play();
    } else if (audio) {
      audio.pause();
    }
  }, [currentStation, isPlaying]);

  const fetchStations = async () => {
    try {
      const response = await fetch('https://de1.api.radio-browser.info/json/stations/topclick/24'); // Changed to fetch only 24 stations
      const data = await response.json();
      const formattedData = data.map((station, index) => ({
        id: index + 1,
        name: station.name,
        streamUrl: station.url_resolved,
        logo: station.favicon || 'default-logo.png',
        artist: '',
        songTitle: '',
        isFavorite: false,
      }));
      setStations(formattedData);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  const toggleFavorite = (stationId) => {
    const updatedStations = stations.map(station =>
      station.id === stationId ? { ...station, isFavorite: !station.isFavorite } : station
    );
    localStorage.setItem('favorites', JSON.stringify(updatedStations));
    setStations(updatedStations);
  };

  const handleCurrentStationChange = (station) => {
    if (currentStation?.id === station.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentStation(station);
      setIsPlaying(true);
    }
    fetchCurrentSongMetadata(station.streamUrl);
  };

  const fetchCurrentSongMetadata = async (streamUrl) => {
    try {
      const apiKey = '4ddea3fe7dmsh074f5fe4070f242p13a055jsndd0dd2fdc404';
      const response = await fetch(`https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/getTopByCountry?query=france`, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'radio-world-50-000-radios-stations.p.rapidapi.com',
        }
      });
      const data = await response.json();
      console.log(data); // Log the entire response to inspect its structure

      const { artist, title } = data.results[0]?.track || {};
      setCurrentSongMetadata({ artist, songTitle: title });
    } catch (error) {
      console.error('Error fetching current song metadata:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <HomePage
              stations={stations}
              setCurrentStation={handleCurrentStationChange}
              currentStation={currentStation}
              toggleFavorite={toggleFavorite}
              currentSongMetadata={currentSongMetadata}
              isPlaying={isPlaying}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              stations={stations.filter(station => station.isFavorite)}
              setCurrentStation={handleCurrentStationChange}
              currentStation={currentStation}
              toggleFavorite={toggleFavorite}
              currentSongMetadata={currentSongMetadata}
              isPlaying={isPlaying}
            />
          }
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);