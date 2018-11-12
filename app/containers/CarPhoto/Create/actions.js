/*
 *
 * CarPhotoCreate actions
 *
 */
import * as ACTIONS from './constants';

export function createCarPhotoRequest(carPhoto) {
  console.log('actions');
  console.log(carPhoto);
  return {
    type: ACTIONS.CREATE_CAR_PHOTO_REQUEST,
    payload: carPhoto,
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
