import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import musicData from '../data/musicData';
import { MusicPlayerContext } from '../context/MusicPlayerContext';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { playTrack } = useContext(MusicPlayerContext);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Music', path: '/music' },
    { label: 'Artist', path: '/artist' },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = [];
    musicData.artists.forEach((artist) => {
      artist.songs.forEach((song) => {
        if (song.title.toLowerCase().includes(value.toLowerCase())) {
          results.push({ ...song, artist });
        }
      });
    });

    setSearchResults(results);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleResultClick = (song, artist) => {
    playTrack(song, artist.songs);
    navigate(`/artist/${artist.id}`);
    setSearchTerm('');
    setSearchResults([]);
  };

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

                <li className="position-relative">
                  <form className="search_form" onSubmit={handleSearchSubmit}>
                    <input
                      className="search-input"
                      placeholder="Artist, track or music..."
                      type="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="common_btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>

                  {/* Desktop suggestions */}
                  {searchResults.length > 0 && (
                    <ul className="list-group position-absolute w-100 mt-1 z-3" style={{ top: '100%', left: 0 }}>
                      {searchResults.map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleResultClick(item, item.artist)}
                        >
                          <span>{item.title}</span>
                          <small className="text-muted">{item.artist.name}</small>
                        </li>
                      ))}
                    </ul>
                  )}
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
                {navLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path}>
                      <span></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Search */}
              <form className="search_form mt-3 position-relative" onSubmit={handleSearchSubmit}>
                <input
                  className="search-input"
                  placeholder="Search..."
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="common_btn">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>

                {/* Mobile suggestions */}
                {searchResults.length > 0 && (
                  <ul className="list-group position-absolute w-100 mt-1 z-3" style={{ top: '100%', left: 0 }}>
                    {searchResults.map((item, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleResultClick(item, item.artist)}
                      >
                        <span>{item.title}</span>
                        <small className="text-muted">{item.artist.name}</small>
                      </li>
                    ))}
                  </ul>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
