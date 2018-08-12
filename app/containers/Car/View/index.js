/**
 *
 * Rotation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CircularProgress from 'material-ui/Progress/CircularProgress';

import { injectSaga, injectReducer } from 'utils';

import Table from '../../../components/Table/index';
import RegularCard from '../../../components/Card';

// import selectAllRotations from './selectors';
import { getRotation, getAllRotations, deleteRotation } from './actions';
import reducer from './reducer';
import saga from './saga';

const header = ['Rotation Team', 'Rotation Area', 'Description', ''];

export class Rotation extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getAllRotations();
  }

  handleEdit(rotationID) {
    this.props.getRotation(rotationID);
  }

  handleDelete(rotationID) {
    this.props.deleteRotation(rotationID);
  }

  render() {
    const { rotations } = this.props;

    return (
      <RegularCard
        cardTitle="Rotations"
        cardSubtitle="List of rotations that are currently available."
      >
        <div className="fullHeight">
          {Array.isArray(rotations.rotations) ? (
            <Table
              header={header}
              data={rotations.rotations}
              del="Rotation"
              edit="/rotation/edit"
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          ) : (
            <div className="center">
              <CircularProgress color="secondary" />
            </div>
          )}
        </div>
      </RegularCard>
    );
  }
}

const withForm = reduxForm(
  {
    form: 'homePage',
  },
  Rotation,
);

Rotation.propTypes = {
  rotations: PropTypes.object,
  getRotation: PropTypes.func,
  getAllRotations: PropTypes.func,
  deleteRotation: PropTypes.func,
};

const mapStateToProps = state => ({
  rotations: state.get('rotations'),
});

function mapDispatchToProps(dispatch) {
  return {
    getAllRotations: () => dispatch(getAllRotations()),
    getRotation: rotationID => dispatch(getRotation(rotationID)),
    deleteRotation: rotationID => dispatch(deleteRotation(rotationID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'rotations', reducer });
const withSaga = injectSaga({ key: 'rotations', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withForm,
)(Rotation);
