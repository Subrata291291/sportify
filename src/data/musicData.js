import tumhiho from '../assets/music/saiyaara.mp3';
import channa from '../assets/music/saiyaara.mp3';
import kalho from '../assets/music/saiyaara.mp3';
import saiyaara from '../assets/music/saiyaara.mp3';
import makhna from '../assets/music/saiyaara.mp3';
import shapeofyou from '../assets/music/saiyaara.mp3';
import tomakechay from '../assets/music/saiyaara.mp3';

import music1 from '../assets/images/music1.jpeg';
import music2 from '../assets/images/music2.png';
import music5 from '../assets/images/music3.jpg';
import music6 from '../assets/images/music4.jpeg';
import channaThumb from '../assets/images/music5.jpeg';
import arijitImg from '../assets/images/music6.jpeg';
import sonuImg from '../assets/images/music7.jpeg';

import artist1 from '../assets/images/artist1.jpg';
import artist2 from '../assets/images/artist2.jpg';
import artist3 from '../assets/images/artist3.jpg';
import artist4 from '../assets/images/artist4.jpg';
import artist5 from '../assets/images/artist5.jpg';

const musicData = {
  artists: [
    {
      name: "Arijit Singh",
      image: artist1,
      songs: [
        { id: 1, title: "Tum Hi Ho", thumbnail: artist1, audio: tumhiho },
        { id: 2, title: "Channa Mereya", thumbnail: channaThumb, audio: channa },
      ],
    },
    {
      name: "Sonu Nigam",
      image: artist2,
      songs: [
        { id: 3, title: "Kal Ho Naa Ho", thumbnail: artist2, audio: kalho },
      ],
    },
    {
      name: "Sonu Nigam",
      image: artist3,
      songs: [
        { id: 4, title: "Kal Ho Naa Ho", thumbnail: artist3, audio: kalho },
      ],
    },
    {
      name: "Sonu Nigam",
      image: artist4,
      songs: [
        { id: 5, title: "Kal Ho Naa Ho", thumbnail: artist4, audio: kalho },
      ],
    },
    {
      name: "Sonu Nigam",
      image: artist5,
      songs: [
        { id: 6, title: "Kal Ho Naa Ho", thumbnail: artist5, audio: kalho },
      ],
    },
    {
      name: "Sonu Nigam",
      image: artist2,
      songs: [
        { id: 7, title: "Kal Ho Naa Ho", thumbnail: artist5, audio: kalho },
      ],
    },
  ],
  languages: [
    {
      language: "Hindi",
      songs: [
        { id: 4, title: "Kesariya", artist: "Arijit Singh", thumbnail: music1, audio: saiyaara },
        { id: 5, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: music6, audio: makhna },
        { id: 6, title: "Tum Hi Ho", artist: "Shan", thumbnail: music5, audio: tumhiho },
        { id: 7, title: "Channa Mereya", artist: "Kumar Sanu", thumbnail: music2, audio: channa },
        { id: 8, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", thumbnail: music6, audio: kalho },
        { id: 9, title: "Makhna", artist: "Badsha", thumbnail: music6, audio: makhna },
        { id: 10, title: "Tum Hi Ho", artist: "Shan", thumbnail: music5, audio: tumhiho },
        { id: 12, title: "Channa Mereya", artist: "Kumar Sanu", thumbnail: music2, audio: channa },
        { id: 13, title: "Kal Ho Naa Ho", artist: "Monali Thakur", thumbnail: music6, audio: kalho },
      ],
    },
    {
      language: "English",
      songs: [
        { id: 14, title: "Shape of You", artist: "Ed Sheeran", thumbnail: music2, audio: shapeofyou },
        { id: 15, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: music6, audio: makhna },
      ],
    },
    {
      language: "Bengali",
      songs: [
        { id: 16, title: "Tomake Chai", artist: "Kabir Suman", thumbnail: music5, audio: tomakechay },
        { id: 17, title: "Saiyaara", artist: "Arijit Singh", thumbnail: music6, audio: saiyaara },
      ],
    },
  ],
};

export default musicData;
