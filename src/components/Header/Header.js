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
          We Create,
          <br /> We Design
        </h1>
        <div>
          <p className={styles.text}>
            Designed for designers who want more control, CodeDesign is centered
            around our pioneering code generation technology. With every stroke
            you make, we populate real-time code for you behind the scenes. So
            your design works automatically on every device and browser. Gain
            back the creativity compromised in pre-existing templates, and the
            time lost in the back and forth with developers in design handoffs.
            Save them for designing your next best website.
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
