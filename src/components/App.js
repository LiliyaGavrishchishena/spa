import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Spinner from './Spinner/Spinner';
import Pricing from './Pricing/Pricing';
import Mission from './Mission/Mission';
import Contact from './Contact/Contact';
// configs
import routes from '../configs/routes';
// styles
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={Spinner}>
        <Switch>
          <Route exact path={routes.MAIN} component={Main} />
          <Route exact path={routes.PRICING} component={Pricing} />
          <Route exact path={routes.MISSION} component={Mission} />
          <Route exact path={routes.CONTACT} component={Contact} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
