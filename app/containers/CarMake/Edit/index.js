/**
 *
 * EditCarMake
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import FormControl from 'material-ui/Form/FormControl';

import RegularCard from '../../../components/Card';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField/style';
import StyledForm from '../../../styles/global-styled-components';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import { makeSelectEdit } from './actions';

import reducer from './reducer';
import saga from './saga';

// const required = value => (value ? undefined : 'Required');

export class CarMakeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = (values) => {
    this.props.makeSelectEdit(values);
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
                  className="autoMargin"
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
  makeSelectEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const CarMakeEdited = reduxForm({
  form: 'carMakeEdit', // a unique identifier for this form
})(CarMakeEdit);

const mapStateToProps = state => ({
  carMake: state.get('carMake'),
});

function mapDispatchToProps(dispatch) {
  return {
    makeSelectEdit: values => dispatch(makeSelectEdit(values)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carMake', reducer });
const withSaga = injectSaga({ key: 'carMake', saga });

// You have to connect() to any reducers that you wish to connect to yourself
const FormState = connect(
  compose(
    state => ({
      initialValues: state.carMake.carMake, // pull initial values from reducer
    }),
    withReducer,
    withSaga,
    withConnect,
  ),
)(CarMakeEdited);

export default FormState;
