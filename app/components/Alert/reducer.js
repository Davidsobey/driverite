import { fromJS } from 'immutable';
import CONSTANTS from './constants';

const initialState = fromJS({});

export function alertReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.SUCCESS:
      return state.set('payload', action.payload);
    case CONSTANTS.ERROR:
      return state.set('payload', action.payload);
    case CONSTANTS.CLEAR:
      return state.set('payload', null);
    default:
      return state;
  }
}

export default alertReducer;
