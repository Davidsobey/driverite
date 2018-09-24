/**
 *
 * CarView
 *
 */

import React from 'react';
import { compose } from 'redux';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Tooltip from 'material-ui/Tooltip';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import reducer from './reducer';
import saga from './saga';

import IconButton from '../../../components/Button/IconButton';
import {
  StyledDelete,
  StyledEdit,
} from '../../../components/Button/StyledButton';
import RegularCard from '../../../components/Card';
import CustomModal from '../../../components/Modal';

import { loadAllCarsRequest, loadCarRequest } from './actions';

class CarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllCarsRequest();
  }

  handleDelete = (obj) => {
    this.setState({ obj });
    this.child.handleOpen();
  };

  /* eslint-disable */
  confirmDelete = obj => () => {
    // this.props.dispatch(EmployeeActions.deleteClient(obj.id));
    this.child.handleClose();
  };

  /* eslint-disable */
  handleEdit = editObj => {
    this.props.loadCarRequest(editObj.id);
  };

  render() {
    const columns = [
      {
        Header: 'Variant',
        accessor: 'variant',
      },
      {
        Header: 'Mileage',
        accessor: 'mileage',
      },
      {
        Header: 'Model',
        accessor: 'model.name',
      },
      {
        Header: 'Edit/Delete',
        accessor: 'edit/delete',
        Filter: <div />,
        Cell: row => (
          <div>
            <Tooltip id="tooltip-delete" title="Edit">
              <IconButton
                aria-label="Edit"
                onClick={() => this.handleEdit(row.original)}
              >
                <StyledEdit />
              </IconButton>
            </Tooltip>
            <Tooltip id="tooltip-delete" title="Delete">
              <IconButton
                aria-label="Delete"
                onClick={() => this.handleDelete(row.original)}
              >
                <StyledDelete />
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <div>
        <RegularCard
          cardTitle="Cars"
          cardSubtitle="List of Cars that have been added to the Drive Rite Database."
        >
          <div>
            <div className="content end">
              <Button href="/car/create"> Create New Car</Button>
            </div>
            <ReactTable
              columns={columns}
              data={this.props.car.cars}
              filterable
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
        </RegularCard>
        <CustomModal
          obj={this.state && this.state.obj}
          /* eslint-disable no-return-assign */
          onRef={ref => (this.child = ref)}
          onClick={this.confirmDelete(this.state.obj)}
        />
      </div>
    );
  }
}
CarView.propTypes = {
  history: PropTypes.object,
  loadAllCarsRequest: PropTypes.func,
  // loadAllEmployees: PropTypes.func,
};

const mapStateToProps = state => ({
  car: state.get('car'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarsRequest: () => dispatch(loadAllCarsRequest()),
    loadCarRequest: carID => dispatch(loadCarRequest(carID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'car', reducer });
const withSaga = injectSaga({ key: 'car', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CarView);
