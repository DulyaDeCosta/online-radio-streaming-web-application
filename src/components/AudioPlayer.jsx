import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ station }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.oncanplaythrough = () => {
        audioRef.current.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      };
    }
  }, [station]);

  if (!station) return null;

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

export default AudioPlayer;
