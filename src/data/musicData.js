import tumhiho from '../assets/music/saiyaara.mp3';
import channa from '../assets/music/saiyaara.mp3';
import kalho from '../assets/music/saiyaara.mp3';
import saiyaara from '../assets/music/saiyaara.mp3';
import makhna from '../assets/music/saiyaara.mp3';
import shapeofyou from '../assets/music/saiyaara.mp3';
import tomakechay from '../assets/music/saiyaara.mp3';

import tumhihopic from '../assets/images/music1.jpeg'
import tumhihopic1 from '../assets/images/music2.png'
import tumhihopic2 from '../assets/images/music5.jpeg'
import tumhihopic3 from '../assets/images/music6.jpeg'

const musicData = {
  artists: [
    {
      name: "Arijit Singh",
      image: "arijit.jpg",
      songs: [
        { id: 1, title: "Tum Hi Ho", thumbnail: tumhihopic, audio: saiyaara },
        { id: 2, title: "Channa Mereya", thumbnail: "channa.jpg", audio: saiyaara },
      ],
    },
    {
      name: "Sonu Nigam",
      image: "sonu.jpg",
      songs: [
        { id: 3, title: "Kal Ho Naa Ho", thumbnail: tumhihopic, audio: saiyaara },
      ],
    },
  ],
  languages: [
    {
      language: "Hindi",
      songs: [
        { id: 4, title: "Kesariya", artist: "Arijit Singh", thumbnail: tumhihopic, audio: saiyaara },
        { id: 5, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic3, audio: saiyaara },
        { id: 6, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic2, audio: saiyaara },
        { id: 7, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic1, audio: saiyaara },
        { id: 8, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic3, audio: saiyaara },
      ],
    },
    {
      language: "English",
      songs: [
        { id: 9, title: "Shape of You", artist: "Ed Sheeran", thumbnail: tumhihopic1, audio: shapeofyou },
        { id: 10, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic3, audio: makhna },
        { id: 11, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic3, audio: makhna },
      ],
    },
    {
      language: "Bengali",
      songs: [
        { id: 12, title: "Tomake Chai", artist: "Kabir Suman", thumbnail: tumhihopic2, audio: tomakechay },
        { id: 13, title: "Makhna", artist: "Yo Yo Honey Singh", thumbnail: tumhihopic3, audio: saiyaara },
      ],
    },
  ],
};

export default musicData;
