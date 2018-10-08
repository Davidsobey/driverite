/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_CAR_MODEL_REQUEST } from './constants';

const initialState = fromJS({});

function modelCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CAR_MODEL_REQUEST:
      return state;
    default:
      return state;
  }
}

export default modelCreateReducer;
