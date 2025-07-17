// pages/Music.jsx
import React, { useContext } from 'react';
import MusicSection from '../components/MusicSection';
import NewReleases from '../components/NewReleases';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import { MusicPlayerContext } from '../context/MusicPlayerContext';

const Music = () => {
  const { currentSong } = useContext(MusicPlayerContext);

  return (
    <div className='container'>
      <NewReleases />
      <MusicSection />
      <Footer />
      {currentSong && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999 }}>
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default Music;
