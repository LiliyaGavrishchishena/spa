import React from 'react';
// styles
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.services}>
      <div>
        <p className={styles.text}>
          <i className="far fa-calendar-alt" />
        </p>
        <p className={styles.title}>Planning</p>
        <p className={styles.description}>
          Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse
          quam lectus, tristique dapibus sapien et, tempus suscipit nisl.
        </p>
      </div>

      <div>
        <p className={styles.text}>
          <i className="fas fa-crop" />
        </p>
        <p className={styles.title}>Design</p>
        <p className={styles.description}>
          Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam
          purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et
          convallis libero.
        </p>
      </div>

      <div>
        <p className={styles.text}>
          <i className="fas fa-code" />
        </p>
        <p className={styles.title}>Development</p>
        <p className={styles.description}>
          Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque.
          Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim
          sollicitudin varius.
        </p>
      </div>
    </div>
  );
};

export default Services;
