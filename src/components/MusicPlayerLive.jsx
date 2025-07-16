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

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false); // Drag state

  // Auto play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.error('Audio play error', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  // Track time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    const setMeta = () => setDuration(audio.duration || 0);
    const handleEnded = () => playNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setMeta);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setMeta);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong, playNext, isSeeking]);

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  return (
    <div id="app-cover">
      <div id="player">
        <div id="player-track" className={isPlaying ? 'active' : ''}>
        <div id="album-name">{currentSong?.artist}</div>
        <div id="track-name">{currentSong?.title}</div>

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
                src={currentSong.thumbnail.startsWith('http') ? currentSong.thumbnail : `${currentSong.thumbnail}`}
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

      {/* 🔊 AUDIO ELEMENT */}
      {currentSong?.audio && (
        <audio ref={audioRef} src={currentSong?.audio} preload="auto" />
      )}
    </div>
  );
};

export default MusicPlayer;
