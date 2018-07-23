/*
 *
 * ManagerCreate reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATE_MANAGER_ACTION,
} from './constants';


const initialState = fromJS({});

function managerCreateReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CREATE_MANAGER_ACTION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default managerCreateReducer;
