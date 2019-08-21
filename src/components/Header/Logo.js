import React from 'react';
// styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      Design<span className={styles.span}>Labs</span>
    </div>
  );
};

export default Logo;
