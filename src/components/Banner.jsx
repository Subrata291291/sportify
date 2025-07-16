import React from 'react';
import Slider from 'react-slick';
import bannerSlides from '../data/bannerSlides';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section className="banner_area mt-20" id="concerts">
      <div className="banner_slider p-0">
        <Slider {...settings}>
          {bannerSlides.map(slide => (
            <div key={slide.id} className="slider position-relative">
              <div className="slider_pic">
                <img src={slide.img} alt="banner" className="w-100" />
              </div>
              <div className="slider_content animate__animated animate__fadeInUp">
                <h3>
                  Record Label <span className="theme-color">& Music</span> streaming
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetu adipisicing elit sedeiu tempor inci ut labore
                  et dolore magna aliqua.
                </p>
                <button type="button" className="buy_now_btn mt-20">Buy Now</button>
                {/* <button type="button" className="learn_btn mt-20">Learn More</button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
