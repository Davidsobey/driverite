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

// eslint-disable-next-line
export function loadAllCarsRequest() {
  return {
    type: ACTIONS.GET_ALL_CARS_REQUEST,
  };
}

// eslint-disable-next-line
export function loadAllCarsSuccess(cars) {
  return {
    type: ACTIONS.GET_ALL_CARS_SUCCESS,
    payload: cars,
  };
}

export function loadCarRequest(carID) {
  return {
    type: ACTIONS.GET_CAR_REQUEST,
    payload: carID,
  };
}

export function loadCarSuccess(car) {
  return {
    type: ACTIONS.GET_CAR_SUCCESS,
    payload: car,
  };
}

// export function deleteCar(carId) {
//   return {
//     type: ACTIONS.DELETE_CARS,
//     payload: carId,
//   };
// }
