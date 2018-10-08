/**
 *
 * EditCarMake
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { submit } from 'redux-form';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import FormControl from 'material-ui/Form/FormControl';

import RegularCard from '../../../components/Card';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField/style';
import StyledForm from '../../../styles/global-styled-components';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import { editEmployeeRequest } from './actions';

import reducer from './reducer';
import saga from './saga';

// const required = value => (value ? undefined : 'Required');
const FORM_NAME = 'Edit';
export class EmployeeEdit extends React.Component {
  required = value => (value ? undefined : 'Required Field');

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
      <div>
        <RegularCard
          cardTitle="Employee"
          cardSubtitle="Update an Employee in the Drive Rite Database."
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
                  label="Name"
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
                  name="phone"
                  label="Phone Number"
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
        </RegularCard>
      </div>
    );
  }
}

EmployeeEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  submit: PropTypes.func,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  EmployeeEdit,
);

const mapStateToProps = state => ({
  employee: state.get('employee'),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(editEmployeeRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'employeeEdit', reducer });
const withSaga = injectSaga({ key: 'employeeEdit', saga });

// You have to connect() to any reducers that you wish to connect to yourself
export default compose(
  connect(
    state => ({
      initialValues: state.toJS().employees
        ? state.toJS().employees.employee
        : '',
    }),
    mapDispatchToProps,
  ),
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(EmployeeEdit);
