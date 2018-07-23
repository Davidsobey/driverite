/**
 *
 * ManagerCreate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { compose } from 'redux';
import FormControl from 'material-ui/Form/FormControl';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import TextField from '../../../components/TextField/style';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import { StyledForm } from '../../../styles/global-styled-components';

import { createManagerRequest as createAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const FORM_NAME = 'ManagerCreate';

export class ManagerCreate extends React.Component {
  required = value => (value ? undefined : 'Required Field');

  defaultSubmit = (values) => {
    this.props.onSubmit(values.toJS());
  };

  isSubmit = (event) => {
    if (event.keyCode === 13) {
      this.props.createManagerRequest();
    }
  };

  render() {
    const { createManagerRequest } = this.props;
    return (
      <div>
        <Card
          cardTitle="Create Manager"
          cardSubtitle="Create a new manager that can create rotations for grads to apply to."
        >
          <Form
            onSubmit={this.props.handleSubmit(this.defaultSubmit)}
            noValidate
            autoComplete="off"
          >
            <StyledForm>
              <FormControl fullWidth>
                <Field
                  className="autoMargin"
                  name="id"
                  label="Manager NT Number"
                  component={TextField}
                  InputProps={{
                    autoFocus: true,
                  }}
                  validate={[this.required]}
                />
              </FormControl>
              <FormControl fullWidth>
                <Field
                  className="autoMargin"
                  name="firstname"
                  label="Manager First Name"
                  component={TextField}
                  InputProps={{
                    autoFocus: true,
                  }}
                  validate={[this.required]}
                />
              </FormControl>
              <FormControl fullWidth>
                <Field
                  className="autoMargin"
                  name="surname"
                  label="Manager Last Name"
                  component={TextField}
                  InputProps={{
                    autoFocus: true,
                  }}
                  validate={[this.required]}
                />
              </FormControl>
              <FormControl fullWidth>
                <Field
                  className="autoMargin"
                  name="email"
                  label="Manager Email"
                  type="email"
                  component={TextField}
                  InputProps={{
                    autoFocus: true,
                    type: 'email',
                  }}
                  validate={[this.required]}
                />
              </FormControl>
              <FormControl fullWidth>
                <Field
                  className="autoMargin"
                  name="password"
                  label="Manager Password"
                  component={TextField}
                  validate={[this.required]}
                />
              </FormControl>
              <div className="end">
                <Button
                  variant="raised"
                  color="primary"
                  tabIndex={0}
                  onClick={createManagerRequest}
                  className="margin"
                >
                  Create
                </Button>
              </div>
            </StyledForm>
          </Form>
        </Card>
      </div>
    );
  }
}

ManagerCreate.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createManagerRequest: PropTypes.func.isRequired,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  ManagerCreate,
);

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(createAction(values)),
    createManagerRequest: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'managerCreate', reducer });
const withSaga = injectSaga({ key: 'managerCreate', saga });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(ManagerCreate);
