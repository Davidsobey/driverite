import React from 'react';
import PropTypes from 'prop-types';
import { MenuList } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import ExpandableMenuItem from '../ExpandableMenuItem/index';
import Logo from '../../images/logo.png';

const DrawerMenu = ({ open, classes, menuItems }) => (
  <Drawer variant="persistent" open={open}>
    <div className={classes.drawerInner}>
      <div className={classes.drawerHeader}>
        <Link className="drawerLogo" to="/home">
          <img src={Logo} className="drawerLogo" alt="Standard Bank" />
        </Link>
      </div>
      <Divider />
      <MenuList>
        <ExpandableMenuItem menuItems={menuItems} />
      </MenuList>
    </div>
  </Drawer>
);

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  menuItems: PropTypes.array,
};

export default DrawerMenu;
