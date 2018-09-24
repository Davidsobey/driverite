/**
 *
 * LoginForm
 *
 */

// 3rd Party
import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import FormControl from 'material-ui/Form/FormControl';
import IconButton from 'material-ui/IconButton';
import { TextField } from 'redux-form-material-ui';
import InputAdornment from 'material-ui/Input/InputAdornment';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import Person from 'material-ui-icons/Person';
import Lock from 'material-ui-icons/Lock';

import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import Button from '../../../components/Button';

import { login as loginAction } from '../../../components/User/actions';
import reducer from '../../../components/User/reducer';
import saga from '../../../components/User/saga';
import {
  LoginButtonWrapper,
  LoginInnerButtonWrapper,
  LoginWrapper,
} from './styles';

/* eslint-disable-line react/prefer-stateless-function */
class LoginForm extends React.Component {
  required = value => (value ? undefined : 'Required');

  validEmail = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined);

  defaultSubmit = (values) => {
    this.props.onLoginSubmit(values.toJS());
  };

  isSubmit = (event) => {
    if (event.keyCode === 13) {
      this.props.login();
    }
  };

  render() {
    const { login } = this.props;
    return (
      <div>
        <LoginWrapper>
          <Form
            onSubmit={this.props.handleSubmit(this.defaultSubmit)}
            noValidate
            autoComplete="off"
          >
            <FormControl fullWidth>
              <Field
                name="username"
                label="Username"
                component={TextField}
                InputProps={{
                  autoFocus: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton tabIndex={-1}>
                        <Person />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                validate={[this.required, this.validEmail]}
                onKeyDown={event => this.isSubmit(event)}
              />
            </FormControl>
            <FormControl fullWidth>
              <Field
                name="password"
                label="Password"
                component={TextField}
                validate={[this.required]}
                type="password"
                onKeyDown={event => this.isSubmit(event)}
                InputProps={{
                  autoFocus: false,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton tabIndex={-1}>
                        <Lock />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <LoginButtonWrapper>
              <LoginInnerButtonWrapper>
                <Button
                  variant="raised"
                  color="primary"
                  tabIndex={0}
                  onClick={login}
                >
                  Login
                </Button>
              </LoginInnerButtonWrapper>
            </LoginButtonWrapper>
          </Form>
        </LoginWrapper>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};

const FORM_NAME = 'login';

const withForm = reduxForm(
  {
    form: FORM_NAME,
    initialValues: {
      username: 'davidsobey@live.co.uk',
      password: 'Sobey2503',
    },
  },
  LoginForm,
);

const mapDispatchToProps = dispatch => ({
  onLoginSubmit: values => dispatch(loginAction(values)),
  login: () => dispatch(submit(FORM_NAME)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withForm,
)(LoginForm);
