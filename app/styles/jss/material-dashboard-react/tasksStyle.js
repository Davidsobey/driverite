// ##############################
// // // Tasks styles
// #############################
import MUIToolTip from 'material-ui/Tooltip';
import styled from 'styled-components';

import {
  defaultFont,
  primaryColor,
  dangerColor,
} from '../material-dashboard-react';

const tasksStyle = {
  table: {
    marginBottom: '0',
    overflow: 'visible',
  },
  tableRow: {
    position: 'relative',
    borderBottom: '1px solid #dddddd',
  },
  tableActions: {
    display: 'flex',
    border: 'none',
    padding: '12px 8px !important',
    verticalAlign: 'middle',
  },
  tableCell: {
    ...defaultFont,
    padding: '8px',
    verticalAlign: 'middle',
    border: 'none',
    lineHeight: '1.42857143',
    fontSize: '14px',
  },
  tableActionButton: {
    width: '27px',
    height: '27px',
  },
  tableActionButtonIcon: {
    width: '17px',
    height: '17px',
  },
  edit: {
    backgroundColor: 'transparent',
    color: primaryColor,
    boxShadow: 'none',
  },
  close: {
    backgroundColor: 'transparent',
    color: dangerColor,
    boxShadow: 'none',
  },
  checked: {
    color: primaryColor,
  },
  checkedIcon: {
    width: '20px',
    height: '20px',
    border: '1px solid rgba(0, 0, 0, .54)',
    borderRadius: '3px',
  },
  uncheckedIcon: {
    width: '0px',
    height: '0px',
    padding: '10px',
    border: '1px solid rgba(0, 0, 0, .54)',
    borderRadius: '3px',
  },
};

export const Tooltip = styled(MUIToolTip)`
  &&:hover {
    border-radius: 40px;
    background-color: #dedede;
  }
`;
export default tasksStyle;
