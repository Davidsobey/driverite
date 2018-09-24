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
import { editCarModelRequest } from './actions';

import reducer from './reducer';
import saga from './saga';

// const required = value => (value ? undefined : 'Required');
const FORM_NAME = 'Edit';
export class CarModelEdit extends React.Component {
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
          cardTitle="Car Model"
          cardSubtitle="Update a Models details in the Drive Rite Database."
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
        </RegularCard>
      </div>
    );
  }
}

CarModelEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  submit: PropTypes.func,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  CarModelEdit,
);

const mapStateToProps = state => ({
  carModel: state.get('carModel'),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(editCarModelRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carModelEdit', reducer });
const withSaga = injectSaga({ key: 'carModelEdit', saga });

// You have to connect() to any reducers that you wish to connect to yourself
export default compose(
  connect(
    state => ({
      initialValues: state.toJS().carModel ? state.toJS().carModel.carModel : '',
    }),
    mapDispatchToProps,
  ),
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(CarModelEdit);
