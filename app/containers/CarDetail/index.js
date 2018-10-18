import React from 'react';
// import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';
import { compose } from 'redux';

import Button from '../../components/Button';

import { StyledAppBar, StyledToolBar } from './style';
import drLogo from '../../images/drLogo.png';

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
    minHeight: '280px',
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
class HomePage extends React.Component {
  required = value => (value ? undefined : 'Required Field');

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <StyledAppBar className="posRel" position="relative">
          <StyledToolBar>
            <Button component={Link} color="inherit" to="/home">
              <img src={drLogo} alt="Drive Rite" />
            </Button>
          </StyledToolBar>
        </StyledAppBar>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Paper className="padding">
              <Typography
                className="orange-color center"
                variant="display1"
                gutterBottom
              >
                Car Details
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                carID
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                1{' '}
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                responseIDs
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                null{' '}
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                writeUp
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                This is an advertisement test
              </Typography>

              <Typography className="orange-color" variant="title" gutterBottom>
                price
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                100000{' '}
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                photoPath
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                link{' '}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="padding">
              <Typography
                className="orange-color"
                variant="display1"
                gutterBottom
              >
                GALLERY
              </Typography>
              <Typography className="white-color" variant="body2" gutterBottom>
                Image
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(HomePage);
