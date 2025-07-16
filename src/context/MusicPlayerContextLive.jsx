// context/MusicPlayerContext.jsx
import React, { createContext, useEffect, useRef, useState } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [songList, setSongList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songList[currentIndex] || null;

  useEffect(() => {
    if (!currentSong?.audio) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(currentSong.audio);
    } else {
      audioRef.current.src = currentSong.audio;
    }

    if (isPlaying) {
      audioRef.current.play().catch(err => console.error('Audio play error:', err));
    } else {
      audioRef.current.pause();
    }

    const handleEnded = () => playNext();
    audioRef.current.addEventListener('ended', handleEnded);
    return () => {
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

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playTrack,
        playNext,
        playPrevious,
        togglePlayPause,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
