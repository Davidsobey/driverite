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
// export function deleteCar(carId) {
//   return {
//     type: ACTIONS.DELETE_CARS,
//     payload: carId,
//   };
// }
