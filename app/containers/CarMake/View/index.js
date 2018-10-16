/**
 *
 * CarMakeView
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

import {
  loadAllCarMakesRequest,
  loadCarMakeRequest,
  deleteCarMake,
} from './actions';

class CarMakeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllCarMakesRequest();
  }

  handleDelete = (obj) => {
    this.setState({ obj });
    this.child.handleOpen();
  };

  /* eslint-disable */
  confirmDelete = obj => () => {
    this.props.deleteCarMake(obj.id);
    this.child.handleClose();
  };

  /* eslint-disable */
  handleEdit = editObj => {
    this.props.loadCarMakeRequest(editObj.id);
  };
  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
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
          cardTitle="Car Makes"
          cardSubtitle="List of Car Makes that have been added to the Drive Rite Database."
        >
          <div>
            <div className="content end">
              <Button href="/make/create">Create New Make</Button>
            </div>
            <ReactTable
              columns={columns}
              data={this.props.carMake.carMakes}
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
CarMakeView.propTypes = {
  history: PropTypes.object,
  loadAllCarMakesRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  carMake: state.get('carMake'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllCarMakesRequest: () => dispatch(loadAllCarMakesRequest()),
    loadCarMakeRequest: makeID => dispatch(loadCarMakeRequest(makeID)),
    deleteCarMake: carMakeID => dispatch(deleteCarMake(carMakeID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carMake', reducer });
const withSaga = injectSaga({ key: 'carMake', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CarMakeView);
