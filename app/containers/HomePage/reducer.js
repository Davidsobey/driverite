/*
 *
 * UserCreate reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_USER_REQUEST } from './constants';

const initialState = fromJS({});

function userCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return state;
    default:
      return state;
  }
}

export default userCreateReducer;
