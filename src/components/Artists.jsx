import React from 'react';
import musicData from '../data/musicData';
import Slider from 'react-slick';

const Artists = () => {
  const artists = musicData.artists || [];

  const settings = {
    dots: true,
    arrows: false,
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
        <a href="#">See all <span><i className="fa fa-chevron-right" /></span></a>
      </div>

      <Slider {...settings} className="artist_slider">
        {artists.map((artist, index) => (
          <div className="slider position-relative" key={index}>
            <div>
            <a href="#">
              <div className="slider_pic">
                <img src={artist.image} alt={artist.name} />
              </div>
              <div className="slider_content">
                <h3 className="text-truncate">
                  <a href="#">{artist.name}</a>
                </h3>
              </div>
            </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Artists;
