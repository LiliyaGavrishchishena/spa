import React from 'react';
import { Link } from 'react-router-dom';
//configs
import routes from '../../configs/routes';
// styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={styles.logo} to={routes.MAIN}>
      Code<span className={styles.span}>Design</span>
    </Link>
  );
};

export default Logo;
