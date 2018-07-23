/**
 *
 * FormActionButtons
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '../../components/Button';
import messages from './messages';
import { FormActionButtonsWrapper } from './styles';

function FormActionButtons({
  cancelAction,
  submitAction,
  cancelButtonText,
  submitButtonText,
}) {
  return (
    <FormActionButtonsWrapper>
      <Button variant="raised" onClick={cancelAction}>
        {cancelButtonText || <FormattedMessage {...messages.cancelButton} />}
      </Button>
      <Button variant="raised" color="primary" onClick={submitAction}>
        {submitButtonText || <FormattedMessage {...messages.sumbitButton} />}
      </Button>
    </FormActionButtonsWrapper>
  );
}

FormActionButtons.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
};

export default FormActionButtons;
