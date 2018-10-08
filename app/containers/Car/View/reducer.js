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

function carReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_ALL_CARS_REQUEST:
      return { ...state, carsLoading: true };
    case ACTIONS.GET_ALL_CARS_SUCCESS:
      return { ...state, cars: action.payload, carsLoading: false };
    case ACTIONS.GET_CAR_REQUEST:
      return state;
    case ACTIONS.GET_CAR_SUCCESS:
      return { ...state, car: action.payload };
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

export default carReducer;
