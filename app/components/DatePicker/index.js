import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import Fade from 'material-ui/transitions/Fade';
import InfiniteCalendar from 'react-infinite-calendar';
import { Field } from 'redux-form/immutable';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import TextField from '../TextField/style';

export class DatePicker extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      date: moment(this.props.defaultDate) || undefined,
      dialogOpen: false,
    };
  }

  selectDateAndCloseDialog = (e) => {
    const date = moment(e);
    this.setState({
      date,
      dialogOpen: false,
    });
  };

  openDialog = () => {
    this.setState({ dialogOpen: true });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  /* eslint-enable no-param-reassign */
  render() {
    const { name, label, readOnly } = this.props;
    const { date } = this.state;
    return (
      <div>
        <Field
          name={name}
          label={label}
          onClick={readOnly ? undefined : this.openDialog}
          component={TextField}
          disabled={readOnly}
          inputProps={{
            value: date ? date.format('DD MMM YYYY') : undefined,
          }}
          normalize={value =>
            (value ? moment(value, 'DD MMM YYYY').valueOf() : undefined)
          }
        />
        <Dialog
          open={this.state.dialogOpen}
          transition={Fade}
          keepMounted
          onClose={this.closeDialog}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {'Select the date'}
          </DialogTitle>
          <DialogContent>
            <InfiniteCalendar
              onSelect={this.selectDateAndCloseDialog}
              width={550}
              disabled={readOnly}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

DatePicker.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  readOnly: propTypes.bool,
  defaultDate: propTypes.number,
};

export default DatePicker;
