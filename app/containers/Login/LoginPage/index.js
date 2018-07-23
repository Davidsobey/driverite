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
import { injectIntl } from 'react-intl';
// Components
import Logo from '../../../images/logo.png';

import messages from './messages';
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
    const {
      intl: { formatMessage },
    } = this.props;

    return (
      <LoginWrapper>
        <Helmet title={formatMessage(messages.pageTitle)} />
        <img src={Logo} alt={formatMessage(messages.logoDescription)} />
        <RegularCard
          cardTitle="Login"
          cardSubtitle="Login using you NT Username and Password"
        >
          <LoginForm />
        </RegularCard>
      </LoginWrapper>
    );
  }
}

LoginPage.propTypes = {
  intl: PropTypes.object,
  history: PropTypes.object,
};

export default compose(injectIntl)(LoginPage);
