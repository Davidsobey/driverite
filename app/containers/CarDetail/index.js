import React from 'react';
// import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';
import { compose } from 'redux';
import { connect } from 'react-redux';

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
    const { classes, ads } = this.props;
    const id = localStorage.getItem('myData');

    return (
      <div className={classes.root}>
        <StyledAppBar className="posRel" position="relative">
          <StyledToolBar>
            <Button component={Link} color="inherit" to="/">
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
                Car Make
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                {ads.ads[id].car.model.make.name}
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                Model
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                {ads.ads[id].car.model.name}
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                Variant
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                {ads.ads[id].car.variant}
              </Typography>
              <Typography className="orange-color" variant="title" gutterBottom>
                Write Up
              </Typography>
              <Typography className="white-color" variant="body1" gutterBottom>
                {ads.ads[id].writeUp}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="padding-short">
              <Typography
                className="orange-color"
                variant="display1"
                gutterBottom
              >
                GALLERY
              </Typography>
              {Array.isArray(ads.ads[id].car.photoLinks) ? (
                ads.ads[id].car.photoLinks.map((obj, index) => (
                  <img src={obj} id={index} className="detailImg" alt="" />
                ))
              ) : (
                <div>No Photos</div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  ads: state.get('ads'),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  ads: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withConnect,
)(HomePage);
