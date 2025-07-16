import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NewReleases from './NewReleases';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';
import Artists from './Artists';
import MusicSection from './MusicSection';
import BlogSection from './BlogSection';


const MainContent = () => {
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
  );
};

export default MainContent;
