/**
 *
 * CarModelCreate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { MenuItem, LinearProgress } from 'material-ui';
import FormControl from 'material-ui/Form/FormControl';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import TextField from '../../../components/TextField/style';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import StyledForm from '../../../styles/global-styled-components';
import Select from '../../../components/Select';

import { createCarModelRequest } from './actions';
import reducer from './reducer';
import saga from './saga';
import { loadAllCarMakesRequest } from '../../CarMake/View/actions';

const FORM_NAME = 'create';

export class CarModelCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllCarMakesRequest();
  }

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
              {this.props.makesLoading ? (
                <div>
                  <LinearProgress color="secondary" />
                    Loading Car Makes
                </div>
              ) : (
                <div>
                  <Field
                    name="make"
                    label="Make"
                    width="auto"
                    component={Select}
                    validate={[this.required]}
                  >
                    {(Array.isArray(this.props.makes.makes) ? this.props.makes.makes : [])
                      .map(make => (
                        <MenuItem value={make.id} key={make.id}>
                          {make.name}
                        </MenuItem>
                      ))}
                  </Field>
                </div>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Field
                name="ModelName"
                label="Model Name"
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
  loadAllCarMakesRequest: PropTypes.func,
  makesLoading: PropTypes.bool,
  makes: PropTypes.object,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  CarModelCreate,
);

const mapStateToProps = state => ({
  makes: state.get('carModelCreate'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarMakesRequest: () => dispatch(loadAllCarMakesRequest()),
    onSubmit: values => dispatch(createCarModelRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  mapStateToProps,
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

