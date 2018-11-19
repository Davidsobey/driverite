/**
 *
 * CarPhotoCreate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FilePond, File, registerPlugin } from 'react-filepond';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { MenuItem } from 'material-ui';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FormControl from 'material-ui/Form/FormControl';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import Button from '../../../components/Button';
import Card from '../../../components/Card';
import StyledForm from '../../../styles/global-styled-components';
import Select from '../../../components/Select';
import LinearProgress from '../../../components/LinearProgress';

import { createCarPhotoRequest } from './actions';
import { loadAllCarsRequest } from '../../Car/View/actions';
import reducer from './reducer';
import saga from './saga';

const FORM_NAME = 'create';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export class CarPhotoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {}, files: [] };
    this.props.loadAllCarsRequest();
  }

  state = {
    selectedFile: null,
    files: [],
  }

  onaddfile = (error, file) => {
    this.state.files.push(file.file);
  }

  onremovefile = (file) => {
    this.state.files.pop(file.file);
  }

  required = value => (value ? undefined : 'Required Field');

  defaultSubmit = (values) => {
    this.props.onSubmit(values.toJS(), this.state.files);
  };

  handleInit() {
    // eslint-disable-next-line no-console
    console.log('FilePond instance has initialised', this.pond);
  }

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
        cardTitle="Upload Car Photo"
        cardSubtitle="Upload a photo for a car"
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
                    class="autoMargin"
                    name="car"
                    label="Car"
                    width="auto"
                    component={Select}
                    validate={[this.required]}
                  >
                    {(Array.isArray(this.props.cars.cars) ? this.props.cars.cars : [])
                      .map(car => (
                        <MenuItem value={car.id} key={car.id}>
                          {`${car.model.make.name} ${car.model.name} ${car.variant}`}
                        </MenuItem>
                      ))}
                  </Field>
                </div>
              )}
            </FormControl>
            <br />
            <FormControl fullWidth>
              <FilePond
                // eslint-disable-next-line no-return-assign
                ref={ref => this.pond = ref}
                allowMultiple
                maxFiles={6}
                required
                name="Car Photos"
                dropValidation
                instantUpload={false}
                oninit={() => this.handleInit()}
                onaddfile={(error, file) => this.onaddfile(error, file)}
                onremovefile={file => this.onremovefile(file)}
              >
                {/* Update current files */}
                {this.state.files.map(file => (
                  <File key={file} src={file} origin="local" />
                ))}
              </FilePond>
            </FormControl>
            <div className="end">
              <Button
                variant="raised"
                color="primary"
                tabIndex={0}
                className="margin"
                type="submit"
              >
                Upload Photos
              </Button>
            </div>
          </StyledForm>
        </Form>
      </Card>
    );
  }
}

CarPhotoCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loadAllCarsRequest: PropTypes.func,
  carsLoading: PropTypes.bool,
  cars: PropTypes.object,
};

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  CarPhotoCreate,
);

const mapStateToProps = state => ({
  cars: state.get('carPhotoCreate'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarsRequest: () => dispatch(loadAllCarsRequest()),
    onSubmit: (values, photos) => dispatch(createCarPhotoRequest(values, photos)),
    submit: () => dispatch(submit(FORM_NAME)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carPhotoCreate', reducer });
const withSaga = injectSaga({ key: 'carPhotoCreate', saga });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
)(CarPhotoCreate);
