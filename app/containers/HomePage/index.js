import React from 'react';
// import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import { StyledAppBar, StyledToolBar } from './style';
import Logo from '../../images/logo2.png';

const styles = {
  root: {
    flexGrow: 1,
    padding: 20,
  },
  flex: {
    flexGrow: 1,
  },
};

// eslint-disable-next-line
class SimpleAppBar extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <StyledAppBar position="static">
          <StyledToolBar>
            <img src={Logo} alt="Drive Rite" />
            <Button component={Link} color="inherit" to="/login">
              Login
            </Button>
          </StyledToolBar>
        </StyledAppBar>
      </div>
    );
  };
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
