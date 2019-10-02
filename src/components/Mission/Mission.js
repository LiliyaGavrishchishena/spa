import React from 'react';
// styles
import styles from './Mission.module.css';

const Mission = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Our Mission</h2>
    <div>
      <p className={styles.text}>
        Designed for designers who want more control, CodeDesign is centered
        around our pioneering code generation technology. With every stroke you
        make, we populate real-time code for you behind the scenes. So your
        design works automatically on every device and browser. Gain back the
        creativity compromised in pre-existing templates, and the time lost in
        the back and forth with developers in design handoffs. Save them for
        designing your next best website.
      </p>
    </div>
  </section>
);

export default Mission;
