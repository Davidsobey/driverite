/**
 *
 * CarCreate
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
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import StyledForm from '../../../styles/global-styled-components';
import Select from '../../../components/Select';
import LinearProgress from '../../../components/LinearProgress';

import { createCarRequest } from './actions';
import { loadAllCarModelsRequest } from '../../CarModel/View/actions';
import reducer from './reducer';
import saga from './saga';

const FORM_NAME = 'create';

export class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllCarModelsRequest();
  }

  state = {
    selectedFile: null,
  }

  required = value => (value ? undefined : 'Required Field');

  defaultSubmit = (values) => {
    const file = this.state.selectedFile;
    this.props.onSubmit(values.toJS(), file);
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  isSubmit = (event) => {
    if (event.keyCode === 13) {
      this.props.submit();
    }
  };

  render() {
    return (
      <Card
        cardTitle="Create Car"
        cardSubtitle="Create a car that you can associate to adverts and reviews"
      >
        <Form
          onSubmit={this.props.handleSubmit(this.defaultSubmit)}
          noValidate
          autoComplete="off"
        >
          <StyledForm>
            <FormControl fullWidth>
              <Field
                name="variant"
                label="Variant"
                component={TextField}
                InputProps={{
                  autoFocus: true,
                }}
                validate={[this.required]}
              />
            </FormControl>
            <FormControl fullWidth>
              <Field
                className=""
                name="mileage"
                label="Mileage"
                component={TextField}
                InputProps={{
                  autoFocus: false,
                }}
                validate={[this.required]}
              />
            </FormControl>
            <FormControl fullWidth>
              {this.props.modelsLoading ? (
                <div>
                  <LinearProgress color="secondary" />
                    Loading Car Models
                </div>
              ) : (
                <div>
                  <Field
                    name="model"
                    label="Model"
                    width="auto"
                    component={Select}
                    validate={[this.required]}
                  >
                    {(Array.isArray(this.props.models.models) ? this.props.models.models : [])
                      .map(model => (
                        <MenuItem value={model.id} key={model.id}>
                          {model.name}
                        </MenuItem>
                      ))}
                  </Field>
                </div>
              )}
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

CarCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loadAllCarModelsRequest: PropTypes.func,
  modelsLoading: PropTypes.bool,
  models: PropTypes.object,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  CarCreate,
);

const mapStateToProps = state => ({
  models: state.get('carCreate'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarModelsRequest: () => dispatch(loadAllCarModelsRequest()),
    onSubmit: values => dispatch(createCarRequest(values)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carCreate', reducer });
const withSaga = injectSaga({ key: 'carCreate', saga });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(CarCreate);
