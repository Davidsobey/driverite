import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from 'material-ui';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Menu from 'material-ui/Menu';
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew';

import AppBar from './style';
import Logo from '../../images/logo2.png';

const DashboardHeader = ({
  classes,
  anchorEl,
  userMenuOpen,
  handleDrawer,
  handleClose,
  handleLogout,
}) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar className={classes.iconRight}>
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.flex}
          variant="title"
          color="inherit"
          noWrap
        />
      </div>
      <Link className="drawerLogo" to="/home">
        <img src={Logo} className="drawerLogo" alt="" />
      </Link>
      <div>
        <IconButton
          className="alignRight"
          color="inherit"
          onClick={handleLogout}
        >
          <PowerSettingsNew />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={userMenuOpen}
          onClose={handleClose}
        />
      </div>
    </Toolbar>
  </AppBar>
);

DashboardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  anchorEl: PropTypes.string,
  userMenuOpen: PropTypes.bool,
  handleDrawer: PropTypes.func,
  handleClose: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default DashboardHeader;
