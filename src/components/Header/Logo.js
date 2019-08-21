import React from 'react';
// styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      Code<span className={styles.span}>Design</span>
    </div>
  );
};

export default Logo;
