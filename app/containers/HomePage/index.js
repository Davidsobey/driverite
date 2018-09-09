import React from 'react';
// import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';

import { StyledAppBar, StyledToolBar } from './style';
import drLogo from '../../images/drLogo.png';
import drFullLogo from '../../images/logo.png';
import vid from '../../images/Spedometer.mp4';

const styles = {
  root: {
    flexGrow: 1,
    padding: 20,
  },
  flex: {
    flexGrow: 1,
  },
  vid: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'blur(8px)',
  },
  myVideo: {
    position: 'absolute',
    bottom: '-80px',
    right: '0px',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-1000',
    overflow: 'hidden',
    zoom: '60%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: '20px',
  },
};

// eslint-disable-next-line
class SimpleAppBar extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <StyledAppBar className="posRel" position="relative">
          <StyledToolBar>
            <img src={drLogo} alt="Drive Rite" />
            <Button component={Link} color="inherit" to="/login">
              Login
            </Button>
          </StyledToolBar>
        </StyledAppBar>
        <div className="pad120">
          <div className="content posRel center">
            <img className="img60" src={drFullLogo} alt="Drive Rite" />
          </div>
          <div className={classes.vid}>
            {/* eslint-disable-line */}
            <video className={classes.myVideo} autoPlay muted loop id="myVideo">
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </div>

        <Paper className="padding">
          <Typography
            className="orange-color center"
            variant="display1"
            gutterBottom
          >
            ABOUT US
          </Typography>
          <Typography
            className="white-color center"
            variant="body2"
            gutterBottom
          >
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Paper>
        <Paper className="padding">
          <Typography
            className="orange-color center"
            variant="display1"
            gutterBottom
          >
            GALLERY
          </Typography>
          <Typography
            className="white-color center"
            variant="body2"
            gutterBottom
          >
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Paper>
        <Paper className="padding">
          <Typography
            className="orange-color center"
            variant="display1"
            gutterBottom
          >
            CONTACT US
          </Typography>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </Paper>
      </div>
    );
  };
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
