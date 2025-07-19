import React from 'react';
import { Link } from 'react-router-dom';
import musicData from '../data/musicData';
import Footer from '../components/Footer';

const Artist = () => {
  return (
    <div className='container py-5'>
      <div className="row">
        {musicData.artists.map((artist) => (
          <div className="col-6 col-md-3 col-lg-3 mb-4" key={artist.id}>
            <Link to={`/artist/${artist.id}`} className="text-decoration-none text-dark">
              <div className="artist-box text-center shadow-sm p-3 rounded h-100">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="img-fluid rounded mb-2"
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <h5 className='artist-name mt-3 text-white'>{artist.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Artist;
