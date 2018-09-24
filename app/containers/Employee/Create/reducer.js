/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_EMPLOYEE_REQUEST } from './constants';

const initialState = fromJS({});

function makeCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EMPLOYEE_REQUEST:
      return state;
    default:
      return state;
  }
}

export default makeCreateReducer;
