/*
 *
 * CarPhotoCreate actions
 *
 */
import * as ACTIONS from './constants';

export function createCarPhotoRequest(car, photos) {
  return {
    type: ACTIONS.CREATE_CAR_PHOTO_REQUEST,
    payload: [car, photos],
  };
}
export function loadAllCarsRequest() {
  return {
    type: ACTIONS.GET_ALL_CARS_REQUEST,
  };
}

export function loadAllCarsSuccess(cars) {
  return {
    type: ACTIONS.GET_ALL_CARS_SUCCESS,
    payload: cars,
  };
}
