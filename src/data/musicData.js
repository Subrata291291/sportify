import saiyaara from '../assets/music/saiyaara.mp3';
import IshqMein from '../assets/music/Ishq-mein.mp3';
import LaalPari from '../assets/music/Laal-pari.mp3';
import Qayamat from '../assets/music/Qayamat.mp3';
import clocks from '../assets/music/Clocks.mp3';
import repeat from '../assets/music/Repeat.mp3';
import celestial from '../assets/music/Celestial.mp3';
import telecasted from '../assets/music/Telecasted.mp3';
import popo from '../assets/music/popo.mp3';

import music1 from '../assets/images/music1.jpeg';
import music2 from '../assets/images/music2.png';
import music5 from '../assets/images/music3.jpg';
import music6 from '../assets/images/music4.jpeg';
import music7 from '../assets/images/music7.jpg';
import Laalpari from '../assets/images/music7.jpeg';
import saiyaaraPic from '../assets/images/saiyaaraPic.jpg';
import QayamatPic from '../assets/images/QayamatPic.jpg';
import PoPoPic from '../assets/images/PoPoPic.jpg';


import artist1 from '../assets/images/artist1.jpg';
import artist2 from '../assets/images/artist2.jpg';
import artist3 from '../assets/images/artist3.jpg';
import artist4 from '../assets/images/artist4.jpg';
import artist5 from '../assets/images/artist5.jpg';

const musicData = {
  artists: [
    {
      id: 1,
      name: "Arijit Singh",
      image: artist1,
      songs: [
        { id: 1, title: "Qyaamat", thumbnail: QayamatPic, cover: QayamatPic, audio: Qayamat },
        { id: 2, title: "Ishq Mein", thumbnail: music7, cover: music7, audio: IshqMein },
      ],
    },
    {
      id: 2,
      name: "Sonu Nigam",
      image: artist2,
      songs: [
        { id: 3, title: "Kal Ho Naa Ho", thumbnail: artist2, cover: QayamatPic, audio: LaalPari },
      ],
    },
    {
      id: 3,
      name: "Yo Yo Honey Singh",
      image: artist3,
      songs: [
        { id: 4, title: "Makhna", thumbnail: artist3, cover: QayamatPic, audio: IshqMein },
      ],
    },
    {
      id: 4,
      name: "Ed Sheeran",
      image: artist4,
      songs: [
        { id: 5, title: "Shape of You", thumbnail: artist4, cover: QayamatPic, audio: clocks },
      ],
    },
    {
      id: 5,
      name: "Kabir Suman",
      image: artist5,
      songs: [
        { id: 6, title: "Tomake Chai", thumbnail: artist5, cover: QayamatPic, audio: repeat },
      ],
    },
    {
      id: 6,
      name: "Sunidhi chuhan",
      image: artist3,
      songs: [
        { id: 7, title: "Tomake Chai", thumbnail: artist5, cover: QayamatPic, audio: celestial },
      ],
    },
  ],

  languages: [
    {
      language: "Hindi",
      icon: "🎵",
      songs: [
        {
          id: 11,
          title: "Ishq mein",
          artist: "Housefull-5",
          thumbnail: music7,
          audio: IshqMein,
          duration: "2:35",
          rank: 1,
          lastWeekRank: 1,
        },
        {
          id: 12,
          title: "Saiyara",
          artist: "Saiyara",
          thumbnail: saiyaaraPic,
          audio: saiyaara,
          duration: "3:37",
          rank: 2,
          lastWeekRank: 1,
        },
        {
          id: 13,
          title: "Laal Pari",
          artist: "Housefull-5",
          thumbnail: Laalpari,
          audio: LaalPari,
          duration: "5:30",
          rank: 3,
          lastWeekRank: 15,
        },
        {
          id: 14,
          title: "Qayamat",
          artist: "Housefull-5",
          thumbnail: QayamatPic,
          audio: Qayamat,
          duration: "3:42",
          rank: 4,
          lastWeekRank: 11,
        },
        {
          id: 15,
          title: "The Po Po",
          artist: "Son Of Sardaar 2",
          thumbnail: PoPoPic,
          audio: popo,
          duration: "3:02",
          rank: 5,
          lastWeekRank: 2,
        },
      ],
    },
    {
      language: "English",
      icon: "🎵",
      songs: [
        {
          id: 16,
          title: "Calm Down",
          artist: "Rema ft. Selena Gomez",
          thumbnail: music1,
          audio: clocks,
          duration: "2:58",
          rank: 1,
        },
        {
          id: 17,
          title: "Shape of You",
          artist: "Ed Sheeran",
          thumbnail: music2,
          audio: repeat,
          duration: "3:14",
          rank: 2,
        },
        {
          id: 18,
          title: "Qayamat",
          artist: "Mark Karan",
          thumbnail: music5,
          audio: celestial,
          duration: "3:21",
          rank: 3,
        },
        {
          id: 19,
          title: "LaalPari Motionless",
          artist: "Mark Karan",
          thumbnail: music6,
          audio: telecasted,
          duration: "3:12",
          rank: 4,
        },
        {
          id: 20,
          title: "Long Distance",
          artist: "Mark Karan",
          thumbnail: music7,
          audio: saiyaara,
          duration: "5:04",
          rank: 5,
        },
      ],
    },
    {
      language: "Bengali",
      icon: "🎤",
      songs: [
        {
          id: 21,
          title: "Got What I Got",
          artist: "Jason Aldean",
          thumbnail: music1,
          audio: LaalPari,
          duration: "2:58",
          rank: 1,
          isLive: true,
        },
        {
          id: 22,
          title: "Supalonely",
          artist: "BENEE Featuring",
          thumbnail: music2,
          audio: LaalPari,
          duration: "59:01",
          rank: 2,
        },
        {
          id: 23,
          title: "Girls In The Hood",
          artist: "Megan Thee",
          thumbnail: music5,
          audio: Qayamat,
          duration: "33:10",
          rank: 3,
        },
        {
          id: 24,
          title: "Got It On Me",
          artist: "Summer Walker",
          thumbnail: music6,
          audio: Qayamat,
          duration: "44:27",
          rank: 4,
        },
        {
          id: 25,
          title: "Righteous",
          artist: "Juice WRLD",
          thumbnail: music7,
          audio: clocks,
          duration: "51:41",
          rank: 5,
        },
      ],
    },
  ],
};

export default musicData;
