import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import musicData from '../data/musicData';
import { MusicPlayerContext } from '../context/MusicPlayerContext';
import MusicPlayer from '../components/MusicPlayer';

const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60) || 0;
  const sec = Math.floor(seconds % 60) || 0;
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
};

const SingleArtist = () => {
  const { id } = useParams();
  const artist = musicData.artists.find((a) => a.id.toString() === id);

  const { currentSong, isPlaying, playTrack, togglePlayPause } = useContext(MusicPlayerContext);
  const [durations, setDurations] = useState({});

  useEffect(() => {
    if (artist?.songs) {
      artist.songs.forEach((song) => {
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
    }
  }, [artist]);

  const handlePlayPause = (song) => {
    if (currentSong?.id === song.id) {
      togglePlayPause();
    } else {
      playTrack(song, artist.songs);
    }
  };

  if (!artist) return <div className="container py-5">Artist not found</div>;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className='artist-left'>
            <img
              src={artist.image}
              alt={artist.name}
              style={{ objectFit: 'cover', borderRadius: '5%' }}
            />
            <h2 className="mt-3">{artist.name}</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="artist-right">
          <h4 className="mb-5">Songs</h4>
            <ul className="main__list">
              {artist.songs && artist.songs.length > 0 ? (
                artist.songs.map((song) => (
                  <li className="single-item" key={song.id}>
                    <div className="single-item__cover" onClick={() => handlePlayPause(song)} style={{ cursor: 'pointer' }}>
                      <img src={song.thumbnail} alt={song.title} className="w-100" />

                      {/* Play/Pause Icon */}
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

                    <div className="single-item__title mt-2">
                      <h5 className="mb-2">{song.title}</h5>
                      <span className="">{artist.name}</span>
                    </div>

                    <span className="single-item__time d-block mt-1">
                      {durations[song.id] || '--:--'}
                    </span>
                  </li>
                ))
              ) : (
                <p>No songs available for this artist.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default SingleArtist;
