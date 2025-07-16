import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
import Header from './components/Header';
import Home from './pages/Home';
import MainContent from './components/MainContent';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    Fancybox.bind('[data-fancybox]', {});
    return () => Fancybox.destroy();
  }, []);

  return (
    <>
      <Header />
      <MainContent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </>
  );
}

export default App;
