import React, { useContext, useEffect, useRef, useState } from 'react';
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
    togglePlayPause,
    playNext,
    playPrevious,
  } = useContext(MusicPlayerContext);

  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  // Load new song when currentSong changes
  useEffect(() => {
    if (!currentSong?.audio) return;

    audioRef.current.src = currentSong.audio;
    audioRef.current.load();

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration || 0);
      if (isPlaying) audioRef.current.play();
    };

    const handleTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(audioRef.current.currentTime);
    };

    const handleEnded = () => playNext();

    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, [currentSong]);

  // Toggle play/pause based on `isPlaying`
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => console.error('Playback error:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
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

          {/* PROGRESS BAR */}
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
