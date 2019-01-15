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
import * as ROUTES from '../../config/routes';

import LoginPage from '../Login/LoginPage/index';
import HomePage from '../HomePage/index';
import CarModelView from '../CarModel/View/index';
import CarMakeView from '../CarMake/View/index';
import CarView from '../Car/View/index';
import EmployeeView from '../Employee/View/index';
import EmployeeHomeView from '../EmployeeHomeView/index';
import AdView from '../Advert/View/index';
import ReviewView from '../Review/View/index';

// import CarModelCreate from '../CarModel/Create/index';
import CarMakeCreate from '../CarMake/Create/index';
// import CarCreate from '../Car/Create/index';
// import EmployeeCreate from '../Employee/Create/index';
import AdCreate from '../Advert/Create/index';
import ReviewCreate from '../Review/Create/index';
import CarModelCreate from '../CarModel/Create/index';
import CarCreate from '../Car/Create/index';
import EmployeeCreate from '../Employee/Create/index';
import CarPhotoCreate from '../CarPhoto/Create';
import CarMakeEdit from '../CarMake/Edit/index';
import CarModelEdit from '../CarModel/Edit/index';
import CarEdit from '../Car/Edit/index';
import EmployeeEdit from '../Employee/Edit/index';
import CarDetail from '../CarDetail/index';

import withAuth from '../../middlewares/withAuth';

function App() {
  return (
    <div className="content">
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.CARDETAIL} component={CarDetail} />
        <Dashboard>
          <Route
            exact
            path={ROUTES.HOME}
            component={withAuth(EmployeeHomeView)}
          />
          <Route
            exact
            path={ROUTES.MAKELIST}
            component={withAuth(CarMakeView)}
          />
          <Route
            exact
            path={ROUTES.MODELLIST}
            component={withAuth(CarModelView)}
          />
          <Route exact path={ROUTES.CARLIST} component={withAuth(CarView)} />
          <Route exact path={ROUTES.ADLIST} component={withAuth(AdView)} />
          <Route
            exact
            path={ROUTES.EMPLOYEELIST}
            component={withAuth(EmployeeView)}
          />
          <Route
            exact
            path={ROUTES.REVIEWLIST}
            component={withAuth(ReviewView)}
          />
          <Route
            exact
            path={ROUTES.REVIEWCREATE}
            component={withAuth(ReviewCreate)}
          />
          <Route
            exact
            path={ROUTES.MAKECREATE}
            component={withAuth(CarMakeCreate)}
          />
          <Route exact path={ROUTES.ADCREATE} component={withAuth(AdCreate)} />
          <Route
            exact
            path={ROUTES.CARPHOTOCREATE}
            component={withAuth(CarPhotoCreate)}
          />
          <Route
            exact
            path={ROUTES.MODELCREATE}
            component={withAuth(CarModelCreate)}
          />
          <Route
            exact
            path={ROUTES.CARCREATE}
            component={withAuth(CarCreate)}
          />
          <Route
            exact
            path={ROUTES.EMPLOYEECREATE}
            component={withAuth(EmployeeCreate)}
          />
          <Route
            exact
            path={ROUTES.MAKEEDIT}
            component={withAuth(CarMakeEdit)}
          />
          <Route
            exact
            path={ROUTES.MODELEDIT}
            component={withAuth(CarModelEdit)}
          />
          <Route exact path={ROUTES.CAREDIT} component={withAuth(CarEdit)} />
          <Route
            exact
            path={ROUTES.EMPLOYEEEDIT}
            component={withAuth(EmployeeEdit)}
          />
        </Dashboard>
        <Route path="*" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
