import React from 'react';
// styles
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>CodeDesign by Liliya Gavrishchishena</h3>
      <p>
        Support <br /> Liliya.Gavrishchishena@gmail.com
      </p>
      <ul className={styles.list}>
        <li>
          <a
            className={styles.link}
            href="https://github.com/LiliyaGavrishchishena"
          >
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/liliya-gavrishchishena-7a1075154/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a className={styles.link} href="Liliya.Gavrishchishena@gmail.com">
            <i className="fab fa-google" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
