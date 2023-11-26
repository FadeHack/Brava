// components/SlideShow.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import styles from '../styles/SlideShow.module.css'; // Import the CSS module

const SlideShow = () => {
  const slideData = [
    { image: '/s1.png', text: 'Discover' },
    { image: '/s2.png', text: 'Trends' },
    { image: '/s3.png', text: 'Shop' },
    { image: '/s4.png', text: 'Style' },
    { image: '/s5.png', text: 'Occasion' },
    { image: '/s6.png', text: 'Exclusive' },
  ];

  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateValue((prevValue) => (prevValue - 28) % (28 * slideData.length));
    }, 3000); // Adjust the interval based on your preference

    return () => clearInterval(interval);
  }, [slideData.length]);

  return (
    <div className={styles.slideShowContainer}>
      {slideData.map((item, index) => (
        <Card
          key={index}
          className={styles.slideCard}
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          <div className={styles.cardImageContainer}>
            <img src={item.image} alt={`Slide ${index + 1}`} className={styles.cardImage} />
          </div>
          <CardContent className={styles.cardContent}>
            <Typography variant="h6" className={styles.cardText}>
              {item.text}
            </Typography>
            <Button variant="contained" color="primary" className={styles.shopNowButton}>
              Shop Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SlideShow;
