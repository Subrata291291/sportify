import React from 'react';
import Slider from 'react-slick';
import eventData from '../data/eventData';

const UpcomingEvents = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for large desktops
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1400, // XL screens
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200, // LG screens (laptops)
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992, // MD screens (tablets)
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // SM screens (small tablets)
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576, // XS screens (phones)
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      

  return (
    <section className="upcoming_events_area" data-aos="fade-up" id="events">
      <div className="title_area">
        <h4>Upcoming Events</h4>
        {/* <a href="#">See all <span><i className="fa fa-chevron-right" /></span></a> */}
      </div>

      <div className="upcoming_slider p-0">
        <Slider {...settings}>
          {eventData.map(event => (
            <div className="slider position-relative" key={event.id}>
              <div className={`upcoming_evenet_box ${event.boxClass}`}>
                <div className="upcoming_evenet_content">
                  <button className="buy_ticket_btn">{event.status}</button>
                  <h5 className="upcoming_date">{event.date}</h5>
                  <span className="upcoming_time">{event.time}</span>
                  <h4 className="upcoming_title">
                    <a href="#">{event.title}</a>
                  </h4>
                  <p className="upcoming_para">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingEvents;
