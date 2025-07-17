import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NewReleases from '../components/NewReleases';
import Banner from '../components/Banner';
import UpcomingEvents from '../components/UpcomingEvents';
import Artists from '../components/Artists';
import MusicSection from '../components/MusicSection';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <section className="main_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Banner/>
            <NewReleases/>
            <UpcomingEvents/>
            <Artists/>
            <MusicSection/>
            <BlogSection/>
            <Footer/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
