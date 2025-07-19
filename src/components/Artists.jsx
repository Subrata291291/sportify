import React from 'react';
import musicData from '../data/musicData';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Artists = () => {
  const artists = musicData.artists || [];

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 4 } },
      { breakpoint: 767, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section className="artist_area mt-60" data-aos="fade-up" id="artists">
      <div className="title_area">
        <h4>Artist</h4>
        <Link to={`/artist`}>See All <span><i className="fa fa-chevron-right" /></span></Link>
      </div>

      <Slider {...settings} className="artist_slider">
        {artists.map((artist, index) => (
          <div className="slider position-relative" key={index}>
            <div>
            <div className="slider_pic">
              <Link to={`/artist/${artist.id}`}>
                <img src={artist.image} alt={artist.name} />
              </Link>
            </div>
            <div className="slider_content">
              <h3 className="text-truncate">
              <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
              </h3>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Artists;
