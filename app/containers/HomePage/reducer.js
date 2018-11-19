/*
 *
 * Homepage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_USER_REQUEST,
  LOAD_AD_REQUEST,
  LOAD_AD_SUCCESS,
} from './constants';

const initialState = fromJS({});

function userCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return state;
    case LOAD_AD_REQUEST:
      return state;
    case LOAD_AD_SUCCESS:
      return { ...state, ads: action.payload };
    default:
      return state;
  }
}

export default userCreateReducer;
