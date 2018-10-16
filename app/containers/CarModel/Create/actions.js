/*
 *
 * ModelCreate actions
 *
 */
import * as ACTIONS from './constants';

export function createCarModelRequest(carModel) {
  return {
    type: ACTIONS.CREATE_CAR_MODEL_REQUEST,
    payload: carModel,
  };
}
export function loadAllCarMakesRequest() {
  return {
    type: ACTIONS.GET_ALL_CAR_MAKES_REQUEST,
  };
}

export function loadAllCarMakesSuccess(makes) {
  return {
    type: ACTIONS.GET_ALL_CAR_MAKES_SUCCESS,
    payload: makes,
  };
}
