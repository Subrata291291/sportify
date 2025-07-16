import React from 'react';
import Sidebar from '../components/Sidebar';
import NewReleases from './NewReleases';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';
import Artists from './Artists';

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
