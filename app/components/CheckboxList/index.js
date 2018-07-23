import React from 'react';
import propTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';

class CheckboxList extends React.Component {
  state = {
    content: this.props.content,
  };

  handleChange = key => (event, checked) => {
    const newstate = this.state.content;
    newstate[key].ticked = checked;
    this.setState({
      newstate,
    });
  };

  render() {
    return (
      <FormControl>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          {this.state.content.map(checkbox => (
            <FormControlLabel
              key={checkbox.key}
              control={
                <Checkbox
                  checked={checkbox.ticked}
                  onChange={this.handleChange(checkbox.key)}
                  value={checkbox.name}
                />
              }
              label={checkbox.display}
            />
          ))}
        </FormGroup>
      </FormControl>
    );
  }
}

CheckboxList.propTypes = {
  content: propTypes.array,
};

export default CheckboxList;
