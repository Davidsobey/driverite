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
import { editCarMakeRequest } from './actions';

import reducer from './reducer';
import saga from './saga';

// const required = value => (value ? undefined : 'Required');
const FORM_NAME = 'Edit';
export class CarMakeEdit extends React.Component {
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
          cardTitle="Car Makes"
          cardSubtitle="List of Car Makes that have been added to the Drive Rite Database."
        >
          <Form
            onSubmit={this.props.handleSubmit(this.defaultSubmit)}
            noValidate
            autoComplete="off"
          >
            <StyledForm>
              <FormControl fullWidth>
                <Field
                  name="name"
                  label="Make Name"
                  component={TextField}
                  InputProps={{
                    autoFocus: true,
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

CarMakeEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  submit: PropTypes.func,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  CarMakeEdit,
);

const mapStateToProps = state => ({
  carMake: state.get('carMake'),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(editCarMakeRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carMakeEdit', reducer });
const withSaga = injectSaga({ key: 'carMakeEdit', saga });

// You have to connect() to any reducers that you wish to connect to yourself
export default compose(
  connect(
    state => ({
      initialValues: state.toJS().carMake ? state.toJS().carMake.carMake : '',
    }),
    mapDispatchToProps,
  ),
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(CarMakeEdit);
