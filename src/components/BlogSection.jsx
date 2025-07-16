// components/BlogSlider.jsx
import React from "react";
import Slider from "react-slick";
import blogData from "../data/blogData";

const BlogSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="blog_area mt-100" data-aos="fade-up" id="news">
      <div className="container">
        <div className="title_area">
          <h4>News</h4>
          <a href="#">See all <span><i className="fa fa-chevron-right" /></span></a>
        </div>
        <Slider {...settings} className="blog_slider">
          {blogData.map((blog) => (
            <div key={blog.id} className="px-2">
              <div className="blox_box">
                <img src={blog.image} alt={blog.title} />
                <div className="blog_content">
                  <h5 className="blog-date">
                    <span><i className="fa fa-calendar" /></span> {blog.date}
                  </h5>
                  <h3 className="blog-title text-truncate">{blog.title}</h3>
                  <p className="blog-title text-truncate">{blog.description}</p>
                  <a href={blog.link}>Read More <span><i className="fa fa-angle-right" /></span></a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSlider;
