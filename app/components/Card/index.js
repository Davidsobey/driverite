import React from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from 'material-ui';
import PropTypes from 'prop-types';

import regularCardStyle from '../../styles/jss/material-dashboard-react/regularCardStyle';

function RegularCard({ ...props }) {
  const { classes, cardTitle, cardSubtitle, children, footer } = props;

  return (
    <div className="center">
      <Card className={classes.card}>
        <CardHeader title={cardTitle} subheader={cardSubtitle} />
        <CardContent>{children}</CardContent>
        {footer !== undefined ? (
          <CardActions className={classes.cardActions}>{footer}</CardActions>
        ) : null}
      </Card>
    </div>
  );
}

RegularCard.defaultProps = {
  headerColor: 'blue',
};

RegularCard.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(['orange', 'green', 'red', 'blue', 'purple']),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.object,
};

export default withStyles(regularCardStyle)(RegularCard);
