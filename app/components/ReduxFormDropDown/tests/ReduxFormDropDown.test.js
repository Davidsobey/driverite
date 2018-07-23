import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import DropDown from '../index';

describe('<ReduxFormDropDown />', () => {
  const options = fromJS([
    {
      label: 'yes',
      value: true,
    },
    {
      label: 'no',
      value: false,
    },
    {
      label: 'maybe',
      value: undefined,
    },
  ]);

  it('should be render the DropDown with warnings', () => {
    const elementWithoutValueFormatter = shallow(
      <DropDown
        items={options}
        label="option list"
        name="testOption"
        labelFormatter={item => item.get('label')}
        valueFormatter={item => item.get('value')}
      />,
    );
    expect(elementWithoutValueFormatter).toBeDefined();
  });
});
