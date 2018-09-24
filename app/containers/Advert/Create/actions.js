/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createAdRequest(ad) {
  return {
    type: ACTIONS.CREATE_AD_REQUEST,
    payload: ad,
  };
}
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
