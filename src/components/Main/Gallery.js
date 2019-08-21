import React from 'react';
// styles
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.one} />
      <div className={styles.two} />
      <div className={styles.three} />
      <div className={styles.four} />
      <div className={styles.five} />
      <div className={styles.six} />
    </div>
  );
};

export default Gallery;
