import React, { useContext } from 'react';
import musicData from '../data/musicData';
import { MusicPlayerContext } from '../context/MusicPlayerContext';

const NewReleases = () => {
  const { currentSong, isPlaying, playTrack, togglePlayPause } = useContext(MusicPlayerContext);

  const newReleases = musicData.languages
    .flatMap(lang => lang.songs)
    .slice(-12)
    .reverse();

  const isCurrent = (song) => currentSong && currentSong.id === song.id;

  const handlePlayPause = (song) => {
    if (isCurrent(song)) {
      togglePlayPause();
    } else {
      playTrack(song, newReleases);
    }
  };

  return (
    <section className="new_realease_area mt-40 mb-40" id="releases" data-aos="fade-up">
      <div className="title_area">
        <h4>New Releases</h4>
        {/* <a href="#">See all <span><i className="fa fa-chevron-right" /></span></a> */}
      </div>
      <div className="row">
        {newReleases.map(song => (
          <div className="col-lg-2 col-md-2 col-4 mb-30" key={song.id}>
            <div className={`album ${isCurrent(song) ? 'active' : ''}`}>
              <div className="album__cover">
                <img src={song.thumbnail} alt={song.title} className="w-100" />
                <button
                  onClick={() => handlePlayPause(song)}
                  className="play-button"
                  aria-label={isCurrent(song) && isPlaying ? 'Pause' : 'Play'}
                >
                  {isCurrent(song) && isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="album__title">
                <h3 className="text-truncate">{song.title}</h3>
                <span>{song.artist}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
