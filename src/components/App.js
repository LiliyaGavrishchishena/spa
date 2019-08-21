import React from 'react';
//components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// styles
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
