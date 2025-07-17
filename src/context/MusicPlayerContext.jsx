import React, { createContext, useEffect, useRef, useState } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [songList, setSongList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songList[currentIndex] || null;

  useEffect(() => {
    if (!currentSong?.audio) return;

    // Initialize or update audio
    if (!audioRef.current) {
      audioRef.current = new Audio(currentSong.audio);
    } else {
      audioRef.current.src = currentSong.audio;
    }

    // Set volume and autoplay
    audioRef.current.volume = 1;

    // Play or pause
    if (isPlaying) {
      audioRef.current.play().catch(err => console.error('Audio play error:', err));
    } else {
      audioRef.current.pause();
    }

    // Event listeners
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleEnded = () => playNext();

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('ended', handleEnded);

    // Cleanup
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, [currentSong, isPlaying]);

  const playTrack = (song, list = []) => {
    if (!song?.id || !song?.audio) return;
    const finalList = list.length ? list : [song];
    const index = finalList.findIndex(s => s.id === song.id);
    if (index !== -1) {
      setSongList(finalList);
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (songList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % songList.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    if (songList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + songList.length) % songList.length);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const setAudioProgress = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        duration,
        currentTime,
        playTrack,
        playNext,
        playPrevious,
        togglePlayPause,
        setAudioProgress,
        isPlayerVisible: !!currentSong, // Useful for UI visibility
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
