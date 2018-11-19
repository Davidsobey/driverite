import React from 'react';
// import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FormControl from 'material-ui/Form/FormControl';

import TextField from '../../components/TextField/style';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';

import reducer from './reducer';
import saga from './saga';

import { createUser, loadAllAdRequest } from './actions';

import { StyledAppBar, StyledToolBar } from './style';
import StyledForm from '../../styles/global-styled-components';
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

const FORM_NAME = 'home_page';

// eslint-disable-next-line
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadAllAdRequest();
  }

  required = value => (value ? undefined : 'Required Field');

  defaultSubmit = (values) => {
    this.props.onSubmit(values.toJS());
  };

  loadData = () => {
    try {
      if (this.props.ads.count() > 0) {
        return this.props.ads;
      }
      return [];
    } catch (error) {
      if (this.props.ads.ads.length > 0) {
        return this.props.ads;
      }
      return [];
    }
  };

  isSubmit = (event) => {
    if (event.keyCode === 13) {
      this.props.submit();
    }
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <StyledAppBar className="posRel" position="relative">
          <StyledToolBar>
            <img src={drLogo} alt="Drive Rite" />
            <Button component={Link} color="inherit" to="/home">
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

        <Paper className="padding-short">
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
            Drive Rite was founded by a passionate group of individuals in the
            motoring industry. We are motivated by adding value to our clients;
            whether they be business or private. We strive for excellence in
            every sphere of our business and have built ourselves up on three
            core values of honesty, integrity and professionalism. With over 30
            years of experience in the industry we have a vast dealer partner
            network. They include all major brands and our dealers are
            accredited across all major bank panels. Our objective is to
            structure vehicle finance solutions in a manner that creates a
            free-drive period. We hope you enjoy your experience and #DriveRite
          </Typography>
        </Paper>
        <Typography
          className="orange-color center"
          variant="display1"
          gutterBottom
        >
          GALLERY
        </Typography>
        <Paper className="padding center">
          <div>
            {this.loadData().length > 0 ? (
              <Carousel data={this.loadData()} />
            ) : (
              <div />
            )}
          </div>
        </Paper>
        <Paper className="padding-short">
          <Typography
            className="orange-color center"
            variant="display1"
            gutterBottom
          >
            CONTACT US
          </Typography>
          <Card cardTitle="Please supply us with your contact details">
            <Form
              onSubmit={this.props.handleSubmit(this.defaultSubmit)}
              noValidate
              autoComplete="off"
            >
              <StyledForm>
                <FormControl fullWidth>
                  <Field
                    className="autoMargin"
                    name="name"
                    label="Name"
                    component={TextField}
                    InputProps={{
                      autoFocus: false,
                    }}
                    validate={[this.required]}
                  />
                  <Field
                    className="autoMargin"
                    name="email"
                    label="Email"
                    component={TextField}
                    InputProps={{
                      autoFocus: false,
                    }}
                    validate={[this.required]}
                  />
                  <Field
                    className="autoMargin"
                    name="phone"
                    label="Phone Number"
                    component={TextField}
                    InputProps={{
                      autoFocus: false,
                    }}
                    validate={[this.required]}
                  />
                </FormControl>
                <div className="end">
                  <Button
                    variant="raised"
                    color="secondary"
                    tabIndex={0}
                    className="margin"
                    type="submit"
                  >
                    Create
                  </Button>
                </div>
              </StyledForm>
            </Form>
          </Card>
        </Paper>
      </div>
    );
  };
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loadAllAdRequest: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  ads: state.get('ads'),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(createUser(values)),
    submit: () => dispatch(submit(FORM_NAME)),
    loadAllAdRequest: () => dispatch(loadAllAdRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'ads', reducer });
const withSaga = injectSaga({ key: 'ads', saga });

const withForm = reduxForm(
  {
    form: FORM_NAME,
  },
  HomePage,
);

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(HomePage);
