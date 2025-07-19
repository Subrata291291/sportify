import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
import Header from './components/Header';
import Home from './pages/Home';
import Music from './pages/Music';
import Artist from './pages/Artist';
import SingleArtist from './pages/SingleArtist';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    Fancybox.bind('[data-fancybox]', {});
    return () => Fancybox.destroy();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/:id" element={<SingleArtist />} />
      </Routes>
      </>
  );
}

export default App;
