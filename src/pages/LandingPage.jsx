import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="landing-container"
      style={{ backgroundImage: 'url(/bg-image.svg)' }}
    >
      <h1 className="landing-heading lobster-regular">Music for Everyone</h1>
      <p className="landing-tagline quattrocento-bold">~Tune in to the best live music radio stations~</p>
      <button className="start-button" onClick={() => navigate('/home')}>
        Start Listening
      </button>
    </div>
  );
};

export default LandingPage;
