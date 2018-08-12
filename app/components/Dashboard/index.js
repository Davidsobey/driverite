/**
 *
 * Dashboard
 *
 */

// 3rd Party
import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withStyles } from 'material-ui/styles';
import HomeIcon from 'material-ui-icons/Home';
import CarIcon from 'material-ui-icons/DriveEta';
import FaceIcon from 'material-ui-icons/Face';
import ReviewIcon from 'material-ui-icons/RateReview';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';

import reducer from '../User/reducer';
import saga from '../User/saga';

import * as ROUTES from '../../containers/App/routes';
import { logout as logoutUser } from '../../components/User/actions';

import DashboardHeader from './DashboardHeader';
import DrawerMenu from './DrawerMenu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: '0px',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    zIndex: 9999,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {},
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    height: '100%',
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '12.2px 8px',
    color: 'white',
    fontSize: '25px',
    backgroundColor: '#000000',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    marginTop: 64,
    paddingLeft: 264,
    transition: 'padding 50ms ease',
  },
  contentMenuOpen: {
    paddingLeft: 264,
  },
  contentMenuClosed: {
    paddingLeft: 24,
  },
  iconRight: {
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const routes = [
  { id: 1, description: 'Home', icon: HomeIcon, route: ROUTES.HOME },
  { id: 2, description: 'User', icon: FaceIcon, route: ROUTES.USERLIST },
  { id: 3, description: 'Car', icon: CarIcon, route: ROUTES.CARLIST },
  { id: 4, description: 'Advert/Review', icon: ReviewIcon, route: ROUTES.REVIEWLIST },
];
export class Dashboard extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    open: true,
    anchorEl: null,
  };

  handleDrawer = () => {
    if (!this.state.open) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  handleMenu = () => {
    this.props.logout();
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.handleClose();
    this.props.logout();
  };

  render() {
    const { classes } = this.props;
    const children = this.props.children;
    const { anchorEl, open } = this.state;
    const userMenuOpen = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of Dashboard" />
        </Helmet>
        <div className={classes.appFrame}>
          <DashboardHeader
            classes={classes}
            userMenuOpen={userMenuOpen}
            anchorEl={anchorEl}
            open={open}
            handleDrawer={this.handleDrawer}
            handleMenu={this.handleMenu}
            handleClose={this.handleClose}
            handleLogout={this.handleLogout}
          />
          <DrawerMenu menuItems={routes} classes={classes} open={open} />
          <main
            className={`${classes.content} ${
              open ? classes.contentMenuOpen : classes.contentMenuClosed
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  logout: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logout: () => dispatch(logoutUser()),
  };
}

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withSaga,
  withReducer,
  withStyles(styles, { withTheme: true }),
)(Dashboard);
