import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/animation.css';
import './assets/css/gallery.css';
import './assets/css/header.css';
import './assets/css/index.css';

import { MusicPlayerProvider } from './context/MusicPlayerContext';
// import musicData from './data/musicData'; // <-- Pass music data here

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MusicPlayerProvider>
      <App />
    </MusicPlayerProvider>
  </BrowserRouter>
);
