/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_CAR_REQUEST } from './constants';

const initialState = fromJS({});

function carCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CAR_REQUEST:
      return state;
    default:
      return state;
  }
}

export default carCreateReducer;
