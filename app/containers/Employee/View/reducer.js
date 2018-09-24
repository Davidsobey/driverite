/*
 *
 * Rotation reducer
 *
 */

import { fromJS } from 'immutable';
// import { isNumber } from 'util';

import * as ACTIONS from './constants';

const initialState = fromJS({});

// function filterById(id, delId) {
//   if (isNumber(id) && id !== 0 && id !== delId) {
//     return true;
//   }
//   return false;
// }

function rotationReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_ALL_EMPLOYEES:
      return state;
    case ACTIONS.GET_ALL_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.payload };
    case ACTIONS.GET_EMPLOYEE_REQUEST:
      return state;
    case ACTIONS.GET_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.payload };
    // case ACTIONS.DELETE_ROTATIONS:
    //   return {
    //     ...state,
    //     rotations: state.rotations.filter(obj =>
    //       filterById(obj.id, action.payload),
    //     ),
    //   };
    // case ACTIONS.GET_ROTATION:
    //   return state;
    default:
      return state;
  }
}

export default rotationReducer;
