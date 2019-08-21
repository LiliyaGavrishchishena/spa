import React from 'react';
//components
import Logo from './Logo';
// styles
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="#">
            About
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Mission
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
