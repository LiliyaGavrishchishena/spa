import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// components
import Services from './Services';
import Gallery from './Gallery';
import Mission from '../Mission/Mission';
// styles
import styles from './Main.module.css';

const Main = () => (
  <main className={styles.main}>
    <section className={styles.section}>
      <h2 className={styles.title}>About Us</h2>
      <div>
        <p className={styles.text}>
          Designed for designers who want more control, CodeDesign is centered
          around our pioneering code generation technology. With every stroke
          you make, we populate real-time code for you behind the scenes. So
          your design works automatically on every device and browser. Gain back
          the creativity compromised in pre-existing templates, and the time
          lost in the back and forth with developers in design handoffs. Save
          them for designing your next best website.
        </p>
      </div>
    </section>
    <DndProvider backend={HTML5Backend}>
      <Services />
    </DndProvider>
    <Gallery />
    <Mission />
  </main>
);

export default Main;
