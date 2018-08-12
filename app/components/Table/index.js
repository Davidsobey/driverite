import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MUITooltip from 'material-ui/Tooltip';

import { Actions, StyledEdit, StyledDelete } from './styles';
import CustomModal from '../Modal/index';
import Button from '../Button';

const styles = () => ({
  table: {
    minWidth: 700,
  },
});

function loadRows(obj, arr) {
  arr.push(obj.Name);
  arr.push(obj.Area);
  arr.push(obj.Description);

  return arr;
}

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: this.props.data[0] };
  }

  handleDelete = (obj) => {
    this.setState({ obj });
    this.child.handleOpen();
  };

  handleEdit(testObject) {
    this.props.handleEdit(testObject);
  }

  confirmDelete = obj => () => {
    this.props.handleDelete(obj.ID);
  };

  // handleEdit = (editObj) => {
  //   this.props.dispatch(editObj);
  // };

  render() {
    const { data, header, del, edit } = this.props;
    let count = 0;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {header.map(head => (
                <TableCell key={head}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((obj) => {
              const arr = [];
              loadRows(obj, arr);
              return (
                <TableRow key={obj.id}>
                  {arr.map((value) => {
                    count += 1;
                    if (typeof value === 'object') {
                      return (
                        <TableCell key={count}>
                          <Actions>
                            <Button
                              className="small-font"
                              color="primary"
                              onClick={value.onClick}
                            >
                              {value.message}
                            </Button>
                          </Actions>
                        </TableCell>
                      );
                    }
                    return <TableCell key={count}>{value}</TableCell>;
                  })}
                  {(del || edit) && (
                    <TableCell>
                      <Actions>
                        {edit && (
                          <MUITooltip
                            id="tooltip-edit"
                            title="Edit"
                            placement="top"
                          >
                            <IconButton
                              aria-label="Edit"
                              onClick={() => this.handleEdit(obj)}
                            >
                              <StyledEdit />
                            </IconButton>
                          </MUITooltip>
                        )}
                        {del && (
                          <MUITooltip
                            id="tooltip-delete"
                            title="Delete"
                            placement="top"
                          >
                            <IconButton
                              aria-label="Delete"
                              onClick={() => this.handleDelete(obj)}
                            >
                              <StyledDelete />
                            </IconButton>
                          </MUITooltip>
                        )}
                      </Actions>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
            <CustomModal
              del={del}
              obj={this.state && this.state.obj}
              /* eslint-disable no-return-assign */
              onRef={ref => (this.child = ref)}
              onClick={this.confirmDelete(this.state.obj)}
            />
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

BasicTable.propTypes = {
  data: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  del: PropTypes.string,
  edit: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default withStyles(styles)(BasicTable);
