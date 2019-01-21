import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthMiddleware from './AuthMiddleware';

export default function withAuth(AuthComponent) {
  const Auth = new AuthMiddleware('http://localhost:8080');

  class AuthWrapped extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
    };

    constructor() {
      super();
      this.state = {
        user: null,
      };
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        Auth.logout();
        this.props.history.replace('/login');
      } else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile,
          });
        } catch (err) {
          Auth.logout();
          this.props.history.replace('/login');
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} />
        );
      }
      return null;
    }
  }
  return AuthWrapped;
}
