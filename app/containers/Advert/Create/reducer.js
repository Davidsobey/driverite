/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_AD_REQUEST } from './constants';

const initialState = fromJS({});

function adCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_AD_REQUEST:
      return state;
    default:
      return state;
  }
}

export default adCreateReducer;
