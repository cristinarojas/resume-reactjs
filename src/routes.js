// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import About from './components/About';
import Portafolio from './components/Portafolio';
import Contact from './components/Contact';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Portafolio} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
