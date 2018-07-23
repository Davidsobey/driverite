import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ErrorIcon from 'material-ui-icons/Error';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
  },
  background: {
    backgroundColor: '#0033aa',
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
  wrapper: {
    paddingTop: 30,
    paddingLeft: 30,
    zIndex: 1000,
  },
});

class Popover extends React.Component {
  state = {
    anchorEl: null,
    popperOpen: false,
  };

  handlePopoverOpen = (event) => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePopperOpen = () => {
    this.setState({ popperOpen: true });
  };

  handlePopperClose = () => {
    this.setState({ popperOpen: false });
  };

  render() {
    const { classes, children } = this.props;
    const { popperOpen } = this.state;

    return (
      <div className={classes.wrapper}>
        <Manager>
          <Target>
            <Avatar
              className={classes.background}
              aria-describedby="react-popper-tooltip"
              onMouseOver={this.handlePopperOpen}
              onFocus={this.handlePopperOpen}
              onMouseOut={this.handlePopperClose}
              onBlur={this.handlePopperClose}
            >
              <ErrorIcon />
            </Avatar>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={popperOpen}
            className={!popperOpen ? classes.popperClose : ''}
          >
            <Grow in={popperOpen} style={{ transformOrigin: '0 0 0' }}>
              <Paper
                id="react-popper-tooltip"
                className={classes.paper}
                role="tooltip"
                aria-hidden={!popperOpen}
                elevation={8}
              >
                <Typography>{children}</Typography>
              </Paper>
            </Grow>
          </Popper>
        </Manager>
      </div>
    );
  }
}

Popover.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withStyles(styles)(Popover);
