/**
 *
 * CarView
 *
 */

import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Tooltip from 'material-ui/Tooltip';

import IconButton from '../../../components/Button/IconButton';
import {
  StyledDelete,
  StyledEdit,
} from '../../../components/Button/StyledButton';
import RegularCard from '../../../components/Card';
import CustomModal from '../../../components/Modal';

// import selectAllCarViews from './selectors';
// import { getCarView, getAllCarViews, deleteCarView } from './actions';
// import reducer from './reducer';
// import saga from './saga';

// const header = ['CarView Team', 'CarView Area', 'Description', ''];

class CarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    // this.props.dispatch(ClientActions.getAll());
  }

  handleDelete = (obj) => {
    this.setState({ obj });
    this.child.handleOpen();
  };

  confirmDelete = obj => () => {
    // this.props.dispatch(ClientActions.deleteClient(obj.id));
    this.child.handleClose();
  };

  handleEdit = (editObj) => {
    // this.props.dispatch(ClientActions.loadClient(editObj.id));
    this.props.history.push('/car/edit');
  };
  render() {
    const datas = [
      { name: 1, description: 'a', cpdHours: 'b' },
      { name: 2, description: 'a', cpdHours: 'b' },
    ];

    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'CPD Hours',
        accessor: 'cpdHours',
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
              <Button> Create New Car</Button>
            </div>
            <ReactTable
              columns={columns}
              data={datas}
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
};

export default CarView;
