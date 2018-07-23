
import { fromJS } from 'immutable';
import managerCreateReducer from '../reducer';

describe('managerCreateReducer', () => {
  it('returns the initial state', () => {
    expect(managerCreateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
