/*
 *
 * CarCreate actions
 *
 */
import * as ACTIONS from './constants';

export function createCarRequest(car) {
  return {
    type: ACTIONS.CREATE_CAR_REQUEST,
    payload: car,
  };
}
export function loadAllCarModelsRequest() {
  return {
    type: ACTIONS.GET_ALL_CAR_MODELS_REQUEST,
  };
}

export function loadAllCarModelsSuccess(models) {
  return {
    type: ACTIONS.GET_ALL_CAR_MODELS_SUCCESS,
    payload: models,
  };
}
