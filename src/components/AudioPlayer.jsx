import React, { useEffect, useRef } from 'react';

// AudioPlayer component takes a 'station' prop and renders an audio player for streaming the station's content
const AudioPlayer = ({ station }) => {
  const audioRef = useRef(null);
// useEffect hook to handle side effects, such as playing the audio when the station changes
  useEffect(() => {
    if (audioRef.current) {  // Check if the audio reference exists
      // Pause and reload the audio when the station changes
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.oncanplaythrough = () => {// When the audio is ready to play, execute the callback to start playing
        audioRef.current.play().catch((error) => {
          console.error('Failed to play audio:', error); // Attempt to play the audio, catch and log any errors that occur
        });
      };
    }
  }, [station]);// Dependency array ensures this effect runs when 'station' prop changes
  // If there's no station provided, return null (don't render anything)
  if (!station) return null;
  // Render the audio player with station information and controls
  return (
    <div className="audio-player">
      <h2>Now Playing</h2>
      <p>{station.artist || 'Unknown Artist'} - {station.songTitle || 'Unknown Song'}</p>
      <audio ref={audioRef} controls>
        <source src={station.streamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;// Export the AudioPlayer component as the default export
