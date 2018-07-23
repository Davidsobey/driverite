/**
 * App.js
 *
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { compose } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clear } from '../../components/Alert/actions';
import injectReducer from '../../utils/injectReducer';
import alertReducer from '../../components/Alert/reducer';

class Alert extends React.Component {
  handleClose = () => {
    this.props.dispatch(clear());
  };

  render() {
    const { alert, vertical, horizontal } = this.props;
    return (
      <div>
        {alert && (
          <Snackbar
            open={typeof alert === 'string'}
            onClose={this.handleClose}
            direction="up"
            anchorOrigin={{
              vertical: `${vertical}`,
              horizontal: `${horizontal}`,
            }}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            key={alert}
            message={<span id="message-id">{alert}</span>}
          />
        )}
      </div>
    );
  }
}

Alert.propTypes = {
  dispatch: PropTypes.func,
  alert: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
};

const withReducer = injectReducer({ key: 'alert', reducer: alertReducer });

const mapStateToProps = (state) => {
  if (state.toJS().alert && state.toJS().alert.payload) {
    return {
      alert: state.toJS().alert.payload.message,
      vertical: state.toJS().alert.payload.vertical || 'bottom',
      horizontal: state.toJS().alert.payload.horizontal || 'left',
    };
  }
  return { alert: '' };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
)(Alert);
