/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import ToggleOption from '../ToggleOption';

function Toggle(props) {
  const {
    values, messages, onToggle, value,
  } = props;
  let content = (
    <option>
--
    </option>
  );

  // If we have items, render them
  if (values) {
    content = values.map(val => (
      <ToggleOption key={val} value={val} message={messages[value]} />
    ));
  }

  return (
    <Select value={value} onChange={onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
