/**
 *
 * AdView
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
import { StyledDelete, StyledEdit } from '../../../components/Button/StyledButton';
import RegularCard from '../../../components/Card';
import CustomModal from '../../../components/Modal';
import { loadAllAdsRequest } from './actions';

// import selectAllCarViews from './selectors';

// import reducer from './reducer';
// import saga from './saga';

// const header = ['CarView Team', 'CarView Area', 'Description', ''];

class AdView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: {} };
    this.props.loadAllAdsRequest();
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
    this.props.history.push('/advert/edit');
  };
  render() {
    const columns = [
      {
        Header: 'Make',
        accessor: 'car.model.make.name',
      },
      {
        Header: 'Model',
        accessor: 'car.model.name',
      },
      {
        Header: 'Variant',
        accessor: 'car.variant',
      },
      {
        Header: 'Mileage',
        accessor: 'car.mileage',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Write Up',
        accessor: 'writeUp',
      },  
      {
        PhotoLink: 'Photo',
        accessor: 'photoPath',
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
          cardTitle="Ads"
          cardSubtitle="List of Ads that have been added to the Drive Rite Database."
        >
          <div>
            <div className="content end">
              <Button href="/advert/create"> Create New Advertisement</Button>
            </div>
            <br />
            <ReactTable
              columns={columns}
              data={this.props.ad.ads}
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
AdView.propTypes = {
  history: PropTypes.object,
  loadAllAdsRequest: PropTypes.func,
  // loadAllEmployees: PropTypes.func,
};

const mapStateToProps = state => ({
  ad: state.get('ads'),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAllAdsRequest: () => dispatch(loadAllAdsRequest()),
    // getRotation: (rotationID) => dispatch(getRotation(rotationID)),
    // deleteRotation: (rotationID) => dispatch(deleteRotation(rotationID)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'ads', reducer });
const withSaga = injectSaga({ key: 'ads', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdView);
