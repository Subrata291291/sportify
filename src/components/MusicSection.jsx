import React, { useContext, useEffect, useState } from 'react';
import musicData from '../data/musicData';
import { MusicPlayerContext } from '../context/MusicPlayerContext';

const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60) || 0;
  const sec = Math.floor(seconds % 60) || 0;
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
};

const MusicSection = () => {
  const {
    currentSong,
    isPlaying,
    playTrack,
    togglePlayPause,
  } = useContext(MusicPlayerContext);

  const [durations, setDurations] = useState({}); // { songId: '2:35' }

  useEffect(() => {
    // Load duration for every song once
    musicData.languages.forEach((lang) => {
      lang.songs.forEach((song) => {
        if (!durations[song.id]) {
          const audio = new Audio(song.audio);
          audio.addEventListener('loadedmetadata', () => {
            setDurations((prev) => ({
              ...prev,
              [song.id]: formatTime(audio.duration),
            }));
          });
        }
      });
    });
  }, []);

  const handlePlayPause = (song, list) => {
    if (currentSong?.id === song.id) {
      togglePlayPause();
    } else {
      playTrack(song, list);
    }
  };

  return (
    <section className="music_area mt-100" data-aos="fade-up" id="music">
      <div className="row">
        {musicData.languages.map((lang, idx) => (
          <div className="col-lg-4 col-md-4 col-12" key={idx}>
            <div className="music_list">
              <div className="title_area">
                <h4>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24Z" />
                    </svg>
                  </span>{' '}
                  {lang.language}
                </h4>
              </div>

              <ul className="main__list">
                {lang.songs.map((song, index) => (
                  <li className="single-item" key={song.id}>
                    {/* <span className="single-item__number">{index + 1}</span> */}
                    <span className="single-item__rate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z" />
                      </svg>{' '}
                      {song.rank ?? 1}
                    </span>

                    <div
                      onClick={() => handlePlayPause(song, lang.songs)}
                      className="single-item__cover"
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={song.thumbnail} alt={song.title} />

                      {/* Toggle Play/Pause Icon */}
                      {currentSong?.id === song.id && isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Z" />
                        </svg>
                      )}
                    </div>

                    <div className="single-item__title text-truncate">
                      <h4>{song.title}</h4>
                      <span>{song.artist}</span>
                    </div>

                    <span className="single-item__time">
                      {durations[song.id] || '--:--'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
