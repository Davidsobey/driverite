/**
 *
 * AdvertCreate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { MenuItem } from 'material-ui';
import FormControl from 'material-ui/Form/FormControl';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import TextField from '../../../components/TextField/style';
import LinearProgress from '../../../components/LinearProgress/index';
import Select from '../../../components/Select/index';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import StyledForm from '../../../styles/global-styled-components';

import { createAdRequest } from './actions';
import reducer from './reducer';
import saga from './saga';
import { loadAllCarsRequest } from '../../Car/View/actions';


const FORM_NAME = 'create';

export class AdCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllCarsRequest();
  }

  required = value => (value ? undefined : 'Required Field');

  defaultSubmit = (values) => {
    this.props.onSubmit(values.toJS());
  };

  // get all cars to populate dropdown

  isSubmit = (event) => {
    if (event.keyCode === 13) {
      this.props.submit();
    }
  };

  render() {
    return (
      <Card
        cardTitle="Create Advert"
        cardSubtitle="Create an advert for a car"
      >
        <Form
          onSubmit={this.props.handleSubmit(this.defaultSubmit)}
          noValidate
          autoComplete="off"
        >
          <StyledForm>
            <FormControl fullWidth>
              {this.props.carsLoading ? (
                <div>
                  <LinearProgress color="secondary" />
                    Loading Cars
                </div>
              ) : (
                <div>
                  <Field
                    name="car"
                    label="Car"
                    component={Select}
                    validate={[this.required]}
                  >
                    {(Array.isArray(this.props.cars) ? this.props.cars : [])
                      .map(car => (
                        <MenuItem value={car.id} key={car.id}>
                          {car.variant}
                        </MenuItem>
                      ))}
                  </Field>
                </div>
              )}
              <Field
                className="autoMargin"
                name="price"
                label="Price"
                component={TextField}
                InputProps={{
                  autoFocus: false,
                }}
                validate={[this.required]}
              />
              <Field
                className="autoMargin"
                name="writeup"
                label="Write Up"
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

AdCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loadAllCarsRequest: PropTypes.func,
  carsLoading: PropTypes.bool,
  cars: PropTypes.array,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  AdCreate,
);

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarsRequest: () => dispatch(loadAllCarsRequest()),
    onSubmit: values => dispatch(createAdRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'adCreate', reducer });
const withSaga = injectSaga({ key: 'adCreate', saga });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(AdCreate);

