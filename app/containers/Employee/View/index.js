/**
 *
 * EmployeeView
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

import { loadAllEmployees, loadEmployeeRequest } from './actions';
// import selectAllCarViews from './selectors';

// import reducer from './reducer';
// import saga from './saga';

// const header = ['CarView Team', 'CarView Area', 'Description', ''];

class EmployeeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllEmployees();
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
    this.props.loadEmployeeRequest(editObj.id);
  };
  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
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
          cardTitle="Employee"
          cardSubtitle="List of Employees that have been added to the Drive Rite Database."
        >
          <div>
            <div className="content end">
              <Button href="/employee/create"> Create New Employee</Button>
            </div>
            <ReactTable
              columns={columns}
              data={this.props.employees.employees}
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
EmployeeView.propTypes = {
  history: PropTypes.object,
  loadAllEmployees: PropTypes.func,
};

const mapStateToProps = state => ({
  employees: state.get('employees'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllEmployees: () => dispatch(loadAllEmployees()),
    loadEmployeeRequest: makeID => dispatch(loadEmployeeRequest(makeID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'employees', reducer });
const withSaga = injectSaga({ key: 'employees', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EmployeeView);
