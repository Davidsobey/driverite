
import { fromJS } from 'immutable';
import rotationReducer from '../reducer';

describe('rotationReducer', () => {
  it('returns the initial state', () => {
    expect(rotationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
