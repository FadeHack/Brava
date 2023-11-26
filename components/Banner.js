// components/Banner.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styles from '../styles/Banner.module.css'; // Import the CSS module

const Banner = () => {
  const bannerData = [
    { image: '/b1.png', text: 'Explore the Latest Trends', buttonLabel: 'Shop Now' },
    { image: '/b2.png', text: 'Discover Exclusive Collections', buttonLabel: 'Shop Now' },
    { image: '/b3.png', text: 'Find Your Perfect Style', buttonLabel: 'Shop Now' },
    { image: '/b4.png', text: 'Shop the Seasons Must-Haves', buttonLabel: 'Shop Now' },
    { image: '/b5.png', text: 'Unlock Fashion for Every Occasion', buttonLabel: 'Shop Now' },
  ];

  return (
    <Carousel className={styles.carousel} animation="slide">
      {bannerData.map((item, index) => (
        <div key={index} className={styles.bannerItem}>
          <img src={item.image} alt={`Banner ${index + 1}`} className={styles.bannerImage} />
          <div className={styles.bannerText}>
            <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '3em', fontFamily:'cursive' }}>{item.text}</Typography>
            <Button variant="contained" style={{backgroundColor:"white", color:"black"}}>
              {item.buttonLabel}
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
