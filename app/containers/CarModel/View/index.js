/**
 *
 * CarModelView
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

import { loadAllCarModelsRequest } from './actions';
// import selectAllCarModelViews from './selectors';

// import reducer from './reducer';
// import saga from './saga';

// const header = ['CarModelView Team', 'CarModelView Area', 'Description', ''];

class CarModelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllCarModelsRequest();
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
    // this.props.dispatch(EmployeeActions.loadClient(editObj.id));
    this.props.history.push('/carModel/edit');
  };
  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Make',
        accessor: 'makeID',
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
          cardTitle="Car Models"
          cardSubtitle="List of Car Models that have been added to the Drive Rite Database."
        >
          <div>
            <div className="content end">
              <Button> Create New Model</Button>
            </div>
            <ReactTable
              columns={columns}
              data={this.props.carModel.carModels}
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
CarModelView.propTypes = {
  history: PropTypes.object,
  loadAllCarModelsRequest: PropTypes.func,
  // loadAllEmployees: PropTypes.func,
};

const mapStateToProps = state => ({
  carModel: state.get('carModel'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarModelsRequest: () => dispatch(loadAllCarModelsRequest()),
    // getRotation: (rotationID) => dispatch(getRotation(rotationID)),
    // deleteRotation: (rotationID) => dispatch(deleteRotation(rotationID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carModel', reducer });
const withSaga = injectSaga({ key: 'carModel', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CarModelView);
