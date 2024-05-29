import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landingPage.css'; // Add styles for the landing page

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-heading">Music for Everyone</h1>
      <p className="landing-tagline">Tune in to the best live music radio stations</p>
      <button className="start-button" onClick={() => navigate('/home')}>
        Start Listening
      </button>
    </div>
  );
};

export default LandingPage;
