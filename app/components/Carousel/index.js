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
    const { classes, theme, ads } = this.props;
    const { activeStep } = this.state;
    const maxSteps = ads.ads.length;

    const MyLink = props => (
      <Link
        to={{
          pathname: '/page',
          data: props, // your data array of objects
        }}
      />
    );

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
            <div key={step.car.variant} className={classes.centera}>
              {Math.abs(activeStep - index) <= 3 ? (
                <img
                  className={classes.img}
                  src={cars[activeStep].imgPath}
                  alt={step.car.variant}
                />
              ) : null}
              <Button
                component={MyLink(step.car.id)}
                className={classes.up}
                color="inherit"
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
