/*
 * LoginPage
 *
 * This page could be shown to a user trying to access the platform
 * forcing the user to authenticate first
 *
 */

// 3rd Party
import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// Components
import Logo from '../../../images/logo.png';

import LoginForm from '../LoginForm';
import { LoginWrapper } from './styles';
import AuthMiddleware from '../../../middlewares/AuthMiddleware';
import RegularCard from '../../../components/Card';

/* eslint-disable react/prefer-stateless-function */
class LoginPage extends React.PureComponent {
  constructor() {
    super();
    this.Auth = new AuthMiddleware();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <LoginWrapper>
        <Helmet title={'Login'} />
        <img className="content" src={Logo} alt="Drive Rite" />
        <RegularCard
          cardTitle="Login"
          cardSubtitle="Login using your Email and Password"
        >
          <LoginForm />
        </RegularCard>
      </LoginWrapper>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object,
};

export default compose(LoginPage);
