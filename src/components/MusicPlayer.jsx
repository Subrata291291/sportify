import React, { useContext, useState } from 'react';
import { MusicPlayerContext } from '../context/MusicPlayerContext';

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const MusicPlayer = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    playNext,
    playPrevious,
    setAudioProgress,
    isPlayerVisible,
  } = useContext(MusicPlayerContext);

  const [isSeeking, setIsSeeking] = useState(false);

  if (!isPlayerVisible) return null; // Hide player if no song

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setAudioProgress(seekTime);
  };

  return (
    <div id="app-cover">
      <div id="player">
        <div id="player-track" className={isPlaying ? 'active' : ''}>
          <div id="album-name">{currentSong?.artist || 'Unknown Artist'}</div>
          <div id="track-name">{currentSong?.title || 'No Track Selected'}</div>

          <div id="track-time" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{formatTime(currentTime)}</div>
            <div>{formatTime(duration)}</div>
          </div>

          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            onMouseDown={() => setIsSeeking(true)}
            onMouseUp={() => setIsSeeking(false)}
            onTouchStart={() => setIsSeeking(true)}
            onTouchEnd={() => setIsSeeking(false)}
            style={{ width: '100%', marginTop: '0px' }}
          />
        </div>

        <div id="player-content">
          <div id="album-art" className={isPlaying ? 'active buffering' : ''}>
            {currentSong?.thumbnail ? (
              <img
                src={currentSong.thumbnail}
                alt={currentSong.title}
                className="active"
              />
            ) : (
              <div className="no-art">No Artwork</div>
            )}
          </div>

          <div id="player-controls">
            <div className="control">
              <div className="button" onClick={playPrevious}>
                <i className="fa fa-backward" />
              </div>
            </div>
            <div className="control">
              <div className="button" onClick={togglePlayPause}>
                <i className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
              </div>
            </div>
            <div className="control">
              <div className="button" onClick={playNext}>
                <i className="fa fa-forward" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
