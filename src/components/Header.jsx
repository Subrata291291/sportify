import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Music', path: '/music' },
    { label: 'Contact', path: '/contact' },
  ];

  const mobileLinks = [
    'concerts', 'releases', 'events', 'artists', 'music', 'news'
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="header_area gray-bg d-lg-block d-md-block d-none">
        <nav className="navbar navbar-expand-md shadow">
          <div className="container-fluid position-relative">
            <Link className="navbar-brand d-lg-none d-md-block d-block" to="/">
              <img src={logo} alt="logo" />
            </Link>

            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="navbar_icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 primary_nav">
                {navLinks.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <Link className="nav-link" to={item.path}>
                      <div className="menu-text">
                        {item.label.split('').map((char, i) => (
                          <span key={i}>{char}</span>
                        ))}
                      </div>
                    </Link>
                  </li>
                ))}

                <li>
                  <form className="search_form" method="GET" action="#">
                    <input
                      className="search-input"
                      placeholder="Artist, track or music..."
                      type="search"
                      name="s"
                      id="search"
                    />
                    <input type="hidden" name="post_type" value="product" />
                    <button type="submit" className="common_btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </li>
              </ul>
            </div>

            <ul className="right_menu d-lg-block d-md-none d-none">
              <li className="sign-in-btn">
                <Link to="/login">
                  <h5>
                    <span>
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </span>{' '}
                    Sign In
                  </h5>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <section className="mb-menu d-lg-none d-md-block d-block">
        <Link className="navbar-brand d-md-none" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div
          className="navbar_icon"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" />
              </Link>
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <div className="sidenav_area">
              <ul>
                {mobileLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={`/${item}`}>
                      <span></span> {/* Add an icon or SVG if needed */}
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
