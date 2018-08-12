/**
 * App.js
 *
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from '../../components/Alert';

// import NotFoundPage from 'containers/NotFoundPage/index';
import Dashboard from '../../components/Dashboard';
// import withAuth from '../../middlewares/withAuth';
import * as ROUTES from './routes';

import LoginPage from '../Login/LoginPage/index';
import HomePage from '../HomePage/index';
import CarView from '../Car/View/index';


function App() {
  return (
    <div className="content">
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Dashboard>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.CARLIST} component={CarView} />
          <Route exact path={ROUTES.USERLIST} component={HomePage} />
          <Route exact path={ROUTES.REVIEWLIST} component={HomePage} />
        </Dashboard>
      </Switch>
    </div>
  );
}

export default App;
