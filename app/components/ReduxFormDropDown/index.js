import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { Select } from 'redux-form-material-ui';
import MenuItem from 'material-ui/Menu/MenuItem';
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { List } from 'immutable';

/* eslint-disable react/prefer-stateless-function, no-console */
export class ReduxFormDropDown extends React.PureComponent {
  render() {
    const {
      label,
      items,
      itemValueKey,
      itemLabelKey,
      helperText,
      reduxFieldProps,
      labelFormatter,
      valueFormatter,
      name,
    } = this.props;

    if (itemLabelKey) {
      console.warn(
        'itemLabelKey deprecated - use labelFormatter function instead',
      );
    }
    if (itemValueKey) {
      console.warn(
        'itemValueKey deprecated - use valueFormatter function instead',
      );
    }
    if (!List.isList(items) && items.length < 1) {
      console.warn(
        'support for non immutable lists will be removed soon - please switch to immutable data structures',
      );
    }

    return (
      <FormControl>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Field
          component={Select}
          {...reduxFieldProps}
          name={name}
          className="redux-form-drop-down"
        >
          {items.map((item) => {
            let value = item[itemValueKey];
            let itemLabel = item[itemLabelKey];
            if (valueFormatter) {
              value = valueFormatter(item);
            }
            if (labelFormatter) {
              itemLabel = labelFormatter(item);
            }
            return (
              <MenuItem key={itemLabel} value={value}>
                {itemLabel}
              </MenuItem>
            );
          })}
        </Field>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

ReduxFormDropDown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  itemValueKey: PropTypes.string,
  itemLabelKey: PropTypes.string,
  helperText: PropTypes.string,
  reduxFieldProps: PropTypes.object,
  labelFormatter: PropTypes.func,
  valueFormatter: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default ReduxFormDropDown;
