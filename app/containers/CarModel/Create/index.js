/**
 *
 * CarMakeCreate
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

import { createCarModelRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

const FORM_NAME = 'create';

export class CarModelCreate extends React.Component {
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
      <Card
        cardTitle="Create Car Model"
        cardSubtitle="Create a Model that you can associate Cars to."
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
                label="Model Name"
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
                name="makeID"
                label="Make Name"
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

CarModelCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  CarModelCreate,
);

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(createCarModelRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carModelCreate', reducer });
const withSaga = injectSaga({ key: 'carModelCreate', saga });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(CarModelCreate);

