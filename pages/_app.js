import React from 'react';
import "../styles/global.css"
import NavBar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import Banner from '../components/Banner';
import Slideshow from '../components/SlideShow';

const App = () => {
  return (
    <div >
      <AnnouncementBar />
      <NavBar />
      <Banner />
      <Slideshow />
    </div>
  );
};

export default App;
