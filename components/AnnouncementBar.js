// components/AnnouncementBar.js
import React from 'react';
import styles from '../styles/AnnouncementBar.module.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const AnnouncementBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className={styles.customToolbar}>
        <Typography variant="body1" className={styles.text}>
          Welcome to our website!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AnnouncementBar;
