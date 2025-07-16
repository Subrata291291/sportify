import React from 'react';
import Sidebar from '../components/Sidebar';
import NewReleases from './NewReleases';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
