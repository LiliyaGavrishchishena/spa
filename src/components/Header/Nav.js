import React from 'react';
import { NavLink } from 'react-router-dom';
// components
import Logo from './Logo';
// styles
import styles from './Nav.module.css';

const Nav = ({ items = [] }) => (
  <nav className={styles.nav}>
    <Logo className={styles.logo} />
    <ul className={styles.list}>
      {items.map(({ name, path }) => (
        <li key={name} className={styles.link}>
          <NavLink
            exact
            to={path}
            activeClassName={styles.active}
            className={styles.link}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
