import React from 'react';
import './StationList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StationList = ({ stations, setCurrentStation, toggleFavorite, currentStation, isPlaying }) => {
  return (
    <div className="station-list">
      {stations.map(station => (
        <div className="station-box" key={station.id}>
          <div className="station-logo">
            <img src={station.logo} alt="Station Logo" />
          </div>
          <div className="station-info">
            <p className="station-name">{station.name}</p>
            <div className="station-controls">
              <button onClick={() => setCurrentStation(station)}>
                <FontAwesomeIcon icon={currentStation?.id === station.id && isPlaying ? faPause : faPlay} />
              </button>
              <button onClick={() => toggleFavorite(station.id)}>
                {station.isFavorite ? <FontAwesomeIcon icon={solidStar} /> : <FontAwesomeIcon icon={regularStar} />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StationList;
