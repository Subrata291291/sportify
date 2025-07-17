import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
import Header from './components/Header';
import Home from './pages/Home';
import Music from './pages/Music';

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
      </Routes>
      </>
  );
}

export default App;
