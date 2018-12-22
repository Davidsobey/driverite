import React from 'react';
import PropTypes from 'prop-types';
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

const cars = [
  {
    label: 'Mustgang',
    imgPath:
      'https://www.cytokines2015.com/wp-content/uploads/2018/03/cars-J.jpeg',
  },
  {
    label: 'Ferrari SUV',
    imgPath:
      'https://cdn.images.express.co.uk/img/dynamic/24/590x/Ferrari-SUV-new-car-864627.jpg',
  },
  {
    label: 'Mustang',
    imgPath:
      'https://img-ik.cars.co.za/images/2018/10/Mustang%20Bullitt/tr:n-news_large/MustangBullitt.jpg',
  },
  {
    label: 'Ferrari',
    imgPath:
      'https://dmi3w0goirzgw.cloudfront.net/gallery-images/840x560/402000/800/402876.jpg',
  },
];

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
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = cars.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography className={classes.white}>
            {cars[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {cars.map((step, index) => (
            <div key={step.label} className={classes.centera}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
              <Button
                component={Link}
                className={classes.up}
                color="inherit"
                to="/detail"
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
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper,
);
