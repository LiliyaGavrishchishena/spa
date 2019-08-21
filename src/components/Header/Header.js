import React from 'react';
//components
import Nav from './Nav';
// styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.head}>
        <h1 className={styles.title}>
          We Design,
          <br /> We Create
        </h1>
        <div>
          <p className={styles.text}>
            Integer posuere leo non erat ornare dictum id vitae magna. Proin
            consectetur iaculis nisi, ut convallis tortor tempor congue.
            Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at
            rhoncus eu, maximus ut diam.
          </p>
          <div>
            <a className={styles.contact} href="#">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
