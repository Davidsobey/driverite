/*
 *
 * Rotation actions
 *
 */

import * as ACTIONS from './constants';

// export function getCar(carId) {
//   return {
//     type: ACTIONS.GET_CAR,
//     payload: carId,
//   };
// }

export function loadAllCarMakeRequest() {
  return {
    type: ACTIONS.GET_ALL_CAR_MAKES_REQUEST,
  };
}

export function loadAllCarMakeSuccess(makes) {
  return {
    type: ACTIONS.GET_ALL_CAR_MAKES_SUCCESS,
    payload: makes,
  };
}

export function loadCarMakeRequest(makeID) {
  return {
    type: ACTIONS.GET_CAR_MAKE_REQUEST,
    payload: makeID,
  };
}

export function loadCarMakeSuccess(make) {
  return {
    type: ACTIONS.GET_CAR_MAKE_SUCCESS,
    payload: make,
  };
}

export function deleteCarMake(carMakeID) {
  return {
    type: ACTIONS.DELETE_CAR_MAKES_REQUEST,
    payload: carMakeID,
  };
}
