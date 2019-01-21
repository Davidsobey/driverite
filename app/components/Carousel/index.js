import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Button from '../../components/Button';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    width: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'transparent',
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  white: {
    color: 'white',
  },
  mobileStepper: {
    backgroundColor: 'transparent',
  },
  centera: {
    display: 'grid',
  },
  up: {
    marginTop: '-35px',
    color: 'orange',
    height: '100%',
  },
};

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme, ads } = this.props;
    const { activeStep } = this.state;
    const maxSteps = ads.ads.length;

    const MyLink = props => <Link to="/detail" {...props} />;
    const save = (id) => {
      localStorage.setItem('myData', id);
    };

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography className={classes.white}>
            {`${ads.ads[activeStep].car.model.make.name} ${
              ads.ads[activeStep].car.model.name
            } ${ads.ads[activeStep].car.variant}`}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {ads.ads.map((step, index) => (
            <div key={step.id} className={classes.centera}>
              {Math.abs(activeStep - index) <= 3 ? (
                <img
                  className={classes.img}
                  src={step.car.photoLinks[0]}
                  alt={step.car.variant}
                />
              ) : null}
              <Button
                component={MyLink}
                className={classes.up}
                color="inherit"
                onClick={save(step.id)}
              >
                View Car
              </Button>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
              className={classes.white}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
              className={classes.white}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  ads: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ads: state.get('ads'),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(
  withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper),
);
