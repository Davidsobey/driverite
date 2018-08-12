/**
 *
 * Rotation
 *
 */

import React from 'react';
import Button from 'material-ui/Button';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import RegularCard from '../../../components/Card';

// import selectAllRotations from './selectors';
// import { getRotation, getAllRotations, deleteRotation } from './actions';
// import reducer from './reducer';
// import saga from './saga';

// const header = ['Rotation Team', 'Rotation Area', 'Description', ''];

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
  // {
  //   Header: 'Edit/Delete',
  //   accessor: 'edit/delete',
  //   Filter: <div />,
  //   Cell: row => (
  //     <div>
  //       <Tooltip id="tooltip-delete" title="Edit">
  //         <IconButton
  //           aria-label="Edit"
  //           onClick={() => this.handleEdit(row.original)}
  //         >
  //           <StyledEdit />
  //         </IconButton>
  //       </Tooltip>
  //       <Tooltip id="tooltip-delete" title="Delete">
  //         <IconButton
  //           aria-label="Delete"
  //           onClick={() => this.handleDelete(row.original)}
  //         >
  //           <StyledDelete />
  //         </IconButton>
  //       </Tooltip>
  //     </div>
  //   ),
  // },
];
function Rotation() {
  return (
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
  );
}

export default Rotation;
