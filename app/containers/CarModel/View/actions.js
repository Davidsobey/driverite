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

export function loadCarModelRequest(modelID) {
  return {
    type: ACTIONS.GET_CAR_MODEL_REQUEST,
    payload: modelID,
  };
}

export function loadCarModelSuccess(model) {
  return {
    type: ACTIONS.GET_CAR_MODEL_SUCCESS,
    payload: model,
  };
}

// export function deleteCar(carId) {
//   return {
//     type: ACTIONS.DELETE_CARS,
//     payload: carId,
//   };
// }
