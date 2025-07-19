import React from 'react';
import { useParams } from 'react-router-dom';
import musicData from '../data/musicData';
import Footer from '../components/Footer'

const SingleArtist = () => {
  const { id } = useParams();
  const artist = musicData.artists.find((a) => String(a.id) === id);

  if (!artist) return <div className="container py-5 text-light"><h2>Artist not found</h2></div>;

  return (
    <>
      <section className='single-artist-area'>
      <div className="container py-5 text-light">
        <div className="row align-items-start">
          {/* Left column: Artist Image */}
          <div className="col-md-4 mb-4">
            <img
              src={artist.image}
              alt={artist.name}
              className="img-fluid rounded shadow"
              style={{ width: '100%', objectFit: 'cover', maxHeight: '400px' }}
            />
            <h3 className="mt-3">{artist.name}</h3>
          </div>

          {/* Right column: Song list with audio player */}
          <div className="col-md-8">
            <h4 className='mb-4'>Songs -</h4>
            <div className="list-group">
              {artist.songs.map((song) => (
                <div
                  key={song.id}
                  className="list-group-item bg-dark text-light mb-3 rounded shadow-sm d-flex justify-content-between align-items-center"
                >
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h5 className="mb-3">{song.title}</h5>
                    {song.cover && (
                      <img
                        src={song.cover}
                        alt={song.title}
                        className="img-fluid rounded"
                        style={{ maxHeight: '100px', width: 'auto' }}
                      />
                    )}
                  </div>

                  <div style={{ flexBasis: '300px', maxWidth: '300px' }}>
                    <audio controls style={{ width: '100%' }}>
                      <source src={song.audio} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default SingleArtist;
