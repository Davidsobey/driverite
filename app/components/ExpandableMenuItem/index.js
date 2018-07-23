import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemIcon } from 'material-ui/List';

import { StyledListItemText } from './styles';

/* eslint-disable react/prefer-stateless-function */
class ExpandableMenuItem extends React.Component {
  render() {
    return (
      // TODO: Move to config/prop driven setup
      <div>
        <List>
          {this.props.menuItems.map(menuItem => (
            <Link key={menuItem.id} to={menuItem.route}>
              <ListItem button>
                <ListItemIcon>
                  <menuItem.icon />
                </ListItemIcon>
                <StyledListItemText inset primary={menuItem.description} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

ExpandableMenuItem.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default ExpandableMenuItem;
