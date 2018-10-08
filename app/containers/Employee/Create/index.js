/**
 *
 * EmployeeCreate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import FormControl from 'material-ui/Form/FormControl';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import TextField from '../../../components/TextField/style';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import StyledForm from '../../../styles/global-styled-components';

import { createEmployeeRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

const FORM_NAME = 'create';

export class EmployeeCreate extends React.Component {
  required = value => (value ? undefined : 'Required Field');
  email = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined);

  defaultSubmit = (values) => {
    this.props.onSubmit(values.toJS());
  };

  isSubmit = (event) => {
    if (event.keyCode === 13) {
      this.props.submit();
    }
  };

  render() {
    return (
      <Card
        cardTitle="Create Employee"
        cardSubtitle="Create an Employee that can login to the system."
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
                name="name"
                label="Employee Name"
                component={TextField}
                InputProps={{
                  autoFocus: false,
                }}
                validate={[this.required]}
              />
            </FormControl>
            <FormControl fullWidth>
              <Field
                className="autoMargin"
                name="email"
                label="Email"
                component={TextField}
                InputProps={{
                  autoFocus: false,
                }}
                validate={[this.required, this.email]}
              />
            </FormControl>
            <FormControl fullWidth>
              <Field
                className="autoMargin"
                name="phone"
                label="Phone"
                component={TextField}
                InputProps={{
                  autoFocus: false,
                }}
                validate={[this.required]}
              />
            </FormControl>
            <div className="end">
              <Button
                variant="raised"
                color="primary"
                tabIndex={0}
                className="margin"
                type="submit"
              >
                Create
              </Button>
            </div>
          </StyledForm>
        </Form>
      </Card>
    );
  }
}

EmployeeCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  EmployeeCreate,
);

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(createEmployeeRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'employeeCreate', reducer });
const withSaga = injectSaga({ key: 'employeeCreate', saga });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(EmployeeCreate);
